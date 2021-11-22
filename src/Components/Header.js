import React from 'react'
import { Navbar, Nav} from 'react-bootstrap';






function Header() {
  return (


    <div>
      <div className="row">
        <div className="col-md-12">
          <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Accueil</Nav.Link>
                <Nav.Link href="/Biographie">Biographie</Nav.Link>
                <Nav.Link href="/Contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          
        </div>
      </div>
    </div>
  )
}


export default Header;


