import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { changePasswordAPI, otpServiceAPI } from '../../Services/allAPI';
import { formLabelClasses } from '@mui/material';

function ChangePassword() {
    const userDetails = JSON.parse(sessionStorage.getItem("existingUser"))
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        setHidden(false)
        setLoading(false)
        setVerificationStatus(false)
        setOtpStatus(false)
        setVerificationDetails({
            email: ""
        })
    }
    const handleShow = () => setShow(true);
    const [hidden, setHidden] = useState(false)
    const [verificationStatus, setVerificationStatus] = useState(false)
    
    // Verification 1
    const [verificationDetails, setVerificationDetails] = useState({
        email: ""
    })
    const [otpStatus, setOtpStatus] = useState(false)
    const verifyCredentials = async() => {
        setDisableResent(false)
        if (verificationDetails.email === "") {
            toast.warning("Please enter email")
        } else {
            setLoading(true)
            const token = sessionStorage.getItem("token")
            const reqHeader = {
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
            const getOTP = await otpServiceAPI(verificationDetails, reqHeader)
            setLoading(false)
            if (getOTP.status === 200) {
                toast.info("OTP has been sent to the entered email")
                setOtpStatus(true)
                setHidden(true)
                setOtp(getOTP.data)
            } else {
                setOtpStatus(false)
            }
        }
    }

    const [disableResent, setDisableResent] = useState(false)
    const resendOTP = async() => {
        setDisableResent(true)
        const token = sessionStorage.getItem("token")
        const reqHeader = {
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
        const getOTP = await otpServiceAPI(verificationDetails, reqHeader)
        setLoading(false)
        if (getOTP.status === 200) {
            toast.info("OTP is resent")
            setOtpStatus(true)
            setHidden(true)
            setOtp(getOTP.data)
        } else {
            setOtpStatus(false)
        }
    }

    // Change password
    const [loading, setLoading] = useState(false)
    const [otp, setOtp] = useState("")
    const [enteredOtp, setEnteredOtp] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const handleVerification = () => {
        if (verificationDetails === "") {
            toast.warning("Please complete email verification")
        } else {
            
            if (otp === enteredOtp) {
                setVerificationStatus(true)
                setOtpStatus(false)
            } else {
                toast.warning("OTP is incorrect")
            }
        }
    }
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
            }
            handleClose()
            setVerificationStatus(false)
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
                            <input type="email" className='form-control' placeholder='Email' onChange={(e) => setVerificationDetails({...verificationDetails, email: e.target.value})} />
                        </div>
                        <Button variant="success" className='sorted-btn' onClick={verifyCredentials} hidden={hidden} disabled={loading === true ? true : false}>{loading === true ? <i class="fa-solid fa-spinner fa-spin-pulse"></i> : null} Verify</Button>
                        {
                            otpStatus ?
                            <>
                                <p className='text-center m-0'>OTP has been send to the entered email</p>
                                <p className='text-danger text-center'>Please check you email</p>
                                <p className='text-center' hidden={disableResent}>Didn't receive OTP? <span style={{textDecoration: "none",color:'#16a34a'}} onClick={resendOTP}>RESEND</span></p>
                            </> : null
                        }
                        {
                            otpStatus &&
                            <>
                                <div className='mb-3'>
                                    <input type="text" className='form-control' placeholder='Enter OTP' onChange={(e) => setEnteredOtp(e.target.value)} />
                                </div>
                                <button className='btn sorted-btn btn-success' onClick={handleVerification}>Verify OTP</button>
                            </>
                        }
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
                <Button variant="success" className='sorted-btn' onClick={handleChange} disabled={verificationStatus ? false : true}>Change</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ChangePassword