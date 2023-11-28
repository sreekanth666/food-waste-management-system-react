import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

function Profile() {
    const [userDetails, setUserDetails] = useState({})
    useEffect(() => {
        if (sessionStorage.getItem("existingUser")) {
            setUserDetails(JSON.parse(sessionStorage.getItem("existingUser")));
        } else {
            
        }
    }, [])
    return (
        <>
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <p className="fs-5" style={{fontWeight:'500'}}>Profile</p>
                <div>
                    <button className='btn me-2 btn-success goto-dashboard ps-3 pe-3'>Edit</button>
                    <Button variant="btn border border-dark border-1 rounded-3 me-2 sign-up" style={{fontWeight:"500"}}>Update Password</Button>
                </div>
            </div>
            <div className="container-fluid row gap-3 p-0 mt-3">
                <div className="col-sm-12 col-md-12 col-lg col-xl">
                    <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png" alt="" className='img-fluid' />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-9 col-xl-9 d-flex flex-column justify-content-center">
                <div className='row'>
                        <div className="col-2 text-secondary">Name:</div>
                        <div className="col-auto">
                            <p>{userDetails?.username}</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-2 text-secondary">Phone:</div>
                        <div className="col-auto">
                            <p>{userDetails?.phone}</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-2 text-secondary">Email:</div>
                        <div className="col-auto">
                            <p>{userDetails?.email}</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-2 text-secondary">Address:</div>
                        <div className="col-auto">
                            <p className='m-0'>{userDetails?.address}</p>
                            <p className='m-0'>{userDetails?.city}</p>
                            <p className='m-0'>{userDetails?.district}</p>
                            <p className='m-0'>{userDetails?.state}</p>
                            <p className='m-0'>{userDetails?.pincode}</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='border-2' />
        </>
    )
}

export default Profile


