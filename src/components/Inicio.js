import React from 'react';
import About from './About/About' 
import AccordionA from './Accordion/Accordion';
import logo from '../assets/img/logo.png'


export const Inicio = () => (

    <div align="center" >
            <h1 align="center" > Catalitium</h1>
            <br></br>
            <h2 align="center" > <img src={logo} alt="catalitium-logo" width={100} height={100} ></img></h2>
            <br></br>
            <h4 align="center" > Empowering individuals and organizations with technology for the efficient use of their resources </h4>
            <br></br><br></br>
        <div>
            <About />
            <AccordionA />
            <br>
            </br>
        </div>
    </div>
)
