import React, { useContext, useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import { ToastContainer, toast } from 'react-toastify';
import { TypeAnimation } from 'react-type-animation';
import { loginAPI } from '../Services/allAPI';
import { Link, useNavigate } from 'react-router-dom';
import { userApiHandleContext } from '../Context/ContextShare';

function Login() {
    const {setIsLoggedIn} = useContext(userApiHandleContext)
    const navigate = useNavigate()
    
    // Handle login
    const [loginCredentials, setLoginCredentials] = useState({
        email: "",
        password: ""
    })
    const handleLogin = async(e) => {
        e.preventDefault()
        const {email, password} = loginCredentials
        if (!email || !password) {
            toast.warning("Please enter email and password")
        } else {
            const result = await loginAPI(loginCredentials)
            console.log(result);
            if (result.status === 200) {
                sessionStorage.setItem("existingUser", JSON.stringify(result.data?.isUserExists))
                sessionStorage.setItem("token", result.data?.token)
                setIsLoggedIn(result)
                navigate('/')
            } else {
                toast.error(result.response.data)
            }
        }
    }
    
    return (
        <div style={{backgroundColor:'#e8f3ee'}}>
            <div className='container pt-5 pb-5' style={{height:'100dvh'}}>
                <div className="row m-0 p-0" style={{height:'100%'}}>
                    <div className="col-sm-12 col-md-12 col-lg-7 col-xl-7 d-flex justify-content-center flex-column">
                        <p className='m-0' style={{fontSize:'4rem',fontWeight:'500'}}>Smile</p>
                        <div className='fs-4 m-0'>
                            <TypeAnimation sequence={[
                                'Make a Difference', 1000,
                                'Access Community Features', 1000,
                                'Engage and Share'
                            ]}/>
                        </div>
                    </div>
                    <div className="col bg-white rounded-3 d-flex align-items-center justify-content-center flex-column">
                        <p className='m-0 fs-3' style={{fontWeight:'500'}}>Login</p>
                        <div className="mt-4 w-75">
                            <div class="mb-3">
                                <input type="text" className="form-control w-100" placeholder='Email' style={{height:'3rem'}} onChange={(e) => setLoginCredentials({...loginCredentials, email: e.target.value})} />
                            </div>
                            <div class="mb-3">
                                <input type="password" className="form-control" placeholder='Password' style={{height:'3rem'}} onChange={(e) => setLoginCredentials({...loginCredentials, password: e.target.value})} />
                            </div>
                            <button class="btn btn-primary register-btn ps-4 pe-4 w-100 rounded-pill" onClick={(e) => handleLogin(e)}>Login</button>
                        </div>
                        <p className='mt-5'>Need an account? <Link to='/register' style={{textDecoration:'none',color:'#16a34a'}}>Sign up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login