import React from 'react'
import {Row, Col} from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/Card'
import JSLogo from '../../../../assets/img/JSLogo.png'
import PythonLogo from '../../../../assets/img/PythonLogo.jpeg'
import DBLogo from '../../../../assets/img/DBLogo.png'
import ASSMPDB from './ASSM/ASSMProgramacion/ASSMPDB'
import ASSMPJS from './ASSM/ASSMProgramacion/ASSMPJS'
import ASSMPPy from './ASSM/ASSMProgramacion/ASSMPPy'


export const AServiciosCProgramacion = () => {
    return (
<div >
<br></br><br></br>
<CardDeck className="card border-0">
<Row className="justify-content-md-center" fluid>
<Col sm>
<Card>
    <Card.Img variant="top" src={JSLogo} />
    <Card.Body>
      <Card.Title>JavaScript</Card.Title>
      <Card.Text>
      Indispensable for the development of web pages and web applications. The great advantage lies in the extensive community, libraries and frameworks built on this language.
    </Card.Text>
    </Card.Body>
    <Card.Footer>
        <ASSMPJS/>
    </Card.Footer>
  </Card>
</Col>

<Col sm> 
  <Card>
    <Card.Img variant="top" src={PythonLogo}  />
    <Card.Body>
      <Card.Title>Python</Card.Title>
      <Card.Text>
      Guido van Rossum devised the Python language in the late 1980s and began implementing it in December 1989. It was an advanced language for the hardware of the time, but is currently the fastest growing language because of its ease of understanding.          
      </Card.Text>
    </Card.Body>
    <Card.Footer>
        <ASSMPPy />
    </Card.Footer>
  </Card>
</Col>
  
<Col sm> 
  <Card>
    <Card.Img variant="top" src={DBLogo}  />
    <Card.Body>
      <Card.Title>Databases</Card.Title>
      <Card.Text>
      When a database is properly managed, the efficiency of its work is increased in a faster and more agile way, because the work is simplified. 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
        <ASSMPDB />
    </Card.Footer>
  </Card>
  </Col>
  </Row>
</CardDeck>
</div>
    )
}

export default AServiciosCProgramacion;