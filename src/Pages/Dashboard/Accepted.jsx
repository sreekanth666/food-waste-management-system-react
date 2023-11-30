import React, { useEffect, useState } from 'react'
import AllFoodRequests from '../../Components/AllFoodRequests'
import AllWasteRequests from '../../Components/AllWasteRequests'
import { useMediaQuery } from 'react-responsive'
import { getRequestsPincode } from '../../Services/allAPI'

function Accepted() {
    const [accessAllRequests, setAccessAllRequests] = useState(null)
    const isTabletOrMobile = useMediaQuery({ minWidth: 1224 })

    // All requests under pincode
    const [allRequests, setAllRequests] = useState([])
    const existingUser = JSON.parse(sessionStorage.getItem('existingUser'))
    const pincode = existingUser?.pincode
    const token = sessionStorage.getItem("token")
    const reqBody = {
        "pincode":pincode
    }
    const reqHeader = {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
    }
    const getAllRequestsPincode = async() => {
        const result = await getRequestsPincode(reqBody, reqHeader)
        setAllRequests(result.data);
    }
    
    useEffect(() => {
        getAllRequestsPincode()
    }, [])

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
                                                    <tr>
                                                        <td>Non Vegetarian</td>
                                                        <td>23/10/2002 <br /> 08:40 PM</td>
                                                        <td>Accepted</td>
                                                        <td>
                                                            <div className='d-flex'>
                                                                <button className='btn btn-success goto-dashboard btn-sm me-1'>Edit</button>
                                                                <button className='btn btn-success goto-dashboard btn-sm'>Delete</button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Any</td>
                                                        <td>23/10/2002 <br /> 08:40 PM</td>
                                                        <td>Created</td>
                                                        <td>
                                                            <div className='d-flex'>
                                                                <button className='btn btn-success goto-dashboard btn-sm me-1'>Edit</button>
                                                                <button className='btn btn-success goto-dashboard btn-sm'>Delete</button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Vegetarian</td>
                                                        <td>23/10/2002 <br /> 08:40 PM</td>
                                                        <td>Created</td>
                                                        <td>
                                                            <div className='d-flex'>
                                                                <button className='btn btn-success goto-dashboard btn-sm me-1'>Edit</button>
                                                                <button className='btn btn-success goto-dashboard btn-sm'>Delete</button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div className="col-8 mt-1 mb-1" style={{color:'#7c7c7c',fontSize:'small'}}>Only the last 15 requests are displayed here</div>
                                        </div>
                                    </div>
                                    <div className="col-12 border rounded-3 p-0">
                                        <div className="profile-head fs-5 p-2 rounded-top-3" style={{backgroundColor:'#e8f3ee', fontWeight:'500'}}>Waste Requests Accepted</div>
                                        <div className="row m-0 p-0 mt-3 table-responsive">
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
                                                    <tr>
                                                        <td>Non Vegetarian</td>
                                                        <td>23/10/2002 <br /> 08:40 PM</td>
                                                        <td>Accepted</td>
                                                        <td>
                                                            <div className='d-flex'>
                                                                <button className='btn btn-success goto-dashboard btn-sm me-1'>Edit</button>
                                                                <button className='btn btn-success goto-dashboard btn-sm'>Delete</button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Any</td>
                                                        <td>23/10/2002 <br /> 08:40 PM</td>
                                                        <td>Created</td>
                                                        <td>
                                                            <div className='d-flex'>
                                                                <button className='btn btn-success goto-dashboard btn-sm me-1'>Edit</button>
                                                                <button className='btn btn-success goto-dashboard btn-sm'>Delete</button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Vegetarian</td>
                                                        <td>23/10/2002 <br /> 08:40 PM</td>
                                                        <td>Created</td>
                                                        <td>
                                                            <div className='d-flex'>
                                                                <button className='btn btn-success goto-dashboard btn-sm me-1'>Edit</button>
                                                                <button className='btn btn-success goto-dashboard btn-sm'>Delete</button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div className="col-8 mt-1 mb-1" style={{color:'#7c7c7c',fontSize:'small'}}>Only the last 15 requests are displayed here</div>
                                        </div>                                
                                    </div>
                                </div>
                            </div>
                        }

                        {
                            accessAllRequests === 'foodRequests' &&
                            <>
                                <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 p-0 d-flex flex-wrap">
                                    <div className="row m-0 p-0">
                                        <div className="mt-1 mb-1" style={{color:'#7c7c7c',fontSize:'small'}}>All results are sorted based on your default pincode</div>
                                        {
                                            allRequests.allPincodeFoodRequests?.length > 0 ?
                                            allRequests.allPincodeFoodRequests?.map((request) => (
                                                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 d-flex justify-content-center align-items-center">
                                                    <AllFoodRequests request = {request}/>
                                                </div>
                                            )) :
                                            "No requests"
                                        }
                                    </div>
                                </div>
                            </>
                            
                        }

                        {
                            accessAllRequests === 'wasteRequests' &&
                            <>
                                <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 p-0 d-flex flex-wrap">
                                    <div className="row m-0 p-0">
                                        <div className="mt-1 mb-1" style={{color:'#7c7c7c',fontSize:'small'}}>All results are sorted based on your default pincode</div>
                                        {
                                            allRequests.allPincodeWasteRequests?.length > 0 ?
                                            allRequests.allPincodeWasteRequests?.map((request) => (
                                                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 d-flex justify-content-center align-items-center">
                                                    <AllWasteRequests request = {request}/>
                                                </div>
                                            )) :
                                            "No requests"
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
                </div>
            </div>
        </>
    )
}

export default Accepted

