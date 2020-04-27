import React from 'react'
import {Row, Col} from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/Card'
import JSLogo from '../../../../assets/img/JSLogo.png'
import PythonLogo from '../../../../assets/img/PythonLogo.jpeg'
import DBLogo from '../../../../assets/img/DBLogo.png'
import ASSMPJS from './ASCM/ASCMProgramacion/ASSMPJS'
import ASSMPPy from './ASCM/ASCMProgramacion/ASSMPPy'
import ASSMPDB from './ASCM/ASCMProgramacion/ASSMPDB'


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
      We offer courses for beginners and experts in JavaScript where 
      we will convey the good practices and methodologies used for effective script development using JavaScript
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
      Ofrecemos desde cursos introductorios para programar con Python hasta niveles expertos. Integrando las librerias mas populares dependiendo de su necesidad y requerimiento                               
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
      <Card.Title>Base de Datos</Card.Title>
      <Card.Text>
      Nuestros servicios de capacitación de base de datos resultan una ventaja competitiva , siendo una herramienta primordial al momento de tomar decisiones. 
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