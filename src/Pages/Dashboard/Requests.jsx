import React from 'react'

function Requests() {
    return (
        <>
            <div className='container-fluid d-flex flex-column align-items-center'>
                <div className="mt-2 row gap-3 p-0" style={{minHeight:'150px',width:'100%'}}>
                    <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 d-flex flex-column p-3 pb-1 border rounded-3">
                        <p className="fs-5" style={{fontWeight:'500'}}>Requests</p>

                        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col"></th>
                                <th scope="col">Request</th>
                                <th scope="col">Date</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Food</td>
                                    <td>23/11/2023</td>
                                    <td>
                                        <div className="p-1 rounded-pill text-center" style={{border:'1px solid #d3adf7',backgroundColor:'#f9f0ff',color:'#531dab'}}>Requested</div>
                                    </td>
                                    <td><button class="btn rounded-pill btn-danger pt-1 pb-1">Delete</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Waste Pickup</td>
                                    <td>11/09/2023</td>
                                    <td>
                                        <div className="p-1 rounded-pill text-center" style={{border:'1px solid #b7eb8f',backgroundColor:'#f6ffed',color:'#389e0d'}}>Accepted</div>
                                    </td>
                                    <td><button class="btn rounded-pill btn-danger pt-1 pb-1 disabled">Delete</button></td>  
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                    <td>Waste Pickup</td>
                                    <td>05/08/2023</td>
                                    <td>
                                        <div className="p-1 rounded-pill text-center" style={{border:'1px solid #ffa39e',backgroundColor:'#fff1f0',color:'#cf1322'}}>Expired</div>
                                    </td>
                                    <td><button class="btn rounded-pill btn-danger pt-1 pb-1 disabled">Delete</button></td>
                                </tr>
                            </tbody>
                        </table>
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