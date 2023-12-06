import React, { useContext, useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
import { updateFoodRequestAPI } from '../Services/allAPI';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { userApiHandleContext } from '../Context/ContextShare';

function FoodReqEdit({request}) {
    const {update, setUpdate} = useContext(userApiHandleContext)
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => setShow(true);
    const {packs, description, delivery, preference} = request

    const [editData, setEditData] = useState({
        packs: packs,
        description: description,
        delivery: delivery,
        preference: preference
    })

    // Update API
    const handleUpdate = async() => {
        if (editData.packs === "" || editData.description === "" || editData.delivery === "" || editData.preference === "") {
            toast.warning("Please fill all details")
        } else {
            const token = sessionStorage.getItem("token")
            const reqHeader = {
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
            const reqId = request._id
            const result = await updateFoodRequestAPI(reqId, editData, reqHeader)
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
            <button className='btn btn-success goto-dashboard btn-sm me-1' disabled={request.status !== "Created" ? true : false} onClick={handleShow}>Edit</button>

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
                                    <input type="text" className='form-control' value={editData.packs} onChange={(e) => setEditData({...editData, packs: e.target.value})} />
                                </td>
                            </tr>
                            <tr>
                                <th className='border-0'>Preference</th>
                                <td className='border-0'>
                                    <Form.Select aria-label="Select food type" name='preference' onChange={(e) => setEditData({...editData, preference: e.target.value})}>
                                        <option value="Vegetarian" selected={editData.preference === "Vegetarian" ? true : false}>Vegetarian</option>
                                        <option value="Non Vegetarian" selected={editData.preference === "Non Vegetarian" ? true : false}>Non Vegetarian</option>
                                        <option value="Any" selected={editData.preference === "Any" ? true : false}>Any</option>
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
                                        <option value="deliver" selected={editData.delivery === "deliver" ? true : false}>Deliver to my address</option>
                                        <option value="pickup" selected={editData.delivery === "pickup" ? true : false}>I will pickup</option>
                                    </Form.Select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary border-0" onClick={handleClose}>Cancel</Button>
                <Button variant="success" className='sorted-btn' onClick={handleUpdate}>Update</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default FoodReqEdit