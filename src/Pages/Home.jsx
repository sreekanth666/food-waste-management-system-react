import React, { useEffect, useState } from 'react'
import Navigation from '../Components/Navigation'
import Footer from '../Components/Footer'
import './CSS/home.css'
import kidsSmiling from '../Assets/kids-smiling.jpg'
import { Link } from 'react-router-dom'
import { getAllActiveRequests } from '../Services/allAPI'

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Get all active requests
  const [allActiveRequests, setAllActiveRequests] = useState([])
  const fetchActiveRequests = async() => {
    const result = await getAllActiveRequests()
    setAllActiveRequests(result.data)
  }
  const activeFoodRequests = allActiveRequests.allFoodRequests?.filter(requests => (
    requests.status === 'Created'
  ))
  const activeWasteRequests = allActiveRequests.allWasteRequests?.filter(requests => (
    requests.status === 'Created'
  ))

  // All delivered meals
  const deliveredFoodRequests = allActiveRequests.allFoodRequests?.filter(requests => (
    requests.status === 'Delivered'
  ))
  const deliveredWasteRequests = allActiveRequests.allWasteRequests?.filter(requests => (
    requests.status === 'Delivered'
  ))
  const totalDelivered = (deliveredFoodRequests?.length) + (deliveredWasteRequests?.length)

  useEffect(() => {
    if (sessionStorage.getItem("existingUser")) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }

    fetchActiveRequests()
  }, [])
  return (
    <>
      <Navigation />

      {/* Requests metrics */}
      <div className='home pb-2'>
        <div className="container d-flex flex-column justify-content-center pt-5 mb-5">
          <div className="row p-0">
            
            <div className="col-sm-6">
              {/* Metrics one */}
              <div className="rounded-3 p-3">
                <p className='m-0 home-card-header fs-4'>Total Active Food Requests</p>
                <div className='row'>
                  <div className='col-8'>
                    <p className='fs-1 m-0'>{activeFoodRequests?.length}</p>
                  </div>
                  <div className='col-4 d-flex justify-content-center align-items-center'>
                    <Link to={isLoggedIn ? "/dashboard" : "/login"} style={{textDecoration:'none'}} className='text-dark'><p className='m-0'><span className='home-hidden'>Explore</span><i class="ms-3 fa-solid fa-chevron-right"></i></p></Link>
                  </div>
                </div>
              </div>
              <hr />
              {/* Metrics two */}
              <div className="rounded-3 p-3 mt-3 mb-5">
                  <p className='m-0 home-card-header fs-4'>Total Active Waste Requests</p>
                  <div className='row'>
                    <div className='col-8'>
                      <p className='fs-1 m-0'>{activeWasteRequests?.length}</p>
                    </div>
                    <div className='col-4 d-flex justify-content-center align-items-center'>
                      <Link to={isLoggedIn ? "/dashboard" : "/login"} style={{textDecoration:'none'}} className='text-dark'><p className='m-0'><span className='home-hidden'>Explore</span><i class="ms-3 fa-solid fa-chevron-right"></i></p></Link>
                    </div>
                  </div>
              </div>
            </div>

            <div className="col-sm-6">
              <img src={kidsSmiling} alt="Kids smiling" className='img-fluid image-home rounded-3' />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <p className='m-0 fs-3 smile-head'>Give Smile</p>
              <p>With every meal served, we're sowing seeds of goodwill, cultivating a world where generosity and sustenance go hand in hand</p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 text-light">
              <div className="smiles-delivered rounded-3 p-3">
                      <div className='d-flex justify-content-center align-items-center'>
                      <span className='fs-1 m-0'><i class="fa-regular fa-face-smile"></i> {totalDelivered}</span> <span className='ms-3 fs-4'>Smiles delivered</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Requests list */}
      <h1>Special area</h1>

      {/* About us */}
      <div className="container" id='about'>
        <div className='mb-3'>
          <p className='m-0 fs-1 sorted-heading'>Repurpose. Reclaim. Recreate.</p>
          <p>At <span>Smile</span>, we're transforming waste into opportunity. Share surplus food or waste and watch it find a new purpose or responsible disposal. Join our community and reshape the future with every action.</p>
        </div>

        <div className='mb-5'>
          <p className='m-0 fs-3 sorted-heading'>Our Mission</p>
          <div className="row mb-4">
            <div className="col-2">
              <div className="container-fluid rounded-circle text-white d-flex justify-content-center align-items-center" style={{height:'2rem',width:'2rem',backgroundColor:'#16a34a'}}>1</div>
            </div>
            <div className="col">
            <span className='fs-4' style={{fontWeight:'500'}}>Revolutionize Waste</span> <br /> Give waste a makeover by connecting it to those who can use it or dispose of it responsibly.
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-2">
              <div className="container-fluid rounded-circle text-white d-flex justify-content-center align-items-center" style={{height:'2rem',width:'2rem',backgroundColor:'#16a34a'}}>2</div>
            </div>
            <div className="col">
            <span className='fs-4' style={{fontWeight:'500'}}>Community Collaboration</span> <br /> Together, we're reshaping waste management, one post at a time.
            </div>
          </div>

          <div className="row">
            <div className="col-2">
              <div className="container-fluid rounded-circle text-white d-flex justify-content-center align-items-center" style={{height:'2rem',width:'2rem',backgroundColor:'#16a34a'}}>3</div>
            </div>
            <div className="col">
            <span className='fs-4' style={{fontWeight:'500'}}>Sustainability Matters</span> <br /> Every action counts toward a greener, more responsible world.
            </div>
          </div>
        </div>

        <div className='mb-5'>
          <p className='m-0 fs-3 sorted-heading'>Your Impact</p>
          <div className="row gap-3 mb-4">
            <div className="col-sm-12 col-md-12 col-lg col-xl p-3 rounded-3 text-light" style={{backgroundColor:'#16a34a'}}>
              <p className='fs-5 m-0' style={{fontWeight:'500'}}>Purposeful Sharing</p>
              Share surplus food or waste and make a difference.
              <p className='fs-5 m-0 mt-3' style={{fontWeight:'500'}}>Community-driven</p>
              Join us in making waste management a collective effort.
              <p className='fs-5 m-0 mt-3' style={{fontWeight:'500'}}>Responsible Change</p>
              Be part of a movement that reshapes waste into opportunity.
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 d-flex flex-column align-items-end justify-content-end">
              <span className='fs-3' style={{fontWeight:'500'}}>Join Smile and let's redefine waste together!</span>
              <Link className='w-100 mt-3' to='/register'><button className='btn border-0 text-light w-100 rounded-3' style={{backgroundColor:'#16a34a',fontWeight:'500'}}>Join Now</button></Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home