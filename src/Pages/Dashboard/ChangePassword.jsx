import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { changePasswordAPI } from '../../Services/allAPI';

function ChangePassword() {
    const userDetails = JSON.parse(sessionStorage.getItem("existingUser"))
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        setHidden(false)
    }
    const handleShow = () => setShow(true);
    const [hidden, setHidden] = useState(false)
    const [verificationStatus, setVerificationStatus] = useState(false)
    
    // Verification 1
    const [verificationDetails, setVerificationDetails] = useState({
        phone: "",
        email: "",
    })
    const verifyCredentials = () => {
        if (verificationDetails.phone === userDetails.phone && verificationDetails.email === userDetails.email) {
            setVerificationStatus(true)
            setHidden(true)
        } else {
            toast.error("Verification failed. Please check email and password")
        }
    }

    // Change password
    const [newPassword, setNewPassword] = useState("")
    const handleChange = async() => {
        if (newPassword === "") {
            toast.warning("Please enter new password")
        } else {
            const token = sessionStorage.getItem("token")
            const reqBody = {
                id: userDetails._id,
                password: newPassword
            }
            const reqHeader = {
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
            const result = await changePasswordAPI(reqBody, reqHeader)
            if (result.status === 200) {
                toast.success("Password changed")
            } else {
                toast.error("An error occurred")
                console.log(result);
            }
            handleClose()
        }
    }

    return (
        <>
            <button className='btn btn-success goto-dashboard ps-3 pe-3 btn-sm' onClick={handleShow}>Change</button>

            <Modal
                show={show}
                onHide={handleClose}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                backdrop="static"
            >
                <Modal.Header closeButton>
                <Modal.Title>Change Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className='mb-3'>
                            <input type="text" className='form-control' placeholder='Phone number' onChange={(e) => setVerificationDetails({...verificationDetails, phone: e.target.value})} />
                        </div>
                            <div className='mb-3'>
                            <input type="email" className='form-control' placeholder='Email' onChange={(e) => setVerificationDetails({...verificationDetails, email: e.target.value})} />
                        </div>
                        <Button variant="success" className='sorted-btn' onClick={verifyCredentials} hidden={hidden}>Verify</Button>
                    </div>
                    {
                        verificationStatus &&
                        <div className='mb-3 mt-3'>
                            <input type="text" className='form-control' placeholder='Enter new password' onChange={(e) => {setNewPassword(e.target.value)}} />
                        </div>
                    }
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary border-0" onClick={handleClose}>Cancel</Button>
                <Button variant="success" className='sorted-btn' onClick={handleChange}>Change</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ChangePassword