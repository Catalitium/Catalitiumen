import React from 'react'
import {Row, Col} from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/Card'
import ReactLogo from '../../../../assets/img/ReactLogo.png'
import MernLogo from '../../../../assets/img/MERNLogo.png'
import AngularLogo from '../../../../assets/img/AngularLogo.png'
import ASSMWebDevAngular from './ASCM/ASCMAppDev/ASSMAngular' 
import ASSMWebDevReact from './ASCM/ASCMAppDev/ASSMReact'
import ASSMWebDevMERN from './ASCM/ASCMAppDev/ASSMMERN'



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
      We offer a short induction to Angular to familiarize you with best practices for front-end design.
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
      We offer different React courses, depending on your preference. You will be able to build attractive applications using React. </Card.Text>
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

      Essential course if you want to become a full-stack developer or build end-to-end solutions. 
      Synthesized in this course is the indispensable to build solid solutions. 
      
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