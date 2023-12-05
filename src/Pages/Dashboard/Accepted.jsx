import React, { useContext, useEffect, useState } from 'react'
import AllFoodRequests from '../../Components/AllFoodRequests'
import AllWasteRequests from '../../Components/AllWasteRequests'
import { useMediaQuery } from 'react-responsive'
import { getRequestsPincode, updateDeliveryStatusAPI } from '../../Services/allAPI'
import { userApiHandleContext } from '../../Context/ContextShare'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import AcceptedView from '../../Components/AcceptedView'

function Accepted() {
    const {update, setUpdate} = useContext(userApiHandleContext)
    const [accessAllRequests, setAccessAllRequests] = useState(null)
    const isTabletOrMobile = useMediaQuery({ minWidth: 1224 })
    const {acceptedRequestsByUser, setAcceptedRequestsByUser} = useContext(userApiHandleContext)

    // All requests under user pincode
    const {getAllRequestsByPincode, setGetAllRequestsByPincode} = useContext(userApiHandleContext)
    const [allRequests, setAllRequests] = useState([])
    useEffect(() => {
        setAllRequests(getAllRequestsByPincode)
    }, [])

    // Request under custom pincode (Search)
    const existingUser = JSON.parse(sessionStorage.getItem('existingUser'))
    const userId = existingUser._id
    const pincode = existingUser?.pincode
    const token = sessionStorage.getItem("token")
    const [customPincode, setCustomPincode] = useState("")

    const handleCustomSearch = async() => {
        const reqBody = {
            "pincode":customPincode ? customPincode : pincode
        }
        const reqHeader = {
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
        const result = await getRequestsPincode(reqBody, reqHeader)
        setAllRequests(result.data);
    }
    useEffect(() => {
        handleCustomSearch()
    }, [update])

    // Update status
    const updateFoodStatus = async(reqId) => {
        const reqHeader = {
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
        const reqBody = {
            "status": "Delivered",
            "type": "food"
        }

        const result = await updateDeliveryStatusAPI(reqId, reqBody, reqHeader)
        if (result.status === 200) {
            toast.success("Delivery status update")
            setUpdate(result)
        } else {
            toast.error("An error occurred")
        }
    }

    const updateWasteStatus = async(reqId) => {
        const reqHeader = {
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
        const reqBody = {
            "status": "Delivered",
            "type": "waste"
        }

        const result = await updateDeliveryStatusAPI(reqId, reqBody, reqHeader)
        if (result.status === 200) {
            toast.success("Delivery status update")
            setUpdate(result)
        } else {
            toast.error("An error occurred")
        }
    }

    return (
        <>
            <div className="container-fluid rounded-3 p-3" style={{backgroundColor:'#e8f3ee'}}>
                <p className="fs-5 m-0" style={{fontWeight:'500'}}>{accessAllRequests === null ? "Accepted" : "All requests"}</p>
            </div>
            <div className='d-flex justify-content-center p-0 w-100 mb-2'>
                    <div className="container-fluid row p-0 gap-3 mt-3 w-100">
                        {
                            !isTabletOrMobile ? 
                            <div className="col border rounded-3 p-0">
                                <div className="profile-head fs-5 p-2 rounded-top-3" style={{backgroundColor:'#e8f3ee', fontWeight:'500'}}>Explore All Requests</div>
                                <div className="row gap-2 m-0 p-0 mt-3 mb-3">
                                    <div className='col d-flex flex-column m-0 '>
                                        <button className='btn btn-success goto-dashboard m-2' onClick={() => setAccessAllRequests('foodRequests')} style={{minWidth:'13rem'}}>All Food Request</button>
                                        <button className='btn btn-success goto-dashboard m-2' onClick={() => setAccessAllRequests('wasteRequests')} style={{minWidth:'13rem'}}>All Waste Request</button>
                                        {
                                            (accessAllRequests === 'wasteRequests' || accessAllRequests === 'foodRequests') &&
                                            <button className='btn btn-success goto-dashboard m-2' onClick={() => setAccessAllRequests(null)} style={{minWidth:'13rem'}}>Requests accepted by you</button>
                                        }
                                    </div>
                                </div>
                            </div> : null
                        }
                        {
                            accessAllRequests === null &&
                            <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 p-0">
                                <div className="row gap-3 m-0">
                                    <div className="col-12 border rounded-3 p-0">
                                        <div className="profile-head fs-5 p-2 rounded-top-3" style={{backgroundColor:'#e8f3ee', fontWeight:'500'}}>Food Requests Accepted</div>
                                        <div className="row m-0 p-0 mt-2 table-responsive">
                                            {
                                                acceptedRequestsByUser.allFoodAccepts?.length > 0 ?
                                                <>
                                                    <table class="table mb-0" style={{fontSize:''}}>
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Request</th>
                                                                <th scope="col">Accepted on</th>
                                                                <th scope="col">Status</th>
                                                                <th scope="col">Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                acceptedRequestsByUser.allFoodAccepts?.map(accepted => (
                                                                    <tr>
                                                                        <td>{accepted.preference}</td>
                                                                        <td>{accepted.accepted.acceptedDate} <br /> {accepted.accepted.acceptedTime}</td>
                                                                        <td>{accepted.status}</td>
                                                                        <td>
                                                                            <div className='d-flex'>
                                                                                <AcceptedView accepted = {accepted}/>
                                                                                <button className='btn btn-success goto-dashboard btn-sm' disabled={accepted.status === "Delivered" ? true : false} onClick={() => {updateFoodStatus(accepted._id)}}>Mark as delivered</button>
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
                                        <div className="profile-head fs-5 p-2 rounded-top-3" style={{backgroundColor:'#e8f3ee', fontWeight:'500'}}>Waste Requests Accepted</div>
                                        <div className="row m-0 p-0 mt-2 table-responsive">
                                            {
                                                acceptedRequestsByUser.allWasteAccepts?.length > 0 ?
                                                <>
                                                    <table class="table mb-0" style={{fontSize:''}}>
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Request</th>
                                                                <th scope="col">Accepted on</th>
                                                                <th scope="col">Status</th>
                                                                <th scope="col">Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                acceptedRequestsByUser.allWasteAccepts?.map(accepted => (
                                                                    <tr>
                                                                        <td>{accepted.type}</td>
                                                                        <td>{accepted.accepted.acceptedDate} <br /> {accepted.accepted.acceptedTime}</td>
                                                                        <td>{accepted.status}</td>
                                                                        <td>
                                                                            <div className='d-flex'>
                                                                                <AcceptedView accepted = {accepted}/>
                                                                                <button className='btn btn-success goto-dashboard btn-sm' disabled={accepted.status === "Delivered" ? true : false} onClick={() => {updateWasteStatus(accepted._id)}}>Mark as delivered</button>
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
                        }

                        {
                            accessAllRequests === 'foodRequests' &&
                            <>
                                <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 p-0 d-flex flex-wrap">
                                    <div className="row m-0 p-0 w-100">
                                        <div className="mt-1 mb-1 d-flex align-items-center justify-content-between" style={{color:'#7c7c7c',fontSize:'small'}}>
                                            By default all results are based pincode {pincode}
                                            <div className='d-flex'>
                                                <input type="text" name="pincode" id="pincode" className='form-control' placeholder='Pincode' onChange={(e) => setCustomPincode(e.target.value)} />
                                                <button className='ms-2 btn btn-success goto-dashboard' onClick={handleCustomSearch}><i class="fa-solid fa-magnifying-glass"></i></button>
                                            </div>
                                        </div>
                                        {
                                            allRequests.allPincodeFoodRequests?.filter(request => request.status === "Created" && request.userId !== userId).length > 0 ?
                                            allRequests.allPincodeFoodRequests?.filter(request => request.status === "Created" && request.userId !== userId).map((request) => (
                                                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 d-flex justify-content-center align-items-center">
                                                    <AllFoodRequests request = {request}/>
                                                </div>
                                            )) :
                                            <div className="row d-flex align-items-center justify-content-center" style={{height:'100%', color:'#7c7c7c'}}>
                                                No results found
                                            </div>
                                        }
                                    </div>
                                </div>
                            </>
                            
                        }

                        {
                            accessAllRequests === 'wasteRequests' &&
                            <>
                                <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 p-0 d-flex flex-wrap">
                                    <div className="row m-0 p-0 w-100">
                                        <div className="mt-1 mb-1 d-flex align-items-center justify-content-between" style={{color:'#7c7c7c',fontSize:'small'}}>
                                            By default all results are based pincode {pincode}
                                            <div className='d-flex'>
                                                <input type="text" name="pincode" id="pincode" className='form-control' placeholder='Pincode' onChange={(e) => setCustomPincode(e.target.value)} />
                                                <button className='ms-2 btn btn-success goto-dashboard' onClick={handleCustomSearch}><i class="fa-solid fa-magnifying-glass"></i></button>
                                            </div>
                                        </div>
                                        {
                                            allRequests.allPincodeWasteRequests?.filter(request => request.status === "Created" && request.userId !== userId).length > 0 ?
                                            allRequests.allPincodeWasteRequests?.filter(request => request.status === "Created" && request.userId !== userId).map((request) => (
                                                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 d-flex justify-content-center align-items-center">
                                                    <AllWasteRequests request = {request}/>
                                                </div>
                                            )) :
                                            <div className="row d-flex align-items-center justify-content-center" style={{height:'100%', color:'#7c7c7c'}}>
                                                No results found
                                            </div>
                                        }
                                    </div>
                                </div>
                            </>
                        }
                    {
                            isTabletOrMobile ? 
                            <div className="col border rounded-3 p-0">
                                <div className="profile-head fs-5 p-2 rounded-top-3" style={{backgroundColor:'#e8f3ee', fontWeight:'500'}}>Explore All Requests</div>
                                <div className="row gap-2 m-0 p-0 mt-3 mb-3">
                                    <div className='col d-flex flex-column m-0 '>
                                        <button className='btn btn-success goto-dashboard m-2' onClick={() => {setAccessAllRequests('foodRequests'); setAllRequests(getAllRequestsByPincode); setCustomPincode("")}} style={{minWidth:'13rem'}}>All Food Request</button>
                                        <button className='btn btn-success goto-dashboard m-2' onClick={() => {setAccessAllRequests('wasteRequests'); setAllRequests(getAllRequestsByPincode); setCustomPincode("")}} style={{minWidth:'13rem'}}>All Waste Request</button>
                                        {
                                            (accessAllRequests === 'wasteRequests' || accessAllRequests === 'foodRequests') &&
                                            <button className='btn btn-success goto-dashboard m-2' onClick={() => setAccessAllRequests(null)} style={{minWidth:'13rem'}}>Requests accepted by you</button>
                                        }
                                    </div>
                                </div>
                            </div> : null
                        }
                </div>
            </div>
        </>
    )
}

export default Accepted

