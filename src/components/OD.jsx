import React, { useRef, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import { drawRect } from "../utilitie";

function OD() {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    let interval;

    const runCoco = async () => {
        const net = await tf.loadGraphModel('https://livelong.s3.au-syd.cloud-object-storage.appdomain.cloud/model.json')
        interval = setInterval(() => {
        detect(net);
        }, 16.7);
    };

    const detect = async (net) => {
        if (
        typeof webcamRef.current !== "undefined" &&
        webcamRef.current !== null &&
        webcamRef.current.video.readyState === 4
        ) {
        const video = webcamRef.current.video;
        const videoWidth = webcamRef.current.video.videoWidth;
        const videoHeight = webcamRef.current.video.videoHeight;

        webcamRef.current.video.width = videoWidth;
        webcamRef.current.video.height = videoHeight;

        canvasRef.current.width = videoWidth;
        canvasRef.current.height = videoHeight;

        const img = tf.browser.fromPixels(video)
        const resized = tf.image.resizeBilinear(img, [640,480])
        const casted = resized.cast('int32')
        const expanded = casted.expandDims(0)
        const obj = await net.executeAsync(expanded)
        
        // console.log(await obj[1].array())

        const boxes = await obj[4].array()
        const classes = await obj[5].array()
        const scores = await obj[6].array()
        
        if (!canvasRef || !canvasRef.current){
            clearInterval(interval);
            return;
        }
        const ctx = canvasRef.current.getContext("2d");

        requestAnimationFrame(()=>{drawRect(boxes[0], classes[0], scores[0], 0.7, videoWidth, videoHeight, ctx)}); 

        tf.dispose(img)
        tf.dispose(resized)
        tf.dispose(casted)
        tf.dispose(expanded)
        tf.dispose(obj)

        }
    };
    useEffect(()=>{runCoco()},[]);

    return (
        <div className="object-detection">
            <Webcam
              ref={webcamRef}
              muted={true}
              mirrored={true} 
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                left: 0,
                right: 0,
                textAlign: "center",
                zindex: 9,
                width: 640,
                height: 480,
              }}
            />
            <canvas
              ref={canvasRef}
              style={{
                position: "absolute",
                marginLeft: "auto",
                marginRight: "auto",
                left: 0,
                right: 0,
                textAlign: "center",
                zindex: 8,
                width: 640,
                height: 480,
              }}
            />
        </div>
      );
}

export default OD;