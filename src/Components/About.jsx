import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import sharingFood from '../Assets/sharing-food.jpg'

function About() {
    return (
        <div className='about container mt-5 mb-5'>
            <h1 style={{fontWeight:"600"}}>About</h1>
            <Row>
                <Col sm={12} md={12} lg={6} xl={6}>
                    <img src={sharingFood} alt="" className='img-fluid rounded-4' />
                </Col>
                <Col sm={12} md={12} lg={6} xl={6}>
                    <p className='fs-3'>
                        At <span style={{color:"#304ffe"}}>Smile</span>, we connect surplus food with those in need, aiming to reduce waste and nourish communities
                    </p>
                    <p className='fs-3'>
                        Join us in our mission to spread joy by sharing, ensuring no good food goes to waste
                    </p>
                    <Button variant='border-1 border-dark rounded-4' style={{fontWeight:"500"}}>Know more</Button>
                </Col>
            </Row>
        </div>
    )
}

export default About