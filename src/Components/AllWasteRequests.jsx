import React, { useState, useEffect, useContext } from 'react'
import { Modal, Button } from 'react-bootstrap';
import { TelegramIcon, TelegramShareButton, TwitterShareButton, WhatsappIcon, WhatsappShareButton, XIcon } from 'react-share'
import { acceptRequestAPI } from '../Services/allAPI';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import date from 'date-and-time'
import { userApiHandleContext } from '../Context/ContextShare';

function AllWasteRequests({request}) {
    const {setUpdate} = useContext(userApiHandleContext)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [shareShow, setShareShow] = useState(false);
    const handleShareClose = () => setShareShow(false);
    const [shareData, setShareData] = useState()
    const handleShareShow = (details) => {
        setShareData(details);
        setShareShow(true)
    }

    // Time and date
    const [today, setToday] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setToday(new Date());
        }, 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const userDetails = JSON.parse(sessionStorage.getItem("existingUser"))

    const [loading, setLoading] = useState(false)

    const token = sessionStorage.getItem("token")
    const reqId = request._id
    const email = request.email
    const username = request.username
    const address = `${userDetails.address}, ${userDetails.city}, ${userDetails.district}, ${userDetails.state}, ${userDetails.pincode}`
    const reqHeader = {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
    }

    const handleAccept = async() => {
        setLoading(true)
        const accepted = {
            acceptedUserId: userDetails?._id,
            acceptedPhone: userDetails?.phone,
            acceptedName: userDetails?.username,
            acceptedEmail: userDetails?.email,
            acceptedAddress: address,
            acceptedTime: date.format(today, 'hh:mm A'),
            acceptedDate: date.format(today, 'DD/MM/YYYY'),
            reqType: "waste",
            status: "Accepted",
            email,
            username
        }
        const result = await acceptRequestAPI(reqId, accepted, reqHeader)
        if (result.status === 200) {
            toast.success("Waste request accepted")
            setUpdate(result)
            handleClose()
            setLoading(false)
        } else {
            toast.error("An error occurred")
        }
    }

    return (
        <>
            {
                request.status === "Created" && 
                <div>
                    <div className="card rounded-3 border-0 m-2" style={{width: "13rem"}}>
                        <div className="card-body ps-0 ">
                            <h5 className="card-title">
                                {request.address}
                            </h5>
                            <p className="card-text m-0" style={{fontSize:'small', color:'#7c7c7c'}}>Requested by {request.username}<br />{request.postedDate}<br />{request.postedTime}</p>
                        </div>
                        <ul class="list-group list-group m-0" style={{fontSize:'small'}}>
                            <li className="list-group-item">{request.quantity}</li>
                            <li className="list-group-item">{request.type}</li>
                        </ul>
                        <div className="ps-0 card-body text-light d-flex justify-content-start align-items-center text-center">
                            <button className='sorted-btn btn btn-success me-2' onClick={handleShow}>Accept</button>
                            <button className='sorted-btn btn btn-success' onClick={() => handleShareShow(request)}><i class="fa-solid fa-share"></i></button>
                        </div>
                    </div>
                </div>
            }

            {/* Modal */}
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>Support Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table className='confirmation-table table table-striped border-0'>
                    <tbody>
                            <tr>
                                <th className='border-0'>Requested by</th>
                                <td className='border-0'>{request.username}</td>
                            </tr>
                            <tr>
                                <th className='border-0'>Address</th>
                                <td className='border-0'>{request.address}</td>
                            </tr>
                            <tr>
                                <th className='border-0'>Requested Items</th>
                                <td className='border-0'>
                                    {request.packs} Pack(s)
                                </td>
                            </tr>
                            <tr>
                                <th className='border-0'>Preference</th>
                                <td className='border-0'>{request.type}</td>
                            </tr>
                            <tr>
                                <th className='border-0'>Additional information</th>
                                <td className='border-0'>{request.description}</td>
                            </tr>
                            <tr>
                                <th className='border-0'>Delivery information</th>
                                <td className='border-0 text-danger'>{request.delivery === 'deliver' ? "Waste will delivered to your address" : "You need to pickup the waste from the above address"}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="mb-3 form-check" style={{fontSize:'small',color:'#999999'}}>
                        <label class="form-check-label" for="exampleCheck1">Confirming means agreeing to voluntarily provide the requested food items, contributing to a positive impact in your community by delivering to the person in need.</label>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary border-0" onClick={handleClose}>Cancel</Button>
                <Button variant="success" className='sorted-btn' onClick={handleAccept} disabled={loading === true ? true : false}>{loading === true ? <i class="fa-solid fa-spinner fa-spin-pulse"></i> : null} Confirm</Button>
                </Modal.Footer>
            </Modal>

            {/* Share modal */}
            <Modal
                show={shareShow}
                onHide={handleShareClose}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body className='fs-4 text-center'>
                    Share to
                    <br />
                    <div className='mt-2'>
                        <WhatsappShareButton
                            url={"http://localhost:3000/"}
                            title={`Hello! Can you lend a hand?\n\nName: ${shareData?.username}\n*Seeking help with ${shareData?.type} disposal, ${shareData?.quantity}*\nAddress: ${shareData?.address}\nPhone: ${shareData?.phone}\nPosted: ${shareData?.postedDate} at ${shareData?.postedTime}\n\nI'm seeking help with this waste disposal request. Your support means a lot!\n\n*Join Smile initiative: Bringing hearts together, sharing food!*`}
                            className='m-1'
                        >
                            <WhatsappIcon size={32} round={true}/>
                        </WhatsappShareButton>
                        <TelegramShareButton
                            url={"http://localhost:3000/"}
                            title={`Hello! Can you lend a hand?\n\nName: ${shareData?.username}\n*Seeking help with ${shareData?.type} disposal, ${shareData?.quantity}*\nAddress: ${shareData?.address}\nPhone: ${shareData?.phone}\nPosted: ${shareData?.postedDate} at ${shareData?.postedTime}\n\nI'm seeking help with this waste disposal request. Your support means a lot!\n\n*Join Smile initiative: Bringing hearts together, sharing food!*`}
                            className='m-1'
                        >
                            <TelegramIcon size={32} round />
                        </TelegramShareButton>
                        <TwitterShareButton
                            url={"http://localhost:3000/"}
                            title={`Hello! Can you lend a hand?\n\nName: ${shareData?.username}\n*Seeking help with ${shareData?.type} disposal, ${shareData?.quantity}*\nAddress: ${shareData?.address}\nPhone: ${shareData?.phone}\nPosted: ${shareData?.postedDate} at ${shareData?.postedTime}\n\nI'm seeking help with this waste disposal request. Your support means a lot!\n\n*Join Smile initiative: Bringing hearts together, sharing food!*`}
                            className='m-1'
                        >
                            <XIcon size={32} round />
                        </TwitterShareButton>
                    </div>
                    <br />
                    <div className="mt-1 mb-1" style={{color:'#7c7c7c',fontSize:'small'}}>Spread the joy! Share this request and help make a difference with Smile</div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default AllWasteRequests