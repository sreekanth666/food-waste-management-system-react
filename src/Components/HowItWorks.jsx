import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

function HowItWorks() {
  return (
    <div className='about container mt-5'>
        <h1 style={{fontWeight:"600"}}>How it Works</h1>
        <Row>
            <Col sm={12} md={12} lg={6} xl={6}>
                <p className='fs-3 m-0'><span style={{color:"#304ffe",fontWeight:"500"}} className='me-3 fs-1'>1</span>Share Your Surplus</p>
                <p>Easily upload details of your extra food items, including quantity, description, and expiry dates, ensuring your surplus finds a new home.</p>

                <p className='fs-3 m-0'><span style={{color:"#304ffe",fontWeight:"500"}} className='me-3 fs-1'>2</span>Matching Made Simple</p>
                <p>Our platform employs smart algorithms to pair your listings with nearby individuals or organizations in need, optimizing the matching process.</p>
            </Col>
            <Col sm={12} md={12} lg={6} xl={6}>
                <p className='fs-3 m-0'><span style={{color:"#304ffe",fontWeight:"500"}} className='me-3 fs-1'>3</span>Connect & Share</p>
                <p>Communicate effortlessly with matched recipients to arrange convenient pick-up or delivery, facilitating a smooth exchange.</p>

                <p className='fs-3 m-0'><span style={{color:"#304ffe",fontWeight:"500"}} className='me-3 fs-1'>4</span>Make an Impact</p>
                <p>Share your experience and be part of a community dedicated to minimizing waste and supporting those in need, contributing to a more sustainable future.</p>
            </Col>
        </Row>
    </div>
  )
}

export default HowItWorks