import React from 'react'
import '../CSS/dashhome.css'
import { Link } from 'react-router-dom'
import CreateRequest from '../../Components/CreateRequest'

function DashHome() {
    return (
        <>
            <div className='container-fluid d-flex flex-column align-items-center'>
                <div className="d-flex row gap-2 flex-wrap justify-content-between text-center" style={{minHeight:'150px',width:'100%'}}>
                    <div className="border col mb-3 rounded-3 text-center d-flex flex-column p-3 border-end">
                        <p className="fs-4" style={{fontWeight:'500'}}>Requested</p>
                        <div className='row'>
                            <div className="col-6 border-end d-flex justify-content-center align-items-center">Total</div>
                            <div className="col-6 d-flex justify-content-center align-items-center" style={{color:'#531dab'}}><span className='home-badges-1'>5698</span></div>
                        </div>
                    </div>
                    <div className="border mb-3 rounded-3 d-flex flex-column text-center p-3 border-end col">
                        <p className="fs-4" style={{fontWeight:'500'}}>Accepted</p>
                        <div className='row'>
                            <div className="col-6 border-end d-flex justify-content-center align-items-center">Total</div>
                            <div className="col-6 d-flex justify-content-center align-items-center" style={{color:'#08979c'}}><span className='home-badges-2'>5698</span></div>
                        </div>
                    </div>
                    <div className="border mb-3 rounded-3 d-flex flex-column text-center p-3 col">
                        <p className="fs-4" style={{fontWeight:'500'}}>Contributed</p>
                        <div className='row'>
                            <div className="col-6 border-end d-flex justify-content-center align-items-center">Total</div>
                            <div className="col-6 d-flex justify-content-center align-items-center" style={{color:'#389e0d'}}><span className='home-badges-3'>5698</span></div>
                        </div>
                    </div>
                </div>

                <div className="mt-2 row gap-3 p-0" style={{minHeight:'150px',width:'100%'}}>
                    <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 d-flex flex-column p-3 pb-1 border rounded-3">
                        <p className="fs-5" style={{fontWeight:'500'}}>Pending</p>

                        <div className='d-flex flex-wrap justify-content-between align-items-center'>
                            <div className="border mb-3 rounded-3 d-flex flex-column text-center p-3" style={{width:'20rem'}}>
                                <p className="fs-5" style={{fontWeight:'500'}}>Request Submitted</p>
                                <div className='row'>
                                    <div className="col-6 border-end d-flex justify-content-center align-items-center">Food</div>
                                    <div className="col-6 d-flex justify-content-center align-items-center" style={{color:'#389e0d'}}><span className='home-badges-3'>5698</span></div>
                                </div>

                                <div className='row mt-2'>
                                    <div className="col-6 border-end d-flex justify-content-center align-items-center">Waste</div>
                                    <div className="col-6 d-flex justify-content-center align-items-center" style={{color:'#389e0d'}}><span className='home-badges-3'>5698</span></div>
                                </div>
                            </div>
                            <div className="border mb-3 rounded-3 d-flex flex-column text-center p-3" style={{width:'20rem'}}>
                                <p className="fs-5" style={{fontWeight:'500'}}>Request accepted</p>
                                <div className='row'>
                                    <div className="col-6 border-end d-flex justify-content-center align-items-center">Food</div>
                                    <div className="col-6 d-flex justify-content-center align-items-center" style={{color:'#389e0d'}}><span className='home-badges-3'>5698</span></div>
                                </div>

                                <div className='row mt-2'>
                                    <div className="col-6 border-end d-flex justify-content-center align-items-center">Waste</div>
                                    <div className="col-6 d-flex justify-content-center align-items-center" style={{color:'#389e0d'}}><span className='home-badges-3'>5698</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg col-xl d-flex flex-column p-3 border rounded-3">
                        <p className="fs-5" style={{fontWeight:'500'}}>Your Rating</p>
                        <div className="stars d-flex flex-column justify-content-center align-items-center">
                            <div style={{width:'5rem',height:'5rem',border:'2px solid #39c33b'}} className='m-2 d-flex justify-content-center align-items-center rounded-circle'><p className='text-center m-0 fs-1' style={{color:'#39c33b'}}>5</p></div>
                            <div className='d-flex' style={{color:'#39c33b'}}>
                                Very good, keep contributing
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-4'><CreateRequest/></div>
            </div>
            

        </>
    )
}

export default DashHome