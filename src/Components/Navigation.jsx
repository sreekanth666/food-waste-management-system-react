import React from 'react'
import './CSS/navbar.css'
import { Navbar, Container, NavDropdown, Form, Nav, Offcanvas, Button } from 'react-bootstrap'

function Navigation() {
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
                    <Nav.Link href="#action2">About</Nav.Link>
                    <NavDropdown
                      title="How it Works"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="#action3">
                        Registration & Listing
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Collection/Delivery & Feedback
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Highlighting Impact & Stories
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                    <Nav.Link><Button variant="btn border border-dark border-1 rounded-4 me-2 sign-up" style={{fontWeight:"500"}}>Sign Up</Button></Nav.Link>
                    <Nav.Link><Button variant="btn border border-dark border-1 rounded-4" style={{fontWeight:"500"}}>Log In</Button></Nav.Link>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
    </div>
  )
}

export default Navigation