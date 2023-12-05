import React, { useEffect, useState } from 'react'
import './CSS/navbar.css'
import { Navbar, Container, NavDropdown, Nav, Offcanvas, Button } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'

function Navigation() {
  const screen = useMediaQuery({maxWidth: 768})
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    if (sessionStorage.getItem("existingUser")) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [])
  return (
    <div>
        {['lg'].map((expand) => (
          <Navbar key={expand} expand={expand} className="navbar-custom shadow bg-white pt-3 pb-3">
            <Container fluid>
              <Navbar.Brand href="#">
                <p className='fs-3 m-0' style={{fontWeight:"600"}}>Smile</p>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Menu
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1" className='active'>Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <NavDropdown
                      title="How it Works"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                      className=
                      {
                        screen ?
                        "mb-3" :
                        ""
                      }
                    >
                      <NavDropdown.Item className='nav-dropdown'>
                        <Link className='nav-link' to={'/registration-and-listing'}>Registration & Listing</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item className='nav-dropdown'>
                        <Link className='nav-link'>Highlighting Impact & Stories</Link>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                    {
                      isLoggedIn ? 
                      <Link to={'/dashboard'}><button className='btn btn-success goto-dashboard'>Go to dashboard</button></Link> :
                      <>
                        <Link to={'/register'}><Button variant="btn border border-dark border-1 rounded-3 me-2" style={{fontWeight:"500"}} className={!screen ?"mb-2" :""}>Sign Up</Button></Link>
                        <Link to={'/login'}><Button variant="btn border border-dark border-1 rounded-3" style={{fontWeight:"500"}}>Log In</Button></Link>
                      </>
                    }
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
    </div>
  )
}

export default Navigation