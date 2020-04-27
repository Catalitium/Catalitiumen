import React from 'react';
import logo from '../assets/img/logo.png'
import Contacto from '../components/Accordion/AContacto/Contacto'


export const Contact = () => (

    <div align="center" >
            <h1 align="center" > Catalitium</h1>
            <br></br>
            <h2 align="center" > <img src={logo} alt="catalitium-logo" width={100} height={100} ></img></h2>
            <br></br>
            <Contacto /> 
            <br></br><br></br>
    </div>
)

export default Contact;