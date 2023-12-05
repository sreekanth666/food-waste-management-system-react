import React, { useContext, useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import UpdateProfile from '../../Components/UpdateProfile';
import ChangePassword from './ChangePassword';
import { toast } from 'react-toastify';
import { userApiHandleContext } from '../../Context/ContextShare';
import { useMediaQuery } from 'react-responsive';

function Profile() {
    const isTabletOrMobile = useMediaQuery({ minWidth: 1224 })
    const {sessionUpdate, setSessionUpdate} = useContext(userApiHandleContext)
    const [userDetails, setUserDetails] = useState({})
    useEffect(() => {
        if (sessionStorage.getItem("existingUser")) {
            setUserDetails(JSON.parse(sessionStorage.getItem("existingUser")));
        } else {
            toast.error("An internal error occurred. Please login again")
        }
    }, [sessionUpdate])

    // Handle logout
    const logout = () => {
        sessionStorage.removeItem("existingUser")
        sessionStorage.removeItem("token")
        navigate("/")
    }
    return (
        <>
            <div className={!isTabletOrMobile ? "d-flex align-items-center justify-content-between container-fluid rounded-3 p-3" : "container-fluid rounded-3 p-3"} style={{backgroundColor:'#e8f3ee'}}>
                <p className="fs-5 m-0" style={{fontWeight:'500'}}>Profile</p>
                {
                    !isTabletOrMobile &&
                    <button className='btn btn-danger btn-sm' style={{fontWeight:'500'}} onClick={logout}>Logout</button>
                }
            </div>
            <div className='d-flex justify-content-center p-0 w-100'>
                <div className="container-fluid row p-0 gap-3 mt-3 w-100">
                    <div className="col border rounded-3 pt-3">
                        <div className="main d-flex flex-column align-items-center">
                            <div>
                            <Avatar
                                sx={{ bgcolor: "#16a34a", width: '5rem', height: '5rem', fontSize:'2rem' }}
                                alt="Remy Sharp"
                                src="/broken-image.jpg"
                            >
                                {userDetails.username?.split('')[0]}
                            </Avatar>
                            </div>
                            <p className='fs-3 m-0' style={{fontWeight:'500'}}>{userDetails.username}</p>
                            <p style={{color:'#7c7c7c'}}>{userDetails.attribute}</p>
                        </div>
                        <div className="d-flex flex-column rounded-3 p-2 align-items-center mb-3" style={{backgroundColor:'#e8f3ee'}}>
                            <p className='fs-5 m-0' style={{fontWeight:'500'}}>Don't miss out!</p>
                            <p className='m-0 text-center' style={{color:'#7c7c7c'}}>Remember to update your email for staying connected</p>
                            <UpdateProfile />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 p-0">
                        <div className="row gap-3 m-0">
                            <div className="col-12 border rounded-3 p-0">
                                <div className="profile-head fs-5 p-2 rounded-top-3" style={{backgroundColor:'#e8f3ee', fontWeight:'500'}}>Contact Details</div>
                                <div className="row gap-2 m-0 p-0 mt-3 mb-3">
                                    <div className="col-7" style={{color:'#7c7c7c'}}>Phone number</div>
                                    <div className="col" style={{wordWrap:'break-word'}}>{userDetails.phone}</div>
                                </div>
                                <hr className='p-0 m-0' style={{borderColor: '#CDCFD0'}}/>
                                <div className="row gap-2 m-0 p-0 mt-3 mb-3">
                                    <div className="col-7" style={{color:'#7c7c7c'}}>Communication Email</div>
                                    <div className="col" style={{wordWrap:'break-word'}}>{userDetails.email}</div>
                                </div>
                                <hr className='p-0 m-0' style={{borderColor: '#CDCFD0'}}/>
                                <div className="row gap-2 m-0 p-0 mt-3 mb-3">
                                    <div className="col-7" style={{color:'#7c7c7c'}}>Address</div>
                                    <div className="col" style={{wordWrap:'break-word'}}>
                                        {userDetails.address}, {userDetails.city}, {userDetails.district}, {userDetails.state}, {userDetails.pincode}
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 border rounded-3 p-0">
                                <div className="profile-head fs-5 p-2 rounded-top-3" style={{backgroundColor:'#e8f3ee', fontWeight:'500'}}>Account Details</div>
                                <div className="row gap-2 m-0 p-0 mt-3 mb-3">
                                    <div className="col-7" style={{color:'#7c7c7c'}}>Account ID</div>
                                    <div className="col" style={{wordWrap:'break-word'}}>{userDetails._id}</div>
                                </div>
                                <hr className='p-0 m-0' style={{borderColor: '#CDCFD0'}}/>
                                <div className="row gap-2 m-0 p-0 mt-3 mb-3">
                                    <div className="col" style={{color:'#7c7c7c'}}>Password</div>
                                    <div className="col">***********</div>
                                    <div className="col"><ChangePassword /></div>
                                </div>
                                <div className="row gap-2 m-0 p-0 mb-3">
                                    <div className="col-8 text-danger" style={{color:'#7c7c7c',fontSize:'small'}}>Your password is crucial—keep it safe, never share, and remember it well</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile


