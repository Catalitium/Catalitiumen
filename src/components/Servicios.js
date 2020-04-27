import React from 'react';
import logo from '../assets/img/logo.png'
import AServicios from './Accordion/AServicios/AServicios'


export const Servicios = () => (

    <div align="center" >
            <h1 align="center" > Catalitium</h1>
            <br></br>
            <h2 align="center" > <img src={logo} alt="catalitium-logo" width={100} height={100} ></img></h2>
            <br></br>
            <h4 align="center" > <AServicios  fluid/>  </h4>
            <br></br><br></br>
    </div>
)

export default Servicios;