import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';

function AcceptedUserDetails({accepted}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(accepted);

    return (
        <>
            <br /><span style={{color:"#16a34a",fontSize:'small'}} className='border p-1 rounded-3' onClick={handleShow}>Details</span>

            {/* MODAL */}
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>Accepted Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table className='confirmation-table table table-striped border-0'>
                    <tbody>
                            <tr>
                                <th className='border-0'>Accepted by</th>
                                <td className='border-0'>{accepted?.accepted.acceptedName}</td>
                            </tr>
                            <tr>
                                <th className='border-0'>Accepted on</th>
                                <td className='border-0'>{accepted?.accepted.acceptedDate}, {accepted?.accepted.acceptedTime}</td>
                            </tr>
                            <tr>
                                <th className='border-0'>Phone</th>
                                <td className='border-0'>{accepted?.accepted.acceptedPhone}</td>
                            </tr>
                            <tr>
                                <th className='border-0'>Email</th>
                                <td className='border-0'>{accepted?.accepted.acceptedEmail}</td>
                            </tr>
                            <tr>
                                <th className='border-0'>Address</th>
                                <td className='border-0'>{accepted?.accepted.acceptedAddress}</td>
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

export default AcceptedUserDetails