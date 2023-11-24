import React from 'react'

function Requests() {
    return (
        <>
            <p className="fs-1 mt-4 mb-4" style={{fontWeight:'500'}}>Requests</p>
            <div className='container-fluid d-flex flex-column align-items-center'>
                <div className="mt-2 row gap-3 p-0" style={{minHeight:'150px',width:'100%'}}>
                    <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 d-flex flex-column p-0 rounded-3">
                        <div class="card p-0 m-0 mb-3" style={{width:'100%'}}>
                            <div class="card-body m-0">
                                <h5 class="card-title">Food</h5>
                                <h6 class="card-subtitle mb-2 text-body-secondary">23/11/2023</h6>
                                <div class="card-text mt-2 mb-2">
                                    <div className="p-1 rounded-pill text-center" style={{border:'1px solid #d3adf7',backgroundColor:'#f9f0ff',color:'#531dab'}}>Requested</div>
                                </div>
                                <button class="btn rounded-pill btn-danger pt-1 pb-1">Delete</button>
                            </div>
                        </div>

                        <div class="card p-0 m-0 mb-3" style={{width:'100%'}}>
                            <div class="card-body m-0">
                                <h5 class="card-title">Food</h5>
                                <h6 class="card-subtitle mb-2 text-body-secondary">23/11/2023</h6>
                                <div class="card-text mt-2 mb-2">
                                    <div className="p-1 rounded-pill text-center" style={{border:'1px solid #b7eb8f',backgroundColor:'#f6ffed',color:'#389e0d'}}>Accepted</div>
                                </div>
                                <button class="btn rounded-pill btn-danger pt-1 pb-1">Delete</button>
                            </div>
                        </div>

                        <div class="card p-0 m-0 mb-3" style={{width:'100%'}}>
                            <div class="card-body m-0">
                                <h5 class="card-title">Waste</h5>
                                <h6 class="card-subtitle mb-2 text-body-secondary">23/11/2023</h6>
                                <div class="card-text mt-2 mb-2">
                                    <div className="p-1 rounded-pill text-center" style={{border:'1px solid #ffa39e',backgroundColor:'#fff1f0',color:'#cf1322'}}>Expired</div>
                                </div>
                                <button class="btn rounded-pill btn-danger pt-1 pb-1">Delete</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg col-xl d-flex flex-column p-3 border rounded-3">
                        <p className="fs-5" style={{fontWeight:'500'}}>Attention</p>
                        <div className="">
                            Once the request is accepted use can't delete it
                        </div>
                        
                    </div>
                </div>
            </div>
            

        </>
    )
}

export default Requests