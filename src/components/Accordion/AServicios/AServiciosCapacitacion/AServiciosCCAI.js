import React from 'react'
import {Row, Col} from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/Card'
import TFLogo from '../../../../assets/img/TFLogo.png'
import AWSLogo from '../../../../assets/img/AWSLogo.png'
import PythonLogo from '../../../../assets/img/PythonLogo.jpeg'
import ASCMAITF from './ASCM/ASCMAI/ASCMTF'
import ASCMPyAI from './ASCM/ASCMAI/ASCMPyAI'
import ASCMAIAWS from './ASCM/ASCMAI/ASCMAWS'




export const AServiciosCAI = () => {
    return (

<div >
<br></br><br></br>
<CardDeck className="card border-0">
<Row className="justify-content-md-center" fluid>
  <Col sm>
  <Card>
    <Card.Img variant="top" src={PythonLogo} fluid  />
    <Card.Body>
      <Card.Title>Python</Card.Title>
      <Card.Text>
      Our Python training services are customized depending on the level of knowledge of your staff.
     From  Python introductory courses to expert levels. We can integrate the most popular libraries depending on your needs and requirements.                          
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <ASCMPyAI/>
    </Card.Footer>
  </Card>
  </Col>
  
  <Col sm> 
  <Card>
    <Card.Img variant="top" src={TFLogo} fluid />
    <Card.Body>
    <br></br>
      <Card.Title>TensorFlow</Card.Title>
      <br></br><br></br>
      <Card.Text>
      Our TensorFlow course will give you the foundation to evolve your analytical skills and enter the world of Deep Learning.
      After our training you will be able to develop unique models suited to your business. </ Card.Text>
    </Card.Body>
    <Card.Footer>
      <ASCMAITF/>
    </Card.Footer>
  </Card>
  </Col>
  
  <Col sm> 
  <Card>
    <Card.Img variant="top" src={AWSLogo} fluid  />
    <Card.Body>
    <br></br>
      <Card.Title>AWS - Machine Learning </Card.Title>
      <br></br>
      <Card.Text>
      AWS offers the most comprehensive set of tools for your company to create effective self-learning solutions faster</Card.Text>
    </Card.Body>
    <Card.Footer>
        <ASCMAIAWS />
    </Card.Footer>
  </Card>
  </Col>
  </Row>
</CardDeck>

</div>
  )
}

export default AServiciosCAI;