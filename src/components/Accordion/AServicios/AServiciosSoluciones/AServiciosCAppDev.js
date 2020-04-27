import React from 'react'
import {Row, Col} from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/Card'
import ReactLogo from '../../../../assets/img/ReactLogo.png'
import MernLogo from '../../../../assets/img/MERNLogo.png'
import AngularLogo from '../../../../assets/img/AngularLogo.png'
import ASSMWebDevAngular from './ASSM/ASSMWebDev/ASSMAngular' 
import ASSMWebDevReact from './ASSM/ASSMWebDev/ASSMReact'
import ASSMWebDevMERN from './ASSM/ASSMWebDev/ASSMMERN'



export const AServiciosCAppDev = () => {
    return (
<div>
<br></br><br></br>
<CardDeck className="card border-0">
<Row className="justify-content-md-center" fluid>
  <Col sm>
  <Card>
    <Card.Img variant="top" src={AngularLogo} />
    <Card.Body>
      <Card.Title>Angular</Card.Title>
      <Card.Text>
      Powered by Google, Framework for developing excellent applications. 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
        <ASSMWebDevAngular/>
    </Card.Footer>
  </Card>
  </Col>
 <Col sm>
  <Card>
    <Card.Img variant="top" src={ReactLogo}  />
    <Card.Body>
      <br></br>
      <Card.Title>React</Card.Title>
      <Card.Text>
      Created by Facebook, it is an easy to use library for developing web and desktop applications.
     </Card.Text>
    </Card.Body>
    <Card.Footer>
  <ASSMWebDevReact />
    </Card.Footer>
  </Card>

  </Col>
  
  <Col sm> 

  <Card>
    <Card.Img variant="top" src={MernLogo}  />
    <Card.Body>
      <Card.Title>MERN/MEAN</Card.Title>
      <Card.Text>
      MEAN or MERN is the current trend to build end-to-end solutions. 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <ASSMWebDevMERN />
    </Card.Footer>
  </Card>
  </Col>
  </Row>
</CardDeck>
</div>
    )
}

export default AServiciosCAppDev;