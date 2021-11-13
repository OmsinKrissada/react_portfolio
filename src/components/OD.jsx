import React, { useRef, useEffect} from "react";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";

function OD(link,box,cls,score, label) {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    let interval;

    const runCoco = async () => {
        const net = await tf.loadGraphModel(link)
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
        

        const boxes = await obj[box].array()
        const classes = await obj[cls].array()
        const scores = await obj[score].array()
        
        if (!canvasRef || !canvasRef.current){
            clearInterval(interval);
            return;
        }
        const ctx = canvasRef.current.getContext("2d");
        requestAnimationFrame(()=>{drawRect(boxes[0], classes[0], scores[0], 0.7, videoWidth, videoHeight, ctx, label)}); 
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
                position: "absolute",
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
const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx, labelMap)=>{
  for(let i=0; i<=boxes.length; i++){
      if(boxes[i] && classes[i] && scores[i]>threshold){
          // Extract variables
          const [y,x,height,width] = boxes[i]
          const text = classes[i]
          
          // Set styling
          ctx.strokeStyle = labelMap[text]['color']
          ctx.lineWidth = 10
          ctx.fillStyle = 'white'
          ctx.font = '30px Arial'         
          
          // DRAW!!
          ctx.beginPath()
          ctx.fillText(labelMap[text]['name'] + ' - ' + Math.round(scores[i]*100)/100, x*imgWidth, y*imgHeight-10)
          ctx.rect(x*imgWidth, y*imgHeight, width*imgWidth/2, height*imgHeight/2);
          ctx.stroke()
      }
  } 
}
export default OD;