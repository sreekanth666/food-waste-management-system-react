import React from 'react'
import './CSS/pincode.css'
import { Link, useNavigate } from 'react-router-dom'

function Pincode() {
    const navigate = useNavigate()
    const handleNavigation = (e) =>{
        e.preventDefault()
        navigate('/')
    }
    return (
        <div className='container-fluid pincode-home d-flex justify-content-center align-items-center flex-column'>
            <div className="row pincode-row">
                <div className="col-sm-6 pincode-title d-flex justify-content-center flex-column">
                    <h1 className='m-0 pincode-heading'>Smile</h1>
                    <p className='m-0'>Bringing hearts together, sharing food</p>
                </div>
                <div className="col-sm-6 pincode-form d-flex justify-content-center flex-column p-4">
                <div class="input-group mb-3 pincode">
                    <input type="text" className="border-end-0 form-control rounded-start-3" placeholder="Pincode" aria-label="Pincode" aria-describedby="button-addon2" />
                    <button className="btn pincode-btn btn-outline-secondary rounded-end-3 w-25" type="button" id="button-addon2" onClick={(e) => handleNavigation(e)}><span className='pincode-hidden'>Find</span> <i className=" fa-solid fa-location-crosshairs"></i></button>
                </div>
                <p className='text-center'>Have and account? <Link to={'/'} style={{textDecoration:'none'}}><span className='pincode-login'>Login</span></Link></p>
                </div>
            </div>
        </div>
    )
}

export default Pincode

