import React, { useEffect, useState } from 'react'
import '../CSS/dashhome.css'
import CreateRequest from '../../Components/CreateRequest'
import { getAllUserRequests } from '../../Services/allAPI';

function DashHome() {
    const [userRequests, setUserRequests] = useState([])
    const fetchAllRequests = async() => {
        const token = sessionStorage.getItem("token")
        const reqHeader = {
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
        const result = await getAllUserRequests(reqHeader)
        setUserRequests(result.data)
    }
    useEffect(() => {
        fetchAllRequests()
    }, [])
    return (
        <>
            <div className="container-fluid rounded-3 p-3" style={{backgroundColor:'#e8f3ee'}}>
                <p className="fs-5 m-0" style={{fontWeight:'500'}}>Home</p>
            </div>
            <div className='d-flex justify-content-center p-0 w-100 mb-2'>
                <div className="container-fluid row p-0 gap-3 mt-3 w-100">
                    <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 p-0">
                        <div className="row gap-3 m-0">
                            <div className="col-12 border rounded-3 p-0">
                                <div className="profile-head fs-5 p-2 rounded-top-3" style={{backgroundColor:'#e8f3ee', fontWeight:'500'}}>Requests Made</div>
                                <div className="row gap-2 m-0 p-0 mt-3 mb-3">
                                    <div className="col-8" style={{color:'#7c7c7c'}}>Your Food Requests</div>
                                    <div className="col">
                                        <span className='home-badges-1' style={{color:'#531dab'}}>{userRequests.allFoodRequests?.length}</span>
                                    </div>
                                </div>
                                <hr className='p-0 m-0' style={{borderColor: '#CDCFD0'}}/>
                                <div className="row gap-2 m-0 p-0 mt-3 mb-3">
                                    <div className="col-8" style={{color:'#7c7c7c'}}>Your Waste Requests</div>
                                    <div className="col">
                                        <span className='home-badges-1' style={{color:'#531dab'}}>{userRequests.allWasteRequest?.length}</span>
                                    </div>
                                </div>                                
                            </div>
                            <div className="col-12 border rounded-3 p-0">
                                <div className="profile-head fs-5 p-2 rounded-top-3" style={{backgroundColor:'#e8f3ee', fontWeight:'500'}}>Requests Accepted</div>
                                <div className="row gap-2 m-0 p-0 mt-3 mb-3">
                                    <div className="col-8" style={{color:'#7c7c7c'}}>Food Requests You Accepted</div>
                                    <div className="col">
                                        <span className='home-badges-2' style={{color:'#08979c'}}>5698</span>
                                    </div>
                                </div>
                                <hr className='p-0 m-0' style={{borderColor: '#CDCFD0'}}/>
                                <div className="row gap-2 m-0 p-0 mt-3 mb-3">
                                    <div className="col-8" style={{color:'#7c7c7c'}}>Waste Requests You Accepted</div>
                                    <div className="col">
                                        <span className='home-badges-2' style={{color:'#08979c'}}>5698</span>
                                    </div>
                                </div>                                
                            </div>
                        </div>
                    </div>
                    <div className="col border rounded-3 p-0">
                        <div className="profile-head fs-5 p-2 rounded-top-3" style={{backgroundColor:'#e8f3ee', fontWeight:'500'}}>Quick Links</div>
                        <div className="row gap-2 m-0 p-0 mt-3 mb-3">
                            <p className='m-0 text-center' style={{color:'#7c7c7c'}}>Central Government</p>
                            <div className='col d-flex flex-column m-0 '>
                                <button className='btn btn-success text-start btn-sm goto-dashboard m-1' style={{minWidth:'13rem'}}>Department of Food and Public Distribution</button>
                                <button className='btn btn-success text-start btn-sm goto-dashboard m-1' style={{minWidth:'13rem'}}>Food Corporation of India</button>
                                <button className='btn btn-success text-start btn-sm goto-dashboard m-1' style={{minWidth:'13rem'}}>FSSAI</button>
                            </div>
                            <p className='m-0 text-center mt-2' style={{color:'#7c7c7c'}}>Kerala Government</p>
                            <div className='col d-flex flex-column m-0 '>
                                <button className='btn btn-success text-start btn-sm goto-dashboard m-1' style={{minWidth:'13rem'}}>Food Safety Kerala</button>
                                <button className='btn btn-success text-start btn-sm goto-dashboard m-1' style={{minWidth:'13rem'}}>Civil Supplies and Consumer Affairs</button>
                            </div>
                        </div>
                    </div>
                    <div className="col border rounded-3 p-0">
                        <div className="profile-head fs-5 p-2 rounded-top-3" style={{backgroundColor:'#e8f3ee', fontWeight:'500'}}>Contact us</div>
                        <div className="row gap-2 m-0 p-0 mt-3 mb-3">
                            <p className='m-0 text-center' style={{color:'#7c7c7c'}}>If you encounter any issues with the food or service, please don't hesitate to contact us. We're here to help!</p>
                            <div className='col d-flex flex-column m-0 '>
                                <div className='row gap-2 m-0 p-0'>
                                    <div className="col-sm-12 col-md-12 col-lg col-xl d-flex flex-column rounded-3 p-2 align-items-center mb-3" style={{backgroundColor:'#e8f3ee'}}>
                                        <p className='fs-5 m-0' style={{fontWeight:'500'}}>Call us</p>
                                        <p className='m-0 text-center' style={{color:'#7c7c7c'}}>+91 7592033013</p>
                                    </div>
                                    <div className="col-sm-12 col-md-12 col-lg col-xl d-flex flex-column rounded-3 p-2 align-items-center mb-3" style={{backgroundColor:'#e8f3ee'}}>
                                        <p className='fs-5 m-0' style={{fontWeight:'500'}}>Email us</p>
                                        <p className='m-0 text-center' style={{color:'#7c7c7c'}}>support@smile.org</p>
                                    </div>
                                    <div className="col-sm-12 col-md-12 col-lg col-xl d-flex flex-column rounded-3 p-2 align-items-center mb-3" style={{backgroundColor:'#e8f3ee'}}>
                                        <p className='fs-5 m-0' style={{fontWeight:'500'}}>Official Address</p>
                                        <p className='m-0 text-center' style={{color:'#7c7c7c'}}>
                                            Smile Organization <br />
                                            2nd Floor 104,
                                            ABC Building,
                                            Thrissur 680601
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashHome