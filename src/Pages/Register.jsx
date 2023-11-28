import React, { useState } from 'react'
import './CSS/register.css'
import { registerAPI } from '../Services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TypeAnimation } from 'react-type-animation'

function Register() {
    const [progress, setProgress] = useState("personal")
    const districtsInKerala = [
        'Thiruvananthapuram',
        'Kollam',
        'Pathanamthitta',
        'Alappuzha',
        'Kottayam',
        'Idukki',
        'Ernakulam',
        'Thrissur',
        'Palakkad',
        'Malappuram',
        'Kozhikode',
        'Wayanad',
        'Kannur',
        'Kasaragod',
    ];

    const [details, setDetails] = useState({
        username: "",
        phone: "",
        email: "",
        password: "",
        address: "",
        city: "",
        state: "Kerala",
        district: "",
        pincode: "",
        attribute: ""
    })

    // Handle submit
    const handleSubmit = async() => {
        const {username, phone, email, password, address, city, district, pincode, attribute} = details
        if (!username || !phone || !email || !password || !address || !city || !district || !pincode || !attribute) {
            toast.warning("Please fill the form completely")
        } else {
            const result = await registerAPI(details)
            console.log(result);
            if (result.status === 200) {
                setProgress("final")
            } else {
                toast.error("Registration failed")
            }
        }
    }
    

    // TEST
    console.log(details);
    return (
        <div className='container pt-5 pb-5' style={{height:'100dvh'}}>
            <ToastContainer autoClose={2000} />
            <div className="container-fluid rounded-3 p-3" style={{height:'100%',backgroundColor:'#e8f3ee'}}>
                <p className='fs-3' style={{fontWeight:'500'}}><TypeAnimation sequence={["Let's Make a Difference Together!",1000,"Let's Make them Smile"]} wrapper='span' speed={50}/></p> 
                <div className="process-bar row gap-3 m-0 p-0">
                    <div className="col bg-light p-2 rounded-3 progress-items d-flex align-items-center" style={progress === "personal" ? { border: "2px solid #16a34a" } : {}}>
                        <span className='text-white p-2 ps-3 pe-3 rounded-3 progress-item-span1' style={{backgroundColor:'#16a34a'}}><i class="fa-solid fa-user"></i></span> 
                        <div className='ms-3 register-hidden'>
                            <span className='register-hidden' style={{fontWeight:'500'}}>About you</span>
                            <p className='m-0 register-hidden' style={{fontSize:'small',color:'#7c7c7c'}}>Personal details</p>
                        </div>
                    </div>
                    <div className="col bg-light p-2 rounded-3 progress-items d-flex align-items-center" style={progress === "address" ? { border: "2px solid #16a34a" } : {}}>
                        <span className='text-white p-2 ps-3 pe-3 rounded-3 progress-item-span1' style={{backgroundColor:'#16a34a'}}><i class="fa-solid fa-house"></i></span> 
                        <div className='ms-3 register-hidden'>
                            <span className='register-hidden' style={{fontWeight:'500'}}>Where you live</span>
                            <p className='m-0 register-hidden' style={{fontSize:'small',color:'#7c7c7c'}}>Address details</p>
                        </div>
                    </div>
                    <div className="col bg-light p-2 rounded-3 progress-items d-flex align-items-center" style={progress === "final" ? { border: "2px solid #16a34a" } : {}}>
                        <span className='text-white p-2 ps-3 pe-3 rounded-3 progress-item-span1' style={{backgroundColor:'#16a34a'}}><i class="fa-solid fa-thumbs-up"></i></span> 
                        <div className='ms-3 register-hidden'>
                            <span className='register-hidden' style={{fontWeight:'500'}}>All set!</span>
                            <p className='m-0 register-hidden' style={{fontSize:'small',color:'#7c7c7c'}}>Ready to go</p>
                        </div>
                    </div>
                </div>

                {/* Form */}
                {
                    progress === "personal" &&
                    <div className='mt-3 register-form'>
                        <form>
                            <div class="mb-3 d-flex align-items-center row p-0 m-0 gap-3">
                                <div className='col m-0 p-0'><input type="text" className="form-control border-0" placeholder='Full name' style={{height:'3rem'}} onChange={(e) => setDetails({...details, username: e.target.value})} /></div>
                            </div>
                            <div class="mb-3">
                                <input type="text" className="form-control border-0" placeholder='Phone number' style={{height:'3rem'}} onChange={(e) => setDetails({...details, phone: e.target.value})} />
                            </div>
                            <div class="mb-3">
                                <input type="email" className="form-control border-0" placeholder='Email' style={{height:'3rem'}} onChange={(e) => setDetails({...details, email: e.target.value})} />
                            </div>
                            <div class="mb-3">
                                <input type="password" className="form-control border-0" placeholder='Password' style={{height:'3rem'}} onChange={(e) => setDetails({...details, password: e.target.value})} />
                            </div>
                            <div class="mb-3 d-flex align-items-center">
                                <select class="form-select border-0" aria-label="Default select example" style={{height:'3rem'}} onChange={(e) => setDetails({...details, attribute: e.target.value})} >
                                    <option selected value={""}>Select which defines you better</option>
                                    <option value={'Individual'}>Individual</option>
                                    <option value={'Organization'}>Organization</option>
                                </select>
                            </div>
                        </form>
                        <div className='mt-5'>
                            <button type="submit" class="btn btn-primary ms-auto d-block w-25 register-btn" onClick={() => setProgress("address")}><span className='register-hidden'>Next </span> <i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                }


                {
                    progress === "address" &&
                    <div className='mt-3 register-form'>
                        <form>
                            <div class="mb-3 d-flex align-items-center row p-0 m-0 gap-3">
                                <div className='col m-0 p-0'><input type="text" className="form-control border-0" placeholder='Address' style={{height:'3rem'}} onChange={(e) => setDetails({...details, address: e.target.value})} /></div>
                                <div className='col m-0 p-0'><input type="text" className="form-control border-0" placeholder='City' style={{height:'3rem'}} onChange={(e) => setDetails({...details, city: e.target.value})} /></div>
                            </div>
                            <div class="mb-3">
                                <input type="text" className="form-control border-0" disabled placeholder='Kerala' style={{height:'3rem'}} />
                            </div>
                            <div class="mb-3">
                                <select class="form-select border-0" aria-label="Default select example" style={{height:'3rem'}} onChange={(e) => setDetails({...details, district: e.target.value})}>
                                <option value="">Select district</option>
                                    {
                                        districtsInKerala.map((district) => (
                                            <option value={district}>{district}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div class="mb-3">
                                <input type="text" className="form-control border-0" placeholder='Pincode' style={{height:'3rem'}} onChange={(e) => setDetails({...details, pincode: e.target.value})} />
                            </div>
                        </form>
                        <div className='mt-5 d-flex justify-content-end'>
                        <button type="submit" class="btn btn-primary w-25 register-btn me-2" onClick={() => setProgress("personal")}><i class=" fa-solid fa-arrow-left"></i> <span className='register-hidden'> Previous</span></button>
                            <button type="submit" class="btn btn-primary w-25 register-btn" onClick={handleSubmit}><span className='register-hidden'>Submit </span><i class="fa-solid fa-check"></i></button>
                        </div>
                    </div>
                }


                {
                    progress === "final" &&
                    <div className='mt-3 register-form'>
                        <form>
                            <div className="text-center">
                                <p className='fs-1'>You're In!</p>
                                <p className='fs-5'>Welcome to Smile, where every action counts towards <br className='register-hidden' />reducing food waste and making a positive impact</p>
                            </div>
                        </form>
                        <div className='mt-5 d-flex justify-content-center'>
                            <button class="btn btn-primary w-25 register-btn">Login</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Register