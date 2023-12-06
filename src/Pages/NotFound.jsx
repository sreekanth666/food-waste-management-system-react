import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom';

function NotFound() {
    const isTabletOrMobile = useMediaQuery({ minWidth: 1224 })
    console.log(isTabletOrMobile);
    return (
        <div className='container d-flex flex-column align-items-center justify-content-center' style={{height:'100dvh'}}>
            <div className='border-2 border rounded-5 ps-5 pe-5 mb-3'>
                <p className='text-center m-0 p-0' style={isTabletOrMobile ? {fontSize:'7rem',fontWeight:'500',color:'#16a34a'} : {fontSize:'4rem',fontWeight:'500',color:'#16a34a'}}>404</p>
                <p className='fs-1 p-0 text-center' style={{color:'#16a34a'}}>Not found</p>
            </div>
            <p className=''>Sorry, requested page doesn't exist</p>
            <Link to='/' style={{textDecoration:'none'}}><button className='btn ps-3 pe-3 text-white' style={{backgroundColor:'#16a34a',fontWeight:'500'}}>Go to home</button></Link>
        </div>
    )
}

export default NotFound