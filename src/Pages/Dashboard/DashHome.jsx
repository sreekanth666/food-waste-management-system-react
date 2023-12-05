import React, { useContext, useEffect, useState } from 'react'
import '../CSS/dashhome.css'
import { userApiHandleContext } from '../../Context/ContextShare'

function DashHome() {
    const {requestsMadeByUser, setRequestMadeByUser} = useContext(userApiHandleContext)
    const {acceptedRequestsByUser, setAcceptedRequestsByUser} = useContext(userApiHandleContext)
    
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
                                        <span className='home-badges-1' style={{color:'#531dab'}}>{requestsMadeByUser.allFoodRequests?.length > 0 ? requestsMadeByUser.allFoodRequests?.length : "0"}</span>
                                    </div>
                                </div>
                                <hr className='p-0 m-0' style={{borderColor: '#CDCFD0'}}/>
                                <div className="row gap-2 m-0 p-0 mt-3 mb-3">
                                    <div className="col-8" style={{color:'#7c7c7c'}}>Your Waste Requests</div>
                                    <div className="col">
                                        <span className='home-badges-1' style={{color:'#531dab'}}>{requestsMadeByUser.allWasteRequest?.length > 0 ? requestsMadeByUser.allWasteRequest?.length : "0"}</span>
                                    </div>
                                </div>                                
                            </div>
                            <div className="col-12 border rounded-3 p-0">
                                <div className="profile-head fs-5 p-2 rounded-top-3" style={{backgroundColor:'#e8f3ee', fontWeight:'500'}}>Requests Accepted</div>
                                <div className="row gap-2 m-0 p-0 mt-3 mb-3">
                                    <div className="col-8" style={{color:'#7c7c7c'}}>Food Requests You Accepted</div>
                                    <div className="col">
                                        <span className='home-badges-2' style={{color:'#08979c'}}>{acceptedRequestsByUser.allFoodAccepts?.length > 0 ? acceptedRequestsByUser.allFoodAccepts?.length : "0"}</span>
                                    </div>
                                </div>
                                <hr className='p-0 m-0' style={{borderColor: '#CDCFD0'}}/>
                                <div className="row gap-2 m-0 p-0 mt-3 mb-3">
                                    <div className="col-8" style={{color:'#7c7c7c'}}>Waste Requests You Accepted</div>
                                    <div className="col">
                                        <span className='home-badges-2' style={{color:'#08979c'}}>{acceptedRequestsByUser.allWasteAccepts?.length > 0 ? acceptedRequestsByUser.allWasteAccepts?.length : "0"}</span>
                                    </div>
                                </div>                                
                            </div>
                        </div>
                    </div>
                    <div className="col border rounded-3 p-0">
                        <div className="profile-head fs-5 p-2 rounded-top-3" style={{backgroundColor:'#e8f3ee', fontWeight:'500'}}>Pending</div>
                        <div className="row gap-2 m-0 p-0 mt-3 mb-3">
                            <p className='m-0 fs-5'>Your requests</p>
                            <div className='col d-flex flex-column m-0 '>
                                <div className="row gap-2 m-0 p-0">
                                    <div className="col-8" style={{color:'#7c7c7c'}}>Food Requests</div>
                                    <div className="col">
                                        <span className='home-badges-4' style={{color:'#cf1322'}}>{requestsMadeByUser.allFoodRequests?.filter(requests => (requests.status !== "Delivered")).length > 0 ? requestsMadeByUser.allFoodRequests?.filter(requests => (requests.status !== "Delivered")).length : "0"}</span>
                                    </div>
                                </div>
                                <hr className='p-0 mt-2 mb-2' style={{borderColor: '#CDCFD0'}}/>
                                <div className="row gap-2 m-0 p-0">
                                    <div className="col-8" style={{color:'#7c7c7c'}}>Waste Requests</div>
                                    <div className="col">
                                        <span className='home-badges-4' style={{color:'#cf1322'}}>{requestsMadeByUser.allWasteRequest?.filter(requests => (requests.status !== "Delivered")).length > 0 ? requestsMadeByUser.allWasteRequest?.filter(requests => (requests.status !== "Delivered")).length : "0"}</span>
                                    </div>
                                </div>
                            </div>
                            <p className='m-0 mt-2 fs-5'>Requests you accepted</p>
                            <div className='col d-flex flex-column m-0 '>
                            <div className="row gap-2 m-0 p-0">
                                    <div className="col-8" style={{color:'#7c7c7c'}}>Food Requests</div>
                                    <div className="col">
                                        <span className='home-badges-4' style={{color:'#cf1322'}}>{acceptedRequestsByUser.allFoodAccepts?.filter(requests => (requests.status == "Accepted")).length > 0 ? acceptedRequestsByUser.allFoodAccepts?.filter(requests => (requests.status == "Accepted")).length : "0"}</span>
                                    </div>
                                </div>
                                <hr className='p-0 mt-2 mb-2' style={{borderColor: '#CDCFD0'}}/>
                                <div className="row gap-2 m-0 p-0">
                                    <div className="col-8" style={{color:'#7c7c7c'}}>Waste Requests</div>
                                    <div className="col">
                                        <span className='home-badges-4' style={{color:'#cf1322'}}>{acceptedRequestsByUser.allWasteAccepts?.filter(requests => (requests.status == "Accepted")).length > 0 ? acceptedRequestsByUser.allWasteAccepts?.filter(requests => (requests.status == "Accepted")).length : "0"}</span>
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