import React, { useEffect, useState } from 'react'
import CreateRequest from '../../Components/CreateRequest'
import { getAllUserRequests } from '../../Services/allAPI'

function Requests() {
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

    // TEST
    console.log(userRequests);
    return (
        <>
            <div className="container-fluid rounded-3 p-3" style={{backgroundColor:'#e8f3ee'}}>
                <p className="fs-5 m-0" style={{fontWeight:'500'}}>Requests</p>
            </div>
            <div className='d-flex justify-content-center p-0 w-100 mb-2'>
                <div className="container-fluid row p-0 gap-3 mt-3 w-100">
                    <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 p-0">
                        <div className="row gap-3 m-0">
                            <div className="col-12 border rounded-3 p-0">
                                <div className="profile-head fs-5 p-2 rounded-top-3" style={{backgroundColor:'#e8f3ee', fontWeight:'500'}}>Food Requests</div>
                                <div className="row m-0 p-0 mt-2 table-responsive">
                                    {
                                        userRequests.allFoodRequests?.length > 0 ?
                                        <>
                                            <table class="table mb-0" style={{fontSize:''}}>
                                            <thead>
                                                <tr>
                                                <th scope="col">Request</th>
                                                <th scope="col">Date & Time</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    userRequests.allFoodRequests?.map((request, index) => (
                                                        <tr>
                                                            <td>{request.preference}</td>
                                                            <td>{request.postedDate} <br /> {request.postedTime}</td>
                                                            <td>{request.status}</td>
                                                            <td>
                                                                <div className='d-flex'>
                                                                    <button className='btn btn-success goto-dashboard btn-sm me-1'>Edit</button>
                                                                    <button className='btn btn-success goto-dashboard btn-sm'>Delete</button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                            </table>
                                            <div className="col-8 mt-1 mb-1" style={{color:'#7c7c7c',fontSize:'small'}}>Only the last 15 requests are displayed here</div>
                                        </>
                                        :
                                        <div className="col-8 mb-1" style={{color:'#7c7c7c'}}>No requests found</div>
                                    }
                                </div>
                            </div>
                            <div className="col-12 border rounded-3 p-0">
                                <div className="profile-head fs-5 p-2 rounded-top-3" style={{backgroundColor:'#e8f3ee', fontWeight:'500'}}>Waste Requests</div>
                                <div className="row m-0 p-0 mt-2 table-responsive">
                                    {
                                        userRequests.allWasteRequest?.length > 0 ?
                                        <>
                                            <table class="table mb-0" style={{fontSize:''}}>
                                            <thead>
                                                <tr>
                                                <th scope="col">Request</th>
                                                <th scope="col">Date & Time</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    userRequests.allWasteRequest?.map((request, index) => (
                                                        <tr>
                                                            <td>{request.type}</td>
                                                            <td>{request.postedDate} <br /> {request.postedTime}</td>
                                                            <td>{request.status}</td>
                                                            <td>
                                                                <div className='d-flex'>
                                                                    <button className='btn btn-success goto-dashboard btn-sm me-1'>Edit</button>
                                                                    <button className='btn btn-success goto-dashboard btn-sm'>Delete</button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                            </table>
                                            <div className="col-8 mt-1 mb-1" style={{color:'#7c7c7c',fontSize:'small'}}>Only the last 15 requests are displayed here</div>
                                        </>
                                        :
                                        <div className="col-8 mb-1" style={{color:'#7c7c7c'}}>No requests found</div>
                                    }
                                </div>                                
                            </div>
                        </div>
                    </div>
                    <div className="col border rounded-3 p-0">
                        <div className="profile-head fs-5 p-2 rounded-top-3" style={{backgroundColor:'#e8f3ee', fontWeight:'500'}}>Create Request</div>
                        <div className="row gap-2 m-0 p-0 mt-3 mb-3">
                            <div className='col d-flex flex-column m-0 '>
                                <CreateRequest/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Requests

{/* <tr>
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
</tr> */}