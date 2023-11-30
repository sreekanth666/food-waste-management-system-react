import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import { TelegramIcon, TelegramShareButton, TwitterShareButton, WhatsappIcon, WhatsappShareButton, XIcon } from 'react-share'

function AllFoodRequests({request}) {
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

    console.log(shareData);
    return (
        <>
            {
                request &&
                <div>
                    <div className="card rounded-3 border-0 m-2" style={{width: "13rem"}}>
                        <div className="card-body ps-0">
                            <h5 className="card-title">
                                {request.address}
                            </h5>
                            <p className="card-text" style={{fontSize:'small', color:'#7c7c7c'}}>Requested by {request.username}<br />{request.postedDate}<br />{request.postedTime}</p>
                            </div>
                            <ul class="list-group list-group" style={{fontSize:'small'}}>
                                <li className="list-group-item">{request.packs} Pack(s)</li>
                                <li className="list-group-item">{request.preference}</li>
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
                                <td className='border-0'>Ravi</td>
                            </tr>
                            <tr>
                                <th className='border-0'>Address</th>
                                <td className='border-0'>
                                    123, ABC Street <br />
                                    Trivandrum, Kerala, India <br />
                                    695001
                                </td>
                            </tr>
                            <tr>
                                <th className='border-0'>Requested Items</th>
                                <td className='border-0'>
                                    Food (Pack of 2)
                                </td>
                            </tr>
                            <tr>
                                <th className='border-0'>Additional Details</th>
                                <td className='border-0'>Vegetarian</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="mb-3 form-check" style={{fontSize:'small',color:'#999999'}}>
                        <label class="form-check-label" for="exampleCheck1">Confirming means agreeing to voluntarily provide the requested food items, contributing to a positive impact in your community by delivering to the person in need.</label>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary border-0" onClick={handleClose}>Cancel</Button>
                <Button variant="success" className='sorted-btn'>Confirm</Button>
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
                            title={`Hey there! Could you help?\n\nName: ${shareData?.username}\n*Needs ${shareData?.packs} pack(s) of ${shareData?.preference} food*\nAddress: ${shareData?.address}\nPhone: ${shareData?.phone}\nPosted: ${shareData?.postedDate} at ${shareData?.postedTime}\n\nI'm looking for support with this food request. Any assistance would be greatly appreciated!\n\n*Join Smile initiative: Bringing hearts together, sharing food!*`}
                            className='m-1'
                        >
                            <WhatsappIcon size={32} round={true}/>
                        </WhatsappShareButton>
                        <TelegramShareButton
                            url={"http://localhost:3000/"}
                            title={`Hey there! Could you help?\n\nName: ${shareData?.username}\nNeeds ${shareData?.packs} pack(s) of ${shareData?.preference} food\nAddress: ${shareData?.address}\nPhone: ${shareData?.phone}\nPosted: ${shareData?.postedDate} at ${shareData?.postedTime}\n\nI'm looking for support with this food request. Any assistance would be greatly appreciated!\n\nJoin Smile initiative: Bringing hearts together, sharing food!`}
                            className='m-1'
                        >
                            <TelegramIcon size={32} round />
                        </TelegramShareButton>
                        <TwitterShareButton
                            url={"http://localhost:3000/"}
                            title={`Hey there! Could you help?\n\nName: ${shareData?.username}\nNeeds ${shareData?.packs} pack(s) of ${shareData?.preference} food\nAddress: ${shareData?.address}\nPhone: ${shareData?.phone}\nPosted: ${shareData?.postedDate} at ${shareData?.postedTime}\n\nI'm looking for support with this food request. Any assistance would be greatly appreciated!\n\nJoin Smile initiative: Bringing hearts together, sharing food!`}
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

export default AllFoodRequests