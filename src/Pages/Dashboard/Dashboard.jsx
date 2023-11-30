import React from 'react'
import Requests from './Requests'
import Accepted from './Accepted'
import Profile from './Profile'
import { useState } from 'react'
import DashHome from './DashHome'
import '../CSS/dashboard.css'
import { useMediaQuery } from 'react-responsive'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import { Modal, Button } from 'react-bootstrap'

function Dashboard() {
    const isTabletOrMobile = useMediaQuery({ minWidth: 1224 })
    const [selectedPage, setSelectedPage] = useState("home")
    const [selectedPageMobile, setSelectedPageMobile] = useState("home")
    const [value, setValue] = React.useState(0);

    // Logout Modal control
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {
                isTabletOrMobile ? 
                <div className='container-fluid dashboard' style={{backgroundColor:'#e8f3ee', height:'100dvh'}}>
                    <div className="container-fluid d-flex" style={{height:'100%'}}>
                        <div className="container-fluid mt-4" style={{width:'15rem'}}>
                            <div className='options'>
                                <div className="option p-3 rounded-3" onClick={() => setSelectedPage("home")} style={selectedPage === "home"?{backgroundColor:'#16a34a',color:'white'}:{backgroundColor:'white'}}>
                                    <p className='m-0' style={{fontWeight:'500'}} onClick={() => setSelectedPage("home")}><i class="fa-solid fa-house"></i> Home</p>
                                </div>
                                <div className="option p-3 rounded-3 mt-2" onClick={() => setSelectedPage("request")} style={selectedPage === "request"?{backgroundColor:'#16a34a',color:'white'}:{backgroundColor:'white'}}>
                                    <p className='m-0' style={{fontWeight:'500'}}><i class="fa-solid fa-paper-plane"></i> Requests</p>
                                </div>
                                <div className="option p-3 rounded-3 mt-2" onClick={() => setSelectedPage("accepted")} style={selectedPage === "accepted"?{backgroundColor:'#16a34a',color:'white'}:{backgroundColor:'white'}}>
                                    <p className='m-0' style={{fontWeight:'500'}}><i class="fa-solid fa-circle-check"></i> Accepted Items</p>
                                </div>
                                <div className="option p-3 rounded-3 mt-2"  onClick={() => setSelectedPage("profile")} style={selectedPage === "profile"?{backgroundColor:'#16a34a',color:'white'}:{backgroundColor:'white'}}>
                                    <p className='m-0' style={{fontWeight:'500'}}><i class="fa-solid fa-user"></i> Profile</p>
                                </div>
                                <div className="option bg-white p-3 rounded-3 mt-2" onClick={handleShow}>
                                    <p className='m-0' style={{fontWeight:'500'}}><i class="fa-solid fa-right-from-bracket"></i> Logout</p>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid bg-white mt-4 mb-4 rounded-3 pt-4 d-flex flex-column align-items-center dash-panel" style={{overflowY:'scroll'}}>
                            {selectedPage === "home" ? <DashHome /> : null}
                            {selectedPage === "request" ? <Requests /> : null}
                            {selectedPage === "accepted" ? <Accepted /> : null}
                            {selectedPage === "profile" ? <Profile /> : null}
                        </div>
                    </div>
                </div>
                :
                <>
                    <div className='container-fluid p-0' style={{minHeight:'90dvh'}}>
                        <div className="container-fluid bg-white mb-4 mt-3 rounded-3 dash-panel">
                            {selectedPageMobile === "home" ? <DashHome /> : null}
                            {selectedPageMobile === "request" ? <Requests /> : null}
                            {selectedPageMobile === "accepted" ? <Accepted /> : null}
                            {selectedPageMobile === "profile" ? <Profile /> : null}
                        </div>
                    </div>
                        <BottomNavigation
                            showLabels
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                            style={{position: 'sticky', bottom: 0}}
                            className='mt-4'
                        >
                            <BottomNavigationAction label="Home" icon={<i class="fa-solid fa-house"></i>} onClick={() => setSelectedPageMobile("home")} />
                            <BottomNavigationAction label="Request" icon={<i class="fa-solid fa-paper-plane"></i>} onClick={() => setSelectedPageMobile("request")} />
                            <BottomNavigationAction label="Accepted" icon={<i class="fa-solid fa-circle-check"></i>} onClick={() => setSelectedPageMobile("accepted")} />
                            <BottomNavigationAction label="You" icon={<i class="fa-solid fa-user"></i>} onClick={() => setSelectedPageMobile("profile")} />
                        </BottomNavigation>
                </>
            }

            {/* Logout modal */}
            <Modal
                show={show}
                onHide={handleClose}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body className='fs-4 text-center'>
                    Are you sure you want to log out?
                    <br />
                    <div className="mt-1 mb-1" style={{color:'#7c7c7c',fontSize:'small'}}><i class="fa-solid fa-triangle-exclamation"></i> Logging out will end your current session</div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary btn-danger" onClick={handleClose}>
                        Logout
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Dashboard