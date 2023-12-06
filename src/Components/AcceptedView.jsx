import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';

function AcceptedView({accepted}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button className='btn btn-success goto-dashboard btn-sm me-1' onClick={handleShow}>View</button>

            {/* MODAL */}
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="lg"
            >
                <Modal.Header closeButton>
                <Modal.Title>Request Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table className='confirmation-table table table-striped border-0'>
                    <tbody>
                            <tr>
                                <th className='border-0'>Requested by</th>
                                <td className='border-0'>{accepted.username}</td>
                            </tr>
                            <tr>
                                <th className='border-0'>Requested created on</th>
                                <td className='border-0'>{accepted.postedDate}, {accepted.postedTime}</td>
                            </tr>
                            <tr>
                                <th className='border-0'>Requested accepted on</th>
                                <td className='border-0'>{accepted.accepted.acceptedDate}, {accepted.accepted.acceptedTime}</td>
                            </tr>
                            <tr>
                                <th className='border-0'>Phone number</th>
                                <td className='border-0'>{accepted.phone}</td>
                            </tr>
                            <tr>
                                <th className='border-0'>Email</th>
                                <td className='border-0'>{accepted.email}</td>
                            </tr>
                            <tr>
                                <th className='border-0'>Address</th>
                                <td className='border-0'>{accepted.address}</td>
                            </tr>
                            <tr>
                                <th className='border-0'>Quantity</th>
                                <td className='border-0'>
                                    {accepted.packs ? accepted.packs : accepted.quantity} {accepted.packs ? "Pack(s)" : null}
                                </td>
                            </tr>
                            <tr>
                                <th className='border-0'>{accepted.type ? "Type" : "Preference"}</th>
                                <td className='border-0'>{accepted.type ? accepted.type : accepted.preference}</td>
                            </tr>
                            <tr>
                                <th className='border-0'>Additional information</th>
                                <td className='border-0'>{accepted.description}</td>
                            </tr>
                            <tr>
                                <th className='border-0'>Delivery information</th>
                                <td className='border-0 text-danger'>{accepted.delivery === 'deliver' ? "You need to deliver the food/waste to the destination" : "Requested person will pickup the food/waste from your default location"}</td>
                            </tr>
                        </tbody>
                    </table>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary border-0" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AcceptedView