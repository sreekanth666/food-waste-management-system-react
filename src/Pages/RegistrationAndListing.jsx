import React from 'react'
import Navigation from '../Components/Navigation'
import Footer from '../Components/Footer'

function RegistrationAndListing() {
    return (
        <>
            <Navigation />
            <div className='container mt-4'>
                <p className='fs-1' style={{fontWeight:'500'}}>Registration and Listing</p>
                <p className='fs-4 m-0'>Join Our Community</p>
                <p>Welcome to Smile, where every action counts towards reducing waste and making a positive impact! Join our community by signing up and listing surplus food or waste, contributing to a greener and more caring world.</p>

                <div className="sign-up mt-5 row">
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-2">
                        <p className='fs-3' style={{color:'#7c7c7c',fontWeight:'500'}}>Sign Up</p>
                        <p>Get started on your waste management journey by creating an account. By signing up, you'll unlock a world of possibilities to share, repurpose, and responsibly dispose of surplus food or waste.</p>
                        <button className='btn border-0 text-light w-100' style={{backgroundColor:'#16a34a',fontWeight:'500'}}>Sign Up</button>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex align-items-end">
                        <p className='fs-1 special-font-1' style={{color:'#16a34a',fontWeight:'500',lineHeight:'2rem'}}>Make a Difference<br />Access Community Features<br />Engage and Share</p>
                    </div>
                </div>

                <div className="mt-5">
                    <p className='fs-3' style={{color:'#7c7c7c',fontWeight:'500'}}>Listing Surplus Food or Waste</p>
                    <p>Once you're registered, you can easily list surplus food or waste that you want to repurpose or dispose of responsibly. Share details about the items, and let them find a new purpose or a suitable disposal method.</p>
                    <button className='btn border border-2 border-dark w-100' style={{fontWeight:'500'}}>Log In to Start Listing</button>
                </div>

                <div className="mt-5 row p-0">
                    <div className='col-3'><p className='fs-3' style={{color:'#7c7c7c',fontWeight:'500'}}>Tips for Effective Listing</p></div>
                    <div className='col'>
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-controls="collapseOne">
                                    Be Detailed
                                </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                Provide accurate information about the surplus food or waste to attract the right audience.
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Be Responsible
                                </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                Ensure that the information shared about waste is accurate and follows ethical disposal methods.                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Engage with Community                                </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                Interact with other users, discuss listings, and join hands for a collective impact.                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-5 mb-5">
                    <p className='fs-3' style={{color:'#7c7c7c',fontWeight:'500'}}>Ready to Get Started?</p>
                    <p>Join us in our mission to turn waste into opportunity. Sign up now and start listing surplus food or waste to make a meaningful difference today!</p>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default RegistrationAndListing