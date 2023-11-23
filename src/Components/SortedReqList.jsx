import React from 'react'
import './CSS/sortedreqlist.css'
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';

function SortedReqList() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {/* Food request */}
            <div className='container mt-5 mb-5'>
                <p className='m-0 fs-1 sorted-heading'>Food Requests Nearby</p>
                <div className="sorted-list mt-3 d-flex mb-3">
                    <div className="me-4">
                        <div className="card rounded-3 border-bottom-0 border-0" style={{width: "15rem"}}>
                            <div className="card-body ps-0">
                                <h5 className="card-title">
                                    123, ABC Street <br />
                                    Trivandrum, Kerala, India <br />
                                    695001
                                </h5>
                                <p className="card-text">
                                    Requested by Ravi
                                </p>
                            </div>
                            <ul class="list-group list-group">
                                <li className="list-group-item">2 Packs</li>
                                <li className="list-group-item"><span style={{fontSize:'small'}}><i className="fa-solid fa-circle border p-1 border-2 border-success text-center" style={{color: "#109806"}}></i></span> Vegetarian</li>
                            </ul>
                            <div className="ps-0 card-body text-light d-flex justify-content-start align-items-center text-center">
                                <button className='sorted-btn btn btn-success me-2' onClick={handleShow}>Accept</button>
                                <button className='sorted-btn btn btn-success'><i class="fa-solid fa-share"></i></button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="me-4">
                        <div className="card rounded-3 border-bottom-0 border-0" style={{width: "15rem"}}>
                            <div className="card-body ps-0">
                                <h5 className="card-title">Ravi is requesting food</h5>
                                <p className="card-text">
                                123, ABC Street <br />
                                Trivandrum, Kerala, India <br />
                                695001
                                </p>
                            </div>
                            <ul class="list-group list-group">
                                <li className="list-group-item">2 Packs</li>
                                <li className="list-group-item"><span style={{fontSize:'small'}}><i className="fa-solid fa-circle border p-1 border-2 border-success text-center" style={{color: "#109806"}}></i></span> Vegetarian</li>
                            </ul>
                            <div className="ps-0 card-body text-light d-flex justify-content-start align-items-center text-center">
                                <button className='sorted-btn btn btn-success me-2'>Accept</button>
                                <button className='sorted-btn btn btn-success'><i class="fa-solid fa-share"></i></button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="me-4">
                        <div className="card rounded-3 border-bottom-0 border-0" style={{width: "15rem"}}>
                            <div className="card-body ps-0">
                                <h5 className="card-title">Ravi is requesting food</h5>
                                <p className="card-text">
                                123, ABC Street <br />
                                Trivandrum, Kerala, India <br />
                                695001
                                </p>
                            </div>
                            <ul class="list-group list-group">
                                <li className="list-group-item">2 Packs</li>
                                <li className="list-group-item"><span style={{fontSize:'small'}}><i className="fa-solid fa-circle border p-1 border-2 border-success text-center" style={{color: "#109806"}}></i></span> Vegetarian</li>
                            </ul>
                            <div className="ps-0 card-body text-light d-flex justify-content-start align-items-center text-center">
                                <button className='sorted-btn btn btn-success me-2'>Accept</button>
                                <button className='sorted-btn btn btn-success'><i class="fa-solid fa-share"></i></button>
                            </div>
                        </div>
                    </div>
    
                    <div className="me-4">
                        <div className="card rounded-3 border-bottom-0 border-0" style={{width: "15rem"}}>
                            <div className="card-body ps-0">
                                <h5 className="card-title">Ravi is requesting food</h5>
                                <p className="card-text">
                                123, ABC Street <br />
                                Trivandrum, Kerala, India <br />
                                695001
                                </p>
                            </div>
                            <ul class="list-group list-group">
                                <li className="list-group-item">2 Packs</li>
                                <li className="list-group-item"><span style={{fontSize:'small'}}><i className="fa-solid fa-circle border p-1 border-2 border-success text-center" style={{color: "#109806"}}></i></span> Vegetarian</li>
                            </ul>
                            <div className="ps-0 card-body text-light d-flex justify-content-start align-items-center text-center">
                                <button className='sorted-btn btn btn-success me-2'>Accept</button>
                                <button className='sorted-btn btn btn-success'><i class="fa-solid fa-share"></i></button>
                            </div>
                        </div>
                    </div>
    
                    <div className="me-4">
                        <div className="card rounded-3 border-bottom-0 border-0" style={{width: "15rem"}}>
                            <div className="card-body ps-0">
                                <h5 className="card-title">Ravi is requesting food</h5>
                                <p className="card-text">
                                123, ABC Street <br />
                                Trivandrum, Kerala, India <br />
                                695001
                                </p>
                            </div>
                            <ul class="list-group list-group">
                                <li className="list-group-item">2 Packs</li>
                                <li className="list-group-item"><span style={{fontSize:'small'}}><i className="fa-solid fa-circle border p-1 border-2 border-success text-center" style={{color: "#109806"}}></i></span> Vegetarian</li>
                            </ul>
                            <div className="ps-0 card-body text-light d-flex justify-content-start align-items-center text-center">
                                <button className='sorted-btn btn btn-success me-2'>Accept</button>
                                <button className='sorted-btn btn btn-success'><i class="fa-solid fa-share"></i></button>
                            </div>
                        </div>
                    </div>
    
                    <div className="me-4">
                        <div className="card rounded-3 border-bottom-0 border-0" style={{width: "15rem"}}>
                            <div className="card-body ps-0">
                                <h5 className="card-title">Ravi is requesting food</h5>
                                <p className="card-text">
                                123, ABC Street <br />
                                Trivandrum, Kerala, India <br />
                                695001
                                </p>
                            </div>
                            <ul class="list-group list-group">
                                <li className="list-group-item">2 Packs</li>
                                <li className="list-group-item"><span style={{fontSize:'small'}}><i className="fa-solid fa-circle border p-1 border-2 border-success text-center" style={{color: "#109806"}}></i></span> Vegetarian</li>
                            </ul>
                            <div className="ps-0 card-body text-light d-flex justify-content-start align-items-center text-center">
                                <button className='sorted-btn btn btn-success me-2'>Accept</button>
                                <button className='sorted-btn btn btn-success'><i class="fa-solid fa-share"></i></button>
                            </div>
                        </div>
                    </div>
    
                    <div className="me-4">
                        <div className="card rounded-3 border-bottom-0 border-0" style={{width: "15rem"}}>
                            <div className="card-body ps-0">
                                <h5 className="card-title">Ravi is requesting food</h5>
                                <p className="card-text">
                                123, ABC Street <br />
                                Trivandrum, Kerala, India <br />
                                695001
                                </p>
                            </div>
                            <ul class="list-group list-group">
                                <li className="list-group-item">2 Packs</li>
                                <li className="list-group-item"><span style={{fontSize:'small'}}><i className="fa-solid fa-circle border p-1 border-2 border-success text-center" style={{color: "#109806"}}></i></span> Vegetarian</li>
                            </ul>
                            <div className="ps-0 card-body text-light d-flex justify-content-start align-items-center text-center">
                                <button className='sorted-btn btn btn-success me-2'>Accept</button>
                                <button className='sorted-btn btn btn-success'><i class="fa-solid fa-share"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Food waste requests */}
            <div className='container mt-5 mb-5'>
            <p className='m-0 fs-1 sorted-heading'>Waste pickup requests near you</p>
            <div className="sorted-list mt-3 d-flex mb-3">
                <div className="me-4">
                    <div className="card rounded-3 border-bottom-0 border-0" style={{width: "15rem"}}>
                        <div className="card-body ps-0">
                            <h5 className="card-title">Ravi is requesting to collect waste</h5>
                            <p className="card-text">
                            123, ABC Street <br />
                            Trivandrum, Kerala, India <br />
                            695001
                            </p>
                        </div>
                        <ul class="list-group list-group">
                            <li className="list-group-item">2 Kg</li>
                            <li className="list-group-item">
                                Chicken waste
                                <p className='m-0' style={{fontSize:'small'}}>
                                    Bones,
                                    Feathers,
                                    Skin peals
                                </p>
                            </li>
                        </ul>
                        <div className="ps-0 card-body text-light d-flex justify-content-start align-items-center text-center">
                            <button className='sorted-btn btn btn-success me-2'>Accept</button>
                            <button className='sorted-btn btn btn-success'><i class="fa-solid fa-share"></i></button>
                        </div>
                    </div>
                </div>
                
                <div className="me-4">
                    <div className="card rounded-3 border-bottom-0 border-0" style={{width: "15rem"}}>
                        <div className="card-body ps-0">
                            <h5 className="card-title">Ravi is requesting to collect waste</h5>
                            <p className="card-text">
                            123, ABC Street <br />
                            Trivandrum, Kerala, India <br />
                            695001
                            </p>
                        </div>
                        <ul class="list-group list-group">
                            <li className="list-group-item">2 Kg</li>
                            <li className="list-group-item">
                                Chicken waste
                                <p className='m-0' style={{fontSize:'small'}}>
                                    Bones,
                                    Feathers,
                                    Skin peals
                                </p>
                            </li>
                        </ul>
                        <div className="ps-0 card-body text-light d-flex justify-content-start align-items-center text-center">
                            <button className='sorted-btn btn btn-success me-2'>Accept</button>
                            <button className='sorted-btn btn btn-success'><i class="fa-solid fa-share"></i></button>
                        </div>
                    </div>
                </div>

                <div className="me-4">
                    <div className="card rounded-3 border-bottom-0 border-0" style={{width: "15rem"}}>
                        <div className="card-body ps-0">
                            <h5 className="card-title">Ravi is requesting to collect waste</h5>
                            <p className="card-text">
                            123, ABC Street <br />
                            Trivandrum, Kerala, India <br />
                            695001
                            </p>
                        </div>
                        <ul class="list-group list-group">
                            <li className="list-group-item">2 Kg</li>
                            <li className="list-group-item">
                                Chicken waste
                                <p className='m-0' style={{fontSize:'small'}}>
                                    Bones,
                                    Feathers,
                                    Skin peals
                                </p>
                            </li>
                        </ul>
                        <div className="ps-0 card-body text-light d-flex justify-content-start align-items-center text-center">
                            <button className='sorted-btn btn btn-success me-2'>Accept</button>
                            <button className='sorted-btn btn btn-success'><i class="fa-solid fa-share"></i></button>
                        </div>
                    </div>
                </div>

                <div className="me-4">
                    <div className="card rounded-3 border-bottom-0 border-0" style={{width: "15rem"}}>
                        <div className="card-body ps-0">
                            <h5 className="card-title">Ravi is requesting to collect waste</h5>
                            <p className="card-text">
                            123, ABC Street <br />
                            Trivandrum, Kerala, India <br />
                            695001
                            </p>
                        </div>
                        <ul class="list-group list-group">
                            <li className="list-group-item">2 Kg</li>
                            <li className="list-group-item">
                                Chicken waste
                                <p className='m-0' style={{fontSize:'small'}}>
                                    Bones,
                                    Feathers,
                                    Skin peals
                                </p>
                            </li>
                        </ul>
                        <div className="ps-0 card-body text-light d-flex justify-content-start align-items-center text-center">
                            <button className='sorted-btn btn btn-success me-2'>Accept</button>
                            <button className='sorted-btn btn btn-success'><i class="fa-solid fa-share"></i></button>
                        </div>
                    </div>
                </div>

                <div className="me-4">
                    <div className="card rounded-3 border-bottom-0 border-0" style={{width: "15rem"}}>
                        <div className="card-body ps-0">
                            <h5 className="card-title">Ravi is requesting to collect waste</h5>
                            <p className="card-text">
                            123, ABC Street <br />
                            Trivandrum, Kerala, India <br />
                            695001
                            </p>
                        </div>
                        <ul class="list-group list-group">
                            <li className="list-group-item">2 Kg</li>
                            <li className="list-group-item">
                                Chicken waste
                                <p className='m-0' style={{fontSize:'small'}}>
                                    Bones,
                                    Feathers,
                                    Skin peals
                                </p>
                            </li>
                        </ul>
                        <div className="ps-0 card-body text-light d-flex justify-content-start align-items-center text-center">
                            <button className='sorted-btn btn btn-success me-2'>Accept</button>
                            <button className='sorted-btn btn btn-success'><i class="fa-solid fa-share"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            </div>

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
                            <tr>
                                <th className='border-0'>Delivery</th>
                                <td className='border-0'>
                                <select class="form-select" aria-label="Default select example">
                                    <option value="deliver">I will deliver</option>
                                    <option value="pickup">Need pickup</option>
                                </select>
                                </td>
                            </tr>
                            <tr>
                                <th className='border-0'>Pickup location</th>
                                <td className='border-0'>
                                <select class="form-select" aria-label="Default select example">
                                    <option value="deliver">My default address</option>
                                    <option value="pickup">Other</option>
                                </select>
                                </td>
                            </tr>
                            <tr>
                                <th className='border-0'>Address</th>
                                <td className='border-0'>
                                    <textarea name="custom-address" id="custom-address" cols="30" rows="10" className='form-control'></textarea>
                                    <input type="text" className='form-control mt-2' placeholder='pincode' />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="mb-3 form-check" style={{fontSize:'small',color:'#999999'}}>
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Confirming means agreeing to voluntarily provide the requested food items, contributing to a positive impact in your community by delivering to the person in need.</label>

                        <label class="form-check-label" for="exampleCheck1">Confirming indicates your willingness to offer food waste, reducing waste, and aiding those in need within your community.</label>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary border-0" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="success" className='sorted-btn' >Understood</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default SortedReqList