import React, { useContext, useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { editUserDetailsAPI } from '../Services/allAPI';
import { userApiHandleContext } from '../Context/ContextShare';

function UpdateProfile() {
    const {sessionUpdate, setSessionUpdate} = useContext(userApiHandleContext)
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        setUpdateUserDetails({...existingUserDetails, 
            username: existingUserDetails.username,
            phone: existingUserDetails.phone,
            email: existingUserDetails.email,
            city: existingUserDetails.city,
            district: existingUserDetails.district,
            state: existingUserDetails.state,
            pincode: existingUserDetails.pincode,
            attribute: existingUserDetails.attribute
    })
    }
    const handleShow = () => setShow(true);

    const existingUserDetails = JSON.parse(sessionStorage.getItem("existingUser"))
    const districtsInKerala = [
        'Thiruvananthapuram',
        'Kollam',
        'Pathanamthitta',
        'Alappuzha',
        'Kottayam',
        'Idukki',
        'Ernakulam',
        'Thrissur',
        'Palakkad',
        'Malappuram',
        'Kozhikode',
        'Wayanad',
        'Kannur',
        'Kasaragod',
    ];
    const [updatedUserDetails, setUpdateUserDetails] = useState({
        username: existingUserDetails.username,
        phone: existingUserDetails.phone,
        email: existingUserDetails.email,
        city: existingUserDetails.city,
        district: existingUserDetails.district,
        state: existingUserDetails.state,
        pincode: existingUserDetails.pincode,
        attribute: existingUserDetails.attribute,
        id: existingUserDetails._id
    })

    // Handle update
    const handleUpdate = async() => {
        const token = sessionStorage.getItem("token")
        const reqHeader = {
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
        const result = await editUserDetailsAPI(updatedUserDetails, reqHeader)
        if (result.status === 200) {
            toast.success("Details updated")
            sessionStorage.setItem("existingUser", JSON.stringify(result.data))
            setSessionUpdate(result)
            handleClose()
        }else {
            toast.error("An error occurred")
            console.log(result);
        }
    }

    return (
        <>
            <button className='btn m-2 btn-success goto-dashboard ps-3 pe-3 btn-sm' onClick={handleShow}>Update profile</button>

            {/* MODAL */}
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="lg"
                scrollable
            >
                <Modal.Header closeButton>
                <Modal.Title>Update profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table className='confirmation-table table border-0'>
                    <tbody>
                            <tr>
                                <th className='border-0'>Name</th>
                                <td className='border-0'>
                                    <input type="text" className='form-control' value={updatedUserDetails.username} onChange={(e) => setUpdateUserDetails({...updatedUserDetails, username: e.target.value})} />
                                </td>
                            </tr>
                            <tr>
                                <th className='border-0'>Phone</th>
                                <td className='border-0'>
                                    <input type="text" className='form-control' value={updatedUserDetails.phone} onChange={(e) => setUpdateUserDetails({...updatedUserDetails, phone: e.target.value})} />
                                </td>
                            </tr>
                            <tr>
                                <th className='border-0'>Email</th>
                                <td className='border-0'>
                                    <input type="text" className='form-control' value={updatedUserDetails.email} onChange={(e) => setUpdateUserDetails({...updatedUserDetails, email: e.target.value})} />
                                </td>
                            </tr>
                            <tr>
                                <th className='border-0'>City</th>
                                <td className='border-0'>
                                    <input type="text" className='form-control' value={updatedUserDetails.city} onChange={(e) => setUpdateUserDetails({...updatedUserDetails, city: e.target.value})} />
                                </td>
                            </tr>
                            <tr>
                                <th className='border-0'>District</th>
                                <td className='border-0'>
                                    <select class="form-select border" aria-label="Default select example" style={{height:'3rem'}} onChange={(e) => setUpdateUserDetails({...updatedUserDetails, district: e.target.value})} >
                                        <option value="">Select district</option>
                                        {
                                            districtsInKerala.map((district) => (
                                                <option value={district} selected={updatedUserDetails.district === district ? true : false}>{district}</option>
                                            ))
                                        }
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th className='border-0'>State</th>
                                <td className='border-0'>
                                    <input type="text" className='form-control' placeholder={existingUserDetails.state} disabled />
                                </td>
                            </tr>
                            <tr>
                                <th className='border-0'>Pincode</th>
                                <td className='border-0'>
                                    <input type="text" className='form-control' value={updatedUserDetails.pincode} onChange={(e) => setUpdateUserDetails({...updatedUserDetails, pincode: e.target.value})} />
                                </td>
                            </tr>
                            <tr>
                                <th className='border-0'>Which defines you better</th>
                                <td className='border-0'>
                                    <select class="form-select border" aria-label="Default select example" style={{height:'3rem'}} onChange={(e) => setUpdateUserDetails({...updatedUserDetails, attribute: e.target.value})} >
                                        <option value={'Individual'} selected={updatedUserDetails.attribute === "Individual" ? true : false}>Individual</option>
                                        <option value={'Organization'} selected={updatedUserDetails.attribute === "Organization" ? true : false}>Organization</option>
                                    </select>
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

export default UpdateProfile