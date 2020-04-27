import React from 'react';
import { Nav, Navbar } from "react-bootstrap";
import logo from '../assets/img/logo.png'

export const NavigationBar = () => {
    return (

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" >
  <Navbar.Brand> <img src={logo} alt="catalitium-logo" width={60} height={50}></img></Navbar.Brand>
  <Navbar.Brand> Catalitium</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link>Ho</Nav.Link>
      <Nav.Link>Contacto</Nav.Link>
      <Nav.Link>Servicios</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

    )
}

export default NavigationBar;