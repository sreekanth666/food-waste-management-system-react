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
    console.log(userRequests.allFoodRequests);
    return (
        <>
            <div className='container-fluid d-flex flex-column align-items-center'>

                {/* Food requests */}
                <div className="mt-2 row gap-3 p-0" style={{minHeight:'150px',width:'100%'}}>
                    <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 d-flex flex-column p-3 pb-1 border rounded-3">
                        <p className="fs-5" style={{fontWeight:'500'}}>Food Requests</p>
                        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col"></th>
                                <th scope="col">Details</th>
                                <th scope="col" className='text-center'>Date and Time</th>
                                <th scope="col" className='text-center'>Status</th>
                                <th scope="col" className='text-center'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userRequests.allFoodRequests?.length > 0 ?
                                        userRequests.allFoodRequests?.map((request, index) => (
                                            <tr>
                                                <th scope="row">{index+1}</th>
                                                <td>{request.preference}</td>
                                                <td className='text-center'>
                                                    {request.postedDate}<br />
                                                    {request.postedTime}
                                                </td>
                                                <td className='text-center'>
                                                    <div className="p-1 rounded-pill text-center" style={{border:'1px solid #d3adf7',backgroundColor:'#f9f0ff',color:'#531dab'}}>{request.status}</div>
                                                </td>
                                                <td className='text-center'><button class="btn rounded-pill btn-danger pt-1 pb-1">Delete</button></td>
                                            </tr>
                                        ))
                                    :
                                    "No requests found"
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg col-xl d-flex flex-column p-3 border rounded-3">
                        <CreateRequest />
                        <p className="fs-5 mt-4 mb-0" style={{fontWeight:'500'}}>Share Kindness, Share Food</p>
                        <div className="">
                            <span className='fw-semibold'>Kindness goes a long way</span><br />
                            be thoughtful to those who offer food and those you share it with!
                        </div>
                        
                    </div>
                </div>

                {/* Waste requests */}
                <div className="mt-2 row gap-3 p-0" style={{minHeight:'150px',width:'100%'}}>
                    <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 d-flex flex-column p-3 pb-1 border rounded-3">
                        <p className="fs-5" style={{fontWeight:'500'}}>Waste Requests</p>
                                {
                                    userRequests.allWasteRequest?.length > 0 ?
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                <th scope="col"></th>
                                                <th scope="col">Details</th>
                                                <th scope="col" className='text-center'>Date</th>
                                                <th scope="col" className='text-center'>Status</th>
                                                <th scope="col" className='text-center'>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {userRequests.allWasteRequest?.map((request, index) => (
                                                    <tr>
                                                        <th scope="row">{index+1}</th>
                                                        <td>{request.type}</td>
                                                        <td className='text-center'>
                                                            {request.postedDate}<br />
                                                            {request.postedTime}
                                                        </td>
                                                        <td className='text-center'>
                                                            <div className="p-1 rounded-pill text-center" style={{border:'1px solid #d3adf7',backgroundColor:'#f9f0ff',color:'#531dab'}}>{request.status}</div>
                                                        </td>
                                                        <td className='text-center'><button class="btn rounded-pill btn-danger pt-1 pb-1">Delete</button></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    :
                                    <p className='text-center'>No requests found</p>
                                }
                            
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg col-xl d-flex flex-column p-3 border rounded-3">
                        <p className="fs-5 mb-0" style={{fontWeight:'500'}}>Responsible Disposal: Every Request Counts</p>
                        <div className="">
                            Respect every request, even for waste—it's all about mindful disposal.
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