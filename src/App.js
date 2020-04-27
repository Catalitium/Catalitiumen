import React, { Component } from 'react';
import logo from './assets/img/logo.png'
import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Inicio } from './components/Inicio';
import { Contact } from './components/Contacto';
import { Servicios } from './components/Servicios';
import Footer from './components/Footer';
import { Layout } from './components/Layout';
import { Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'



class App extends Component {
  render() {

    return (

<Router basename="/Catalitiumen">
<div>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" >
<Navbar.Brand> <img src={logo} alt="catalitium-logo" width={60} height={50}></img></Navbar.Brand>
<Navbar.Brand> <Link to={'/'} style={{ color: '#FFF' }} className="nav-link"> Catalitium </Link> </Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
<Nav className="mr-auto">
  <nav>
    <ul className="navbar-nav ">
      <li><Link to={'/'} className="nav-link"> Home </Link></li>
      <li><Link to={'/contacto'} className="nav-link">Contact</Link></li>
      <li><Link to={'/servicios'} className="nav-link">Services</Link></li>
    </ul>
  </nav>
  </Nav>
  <ul style={{ textDecoration: 'none' }} align="left"><a style={{ textDecoration: 'none', color: 'grey' }} href="https://catalitium.github.io/Catalitiumes/"> Spanish </a></ul>
  </Navbar.Collapse>
  
  </Navbar>


<Layout> 
    <Switch>
              <Route exact path='/' component={Inicio} />
              <Route path='/contacto' component={Contact} />
              <Route path='/servicios' component={Servicios} />
              <Route component = {Inicio}/>
    </Switch>
    <Footer />
    </Layout>
</div>
</Router>
    ) ;
  }
}

export default App;