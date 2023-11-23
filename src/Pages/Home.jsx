import React from 'react'
import Navigation from '../Components/Navigation'
import Footer from '../Components/Footer'
import './CSS/home.css'
import SortedReqList from '../Components/SortedReqList'
import kidsSmiling from '../Assets/kids-smiling.jpg'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <Navigation />

      {/* Requests metrics */}
      <div className='home pb-2'>
        <div className="container d-flex flex-column justify-content-center align-items-center pt-5 mb-5">
          <div className="row">
            
            <div className="col-sm-6">
              {/* Metrics one */}
              <div className="rounded-3 p-3">
                <p className='m-0 home-card-header fs-4'>Total Active Food Requests</p>
                <div className='row'>
                  <div className='col-8'>
                    <p className='fs-1 m-0'>1265</p>
                  </div>
                  <div className='col-4 d-flex justify-content-center align-items-center'>
                    <p className='m-0'><span className='home-hidden'>Explore</span><i class="ms-3 fa-solid fa-chevron-right"></i></p>
                  </div>
                </div>
              </div>
              <hr />
              {/* Metrics two */}
              <div className="rounded-3 p-3 mt-3 mb-5">
                  <p className='m-0 home-card-header fs-4'>Total Active Waste Requests</p>
                  <div className='row'>
                    <div className='col-8'>
                      <p className='fs-1 m-0'>154</p>
                    </div>
                    <div className='col-4 d-flex justify-content-center align-items-center'>
                      <p className='m-0'><span className='home-hidden'>Explore</span><i class="ms-3 fa-solid fa-chevron-right"></i></p>
                    </div>
                  </div>
              </div>
            </div>

            <div className="col-sm-6">
              <img src={kidsSmiling} alt="Kids smiling" className='img-fluid rounded-3' />
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
                      <span className='fs-1 m-0'><i class="fa-regular fa-face-smile"></i> 12653</span> <span className='ms-3 fs-4'>Meals delivered</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Requests list */}
      <SortedReqList />

      <div className="container mb-5">
        <p className='m-0 fs-1 sorted-heading'>Ready to make a difference? Explore your dedicated dashboard here.</p>
        <Link to={'/dashboard'}><button className='btn btn-success goto-dashboard'>Go to dashboard</button></Link>
      </div>

      <Footer />
    </>
  )
}

export default Home