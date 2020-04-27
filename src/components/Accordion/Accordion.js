import React from 'react';
import { Accordion, Card, Container } from 'react-bootstrap';
import AServicios from './AServicios/AServicios'
import Contacto from './AContacto/Contacto'
import Button from 'react-bootstrap/Button'

export const AccordionA = () => {
  return (

    <div>

<Container fluid> 
<Accordion defaultActiveKey="1" >
<Card>
    <Accordion.Toggle as={Button} variant="link" eventKey="0">
      Experience
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0" >   
      <Card.Body className='card-text text-seconday' >
        <div align="left" >    
          Our extensive experience working with clients and entrepreneurs, around the world, has shown us that everyone can benefit from the technologies available, regardless of their business.
          Our team of engineers, programmers and consultants have helped multinationals and small businesses improve their operations,
          implementing non-invasive, user-friendly technology.
         <br></br><br></br>  
        </div>     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle align="center" as={Button} variant="link" eventKey="1">
      Services
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body align="center"> <AServicios/>  </Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Accordion.Toggle align="center" as={Button} variant="link" eventKey="2">
      Contact
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="2">
      <Card.Body> 
        <Contacto />
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
</Container>
    </div>
  )
}

export default AccordionA;