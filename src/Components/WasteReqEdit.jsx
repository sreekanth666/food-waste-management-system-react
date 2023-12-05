import React, { useContext, useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
import { updateFoodRequestAPI, updateWasteRequestAPI } from '../Services/allAPI';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { userApiHandleContext } from '../Context/ContextShare';

function WasteReqEdit({request}) {
    const {update, setUpdate} = useContext(userApiHandleContext)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {quantity, description, delivery, type} = request

    const [editData, setEditData] = useState({
        quantity: quantity,
        description: description,
        delivery: delivery,
        type: type
    })

    // Update API
    const handleUpdate = async() => {
        if (editData.quantity === "" || editData.description === "" || editData.delivery === "" || editData.type === "") {
            toast.warning("Please fill all details")
        } else {
            const token = sessionStorage.getItem("token")
            const reqHeader = {
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
            const reqId = request._id
            const result = await updateWasteRequestAPI(reqId, editData, reqHeader)
            if (result.status === 200) {
                toast.success("Request edited")
                setUpdate(result)
                handleClose()
            } else {
                toast.error("An error occurred")
            }
        }
    }

    return (
        <>
            <button className='btn btn-success goto-dashboard btn-sm me-1' onClick={handleShow}>Edit</button>

            {/* MODAL */}
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="lg"
            >
                <Modal.Header closeButton>
                <Modal.Title>Edit request</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table className='confirmation-table table table-striped border-0'>
                    <tbody>
                            <tr>
                                <th className='border-0'>Requested created on</th>
                                <td className='border-0'>{request.postedDate}, {request.postedTime}</td>
                            </tr>
                            <tr>
                                <th className='border-0'>Accepted Status</th>
                                <td className='border-0'>{request.status}</td>
                            </tr>
                            <tr>
                                <th className='border-0'>Address</th>
                                <td className='border-0'>{request.address}</td>
                            </tr>
                            <tr>
                                <th className='border-0'>Quantity</th>
                                <td className='border-0'>
                                    <input type="text" className='form-control' value={editData.quantity} onChange={(e) => setEditData({...editData, quantity: e.target.value})} />
                                </td>
                            </tr>
                            <tr>
                                <th className='border-0'>Preference</th>
                                <td className='border-0'>
                                    <Form.Select aria-label="Select food type" name='type' onChange={(e) => setEditData({...editData, type: e.target.value})}>
                                        <option value="Plate Waste" selected={editData.type === "Plate Waste" ? true : false}>Plate Waste</option>
                                        <option value="Expired or Spoiled Food" selected={editData.type === "Expired or Spoiled Food" ? true : false}>Expired or Spoiled Food</option>
                                        <option value="Production and Processing Waste" selected={editData.type === "Production and Processing Waste" ? true : false}>Production and Processing Waste</option>
                                        <option value="Retail Waste" selected={editData.type === "Retail Waste" ? true : false}>Retail Waste</option>
                                        <option value="Home Kitchen Waste" selected={editData.type === "Home Kitchen Waste" ? true : false}>Home Kitchen Waste</option>
                                    </Form.Select>
                                </td>
                            </tr>
                            <tr>
                                <th className='border-0'>Additional information</th>
                                <td className='border-0'>
                                    <Form.Control as="textarea" placeholder="Description" name='description' value={editData.description} onChange={(e) => setEditData({...editData, description: e.target.value})} />
                                </td>
                            </tr>
                            <tr>
                                <th className='border-0'>Delivery information</th>
                                <td className='border-0'>
                                    <Form.Select aria-label="Delivery Preference" name='delivery' onChange={(e) => setEditData({...editData, delivery: e.target.value})}>
                                        <option value="deliver" selected={editData.delivery === "deliver" ? true : false}>I will deliver</option>
                                        <option value="pickup" selected={editData.delivery === "pickup" ? true : false}>Pickup from my address</option>
                                    </Form.Select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary border-0" onClick={handleClose}>Cancel</Button>
                <Button variant="success" className='sorted-btn' onClick={handleUpdate}>Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default WasteReqEdit