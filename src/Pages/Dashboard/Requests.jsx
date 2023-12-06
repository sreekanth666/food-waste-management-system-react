import React, { useContext, useEffect, useState } from 'react'
import CreateRequest from '../../Components/CreateRequest'
import { userApiHandleContext } from '../../Context/ContextShare';
import FoodReqEdit from '../../Components/FoodReqEdit';
import { deleteFoodRequestAPI, deleteWasteRequestAPI } from '../../Services/allAPI';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import WasteReqEdit from '../../Components/WasteReqEdit';
import AcceptedUserDetails from '../../Components/AcceptedUserDetails';

function Requests() {
    const {update, setUpdate} = useContext(userApiHandleContext)
    const {requestsMadeByUser, setRequestMadeByUser} = useContext(userApiHandleContext)
    const [userRequests, setUserRequests] = useState([])
    useEffect(() => {
        setUserRequests(requestsMadeByUser)
    }, [requestsMadeByUser])

    // Delete food request
    const deleteFoodRequest = async(reqId) => {
        const token = sessionStorage.getItem("token")
        const reqHeader = {
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
        const result = await deleteFoodRequestAPI(reqId, reqHeader)
        if (result.status === 200) {
            toast.success("Request deleted")
            setUpdate(result)
        } else {
            toast.error("An error occurred")
        }
    }

    // Delete waste request
    const deleteWasteRequest = async(reqId) => {
        const token = sessionStorage.getItem("token")
        const reqHeader = {
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
        const result = await deleteWasteRequestAPI(reqId, reqHeader)
        if (result.status === 200) {
            toast.success("Request deleted")
            setUpdate(result)
        } else {
            toast.error("An error occurred")
        }
    }

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
                                                <th scope="col" className='text-center'>Status</th>
                                                <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    userRequests.allFoodRequests?.map((request, index) => (
                                                        <tr>
                                                            <td>{request.preference}<br /><span style={{color:'#7c7c7c',fontSize:'small'}}>{request._id}</span></td>
                                                            <td>{request.postedDate} <br /> {request.postedTime}</td>
                                                            <td className='text-center'>{request.status} {request.status === "Accepted" ? <AcceptedUserDetails accepted = {request}/> : null}</td>
                                                            <td>
                                                                <div className='d-flex'>
                                                                    <FoodReqEdit request = {request} />
                                                                    <button className='btn btn-success goto-dashboard btn-sm' disabled={request.status !== "Created" ? true : false} onClick={() => deleteFoodRequest(request._id)}>Delete</button>
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
                                                <th scope="col" className='text-center'>Status</th>
                                                <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    userRequests.allWasteRequest?.map((request, index) => (
                                                        <tr>
                                                            <td>{request.type}</td>
                                                            <td>{request.postedDate} <br /> {request.postedTime}</td>
                                                            <td className='text-center'>{request.status} {request.status === "Accepted" ? <AcceptedUserDetails accepted = {request}/> : null}</td>
                                                            <td>
                                                                <div className='d-flex'>
                                                                    <WasteReqEdit request={request}/>
                                                                    <button className='btn btn-success goto-dashboard btn-sm' disabled={request.status !== "Created" ? true : false} onClick={() => deleteWasteRequest(request._id)}>Delete</button>
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

