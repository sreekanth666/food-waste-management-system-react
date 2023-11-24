import React from 'react'

function Accepted() {
    return (
        <>
            <p className="fs-1 mt-4 mb-4" style={{fontWeight:'500'}}>Accepted</p>
            <div className='container-fluid d-flex flex-column align-items-center'>
                <div className="mt-2 row gap-3 p-0" style={{minHeight:'150px',width:'100%'}}>
                    <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 d-flex flex-column p-3 pb-1 border rounded-3">
                        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col"></th>
                                <th scope="col">Accepted</th>
                                <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Food</td>
                                    <td>23/11/2023</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Waste</td>
                                    <td>11/09/2023</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                    <td>Waste</td>
                                    <td>05/08/2023</td>
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

export default Accepted