import { Button } from '@mui/material'
import React from 'react'
import { useNavigate}  from 'react-router-dom'
import "./404.css"

function Page404(){
    let navigate = useNavigate();

    return <div className='page404'>
        <h1><strong>OOPS!</strong></h1>
        <h2>404 - PAGE NOT FOUND</h2>
        <p>The page you are looking for might have been removed </p>
        <p>or had its name change or is temporaily unavailable</p>
        <Button onClick={() => navigate(-1)}>Go back</Button>
    </div>
}
export default Page404