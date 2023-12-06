import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom';

function UnAuth() {
    const isTabletOrMobile = useMediaQuery({ minWidth: 1224 })
    console.log(isTabletOrMobile);
    return (
        <div className='container d-flex flex-column align-items-center justify-content-center' style={{height:'100dvh'}}>
            <div className='border-2 border rounded-5 ps-5 pe-5 mb-3'>
                <p className='text-center m-0 p-0' style={isTabletOrMobile ? {fontSize:'7rem',fontWeight:'500',color:'#16a34a'} : {fontSize:'4rem',fontWeight:'500',color:'#16a34a'}}>403</p>
                <p className='fs-1 p-0 text-center' style={{color:'#16a34a'}}>Access Denied</p>
            </div>
            <p className='m-0'>Sorry, You don't have permission to access this page.</p>
            <p>Already have and account? <Link to='/login' style={{textDecoration:'none',color:'#16a34a'}}>Login</Link></p>
            <Link to='/' style={{textDecoration:'none'}}><button className='btn ps-3 pe-3 text-white' style={{backgroundColor:'#16a34a',fontWeight:'500'}}>Go to home</button></Link>
        </div>
    )
}

export default UnAuth