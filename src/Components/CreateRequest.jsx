import React, { useEffect, useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
import date from 'date-and-time'
import { createFoodRequestAPI, createWasteRequestAPI } from '../Services/allAPI';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function CreateRequest() {
    // Modal controllers
    const [foodShow, setFoodShow] = useState(false);
    const [wasteShow, setWasteShow] = useState(false);
    const handleClose = () => {
        setFoodShow(false)
        setWasteShow(false)
    }
    const handleFoodShow = () => setFoodShow(true);
    const handleWasteShow = () => setWasteShow(true);

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


    // User details
    const [userDetails, setUserDetails] = useState({
        userId: "",
        address: "",
        name: "",
        pincode: "",
        phone: "",
        email: ""
    })
    useEffect(() => {
        if (sessionStorage.getItem("existingUser")) {
            const userSessionData = JSON.parse(sessionStorage.getItem("existingUser"))
            const {_id, address, city, district, state, pincode, phone, email, username} = userSessionData
            const fullAddress = `${address}, ${city}, ${district}, ${state}-${pincode}`
            setUserDetails({...userDetails, userId:_id, address: fullAddress, name: username, pincode: pincode, phone: phone, email: email})
        } else {
            
        }
    }, [])

    // Food request details
    const [foodReqDetails, setFoodReqDetails] = useState({
        userId: "",
        username: "",
        packs: "",
        preference: "",
        postedTime: "",
        postedDate: "",
        delivery: "",
        status: "Created",
        description: "",
        address: "",
        pincode: "",
        phone: "",
        email: "",
        accepted: {
            
        }
    })

    useEffect(() => {
        setFoodReqDetails(prevFoodReqDetails => ({
            ...prevFoodReqDetails,
            userId: userDetails.userId,
            address: userDetails.address,
            postedTime: date.format(today, 'hh:mm A'),
            postedDate: date.format(today, 'DD/MM/YYYY'),
            username: userDetails.name,
            pincode: userDetails.pincode,
            phone: userDetails.phone,
            email: userDetails.email
        }))
        setWasteReqDetails(prevWasteReqDetails => ({
            ...prevWasteReqDetails,
            userId: userDetails.userId,
            address: userDetails.address,
            postedTime: date.format(today, 'hh:mm A'),
            postedDate: date.format(today, 'DD/MM/YYYY'),
            username: userDetails.name,
            pincode: userDetails.pincode,
            phone: userDetails.phone,
            email: userDetails.email
        }))
    },[userDetails, today])

    // Waste request details
    const [wasteReqDetails, setWasteReqDetails] = useState({
        userId: "",
        username: "",
        quantity: "",
        type: "",
        postedTime: "",
        postedDate: "",
        delivery: "",
        status: "Created",
        description: "",
        address: "",
        pincode: "",
        phone: "",
        email: "",
        accepted: {
            
        }
    })

    // Request API handler
    const handleRequest = async(e) => {
        e.preventDefault()
        if (foodShow) {
            const token = sessionStorage.getItem("token")
            const reqHeader = {
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
            const result = await createFoodRequestAPI(foodReqDetails, reqHeader)
            if (result.status === 200) {
                toast.success("Food request created")
                handleClose()
                setFoodReqDetails({
                    userId: "",
                    username: "",
                    packs: "",
                    preference: "",
                    postedTime: "",
                    postedDate: "",
                    delivery: "",
                    status: "Created",
                    description: "",
                    address: "",
                    pincode: "",
                    phone: "",
                    email: "",
                    accepted: {
                        
                    }
                })
            } else {
                toast.error("An error occurred")
            }
        }else if (wasteShow){
            const token = sessionStorage.getItem("token")
            const reqHeader = {
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
            const result = await createWasteRequestAPI(wasteReqDetails, reqHeader)
            if (result.status === 200) {
                toast.success("Waste request created")
                handleClose()
                setWasteReqDetails({
                    userId: "",
                    username: "",
                    quantity: "",
                    type: "",
                    postedTime: "",
                    postedDate: "",
                    delivery: "",
                    status: "Created",
                    description: "",
                    address: "",
                    pincode: "",
                    phone: "",
                    email: "",
                    accepted: {
                        
                    }
                })
            } else {
                toast.error("An error occurred")
            }
        }else {
            toast.error("An internal error has occurred. Please refresh the page")
        }
    }

    // Request input handler
    const handleInput = (e) => {
        e.preventDefault()
        if (foodShow) {
            const {name, value} = e.target
            setFoodReqDetails({...foodReqDetails, [name]:value})
        }else if (wasteShow){
            const {name, value} = e.target
            setWasteReqDetails({...wasteReqDetails, [name]:value})
        }else {
        }
    }

    

    return (
        <>
            <ToastContainer />
            <button className='btn btn-success goto-dashboard m-2' onClick={handleFoodShow} style={{minWidth:'13rem'}}>Create Food Request</button>
            <button className='btn btn-success goto-dashboard m-2' onClick={handleWasteShow} style={{minWidth:'13rem'}}>Create Waste Request</button>

            {/* Food request */}
            <Modal
                show={foodShow}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>Create food request</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className='mb-3'>
                            <Form.Select aria-label="Select food type" onChange={(e) => {handleInput(e)}} name='preference'>
                                <option value="" selected>Select food type</option>
                                <option value="Vegetarian">Vegetarian</option>
                                <option value="Non Vegetarian">Non Vegetarian</option>
                                <option value="Any">Any</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Quantity" onChange={(e) => {handleInput(e)}} name='packs' />
                            <Form.Text className="text-muted">
                            Total number of packs you need
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Select aria-label="Delivery Preference" onChange={(e) => {handleInput(e)}} name='delivery'>
                                <option value="" defaultValue>Select delivery Preference</option>
                                <option value="deliver">Deliver to my address</option>
                                <option value="pickup">I will pickup</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control as="textarea" placeholder="Description" onChange={(e) => {handleInput(e)}} name='description' />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary"  onClick={handleRequest}>Create</Button>
                </Modal.Footer>
            </Modal>

            {/* Waste request */}
            <Modal
                show={wasteShow}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>Create waste request</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className='mb-3'>
                            <Form.Select aria-label="Select food type" name='type' onChange={(e) => {handleInput(e)}}>
                                <option value="" selected>Select waste type</option>
                                <option value="Plate Waste">Plate Waste</option>
                                <option value="Expired or Spoiled Food">Expired or Spoiled Food</option>
                                <option value="Production and Processing Waste">Production and Processing Waste</option>
                                <option value="Retail Waste">Retail Waste</option>
                                <option value="Home Kitchen Waste">Home Kitchen Waste</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Quantity" name='quantity' onChange={(e) => {handleInput(e)}} />
                            <Form.Text className="text-muted">
                            Weight or number of packets
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Select aria-label="Delivery Preference" name='delivery' onChange={(e) => {handleInput(e)}}>
                                <option value="" selected>Select delivery Preference</option>
                                <option value="deliver">Pickup from my address</option>
                                <option value="pickup">I will deliver</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control as="textarea" placeholder="Description" name='description' onChange={(e) => {handleInput(e)}} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleRequest}>Create</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CreateRequest