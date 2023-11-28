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
            <p className="fs-1 mt-4 mb-4" style={{fontWeight:'500'}}>Profile</p>
            <div className="align-items-center d-flex justify-content-center">
                <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png" alt="" className='img-fluid' style={{height:"7rem"}} />
            </div>
            <div className="container-fluid row p-0 mt-3">
                    <div className='row'>
                        <div className="col-3 text-secondary">Name:</div>
                        <div className="col">
                            <p>{userDetails.username}</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-3 text-secondary">Phone:</div>
                        <div className="col-auto">
                            <p>{userDetails.phone}</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-3 text-secondary">Email:</div>
                        <div className="col-auto">
                            <p>{userDetails.email}</p>
                        </div>
                    </div>
                <div className='row'>
                    <div className="col-3 text-secondary">Address:</div>
                    <div className="col-auto">
                        <p className='m-0'>{userDetails.address}</p>
                        <p className='m-0'>{userDetails.city}</p>
                        <p className='m-0'>{userDetails.district}</p>
                        <p className='m-0'>{userDetails.state}</p>
                        <p className='m-0'>{userDetails.pincode}</p>
                    </div>
                </div>

                <div className='mt-4'>
                    <button className='btn me-2 btn-success goto-dashboard ps-3 pe-3'>Edit</button>
                    <Button variant="btn border border-dark border-1 rounded-3 me-2" style={{fontWeight:"500"}}>Update Password</Button>
                </div>
            </div>
        </>
    )
}

export default Profile