import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import logo from "../data/Img/logo.PNG";





function Header() {
  return (
    <div className="topLane mb-5 focus-in-expand">
      <div className="row">
        <div className="col-md-12">
          <Navbar bg="black" variant="dark" expand="lg" sticky="top">
            <Navbar.Brand href="#home">
              <img
                alt="logo"
                src={logo}
                className="d-inline-block align-top logo"
              />{' '}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link className="headLink text-center" href="/">Accueil</Nav.Link>
                <Nav.Link className="headLink text-center" href="/Biographie">À propos</Nav.Link>
                <Nav.Link className="headLink text-center" href="/Contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </div>
  )
}

export default Header;


