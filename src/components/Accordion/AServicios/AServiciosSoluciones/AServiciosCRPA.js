import React from 'react'
import {Row, Col} from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/Card'
import AALogo from '../../../../assets/img/AALogo.png'
import BPLogo from '../../../../assets/img/BPLogo.png'
import UipathLogo from '../../../../assets/img/UipathLogo.png'
import ASSMRPAAA from './ASSM/ASSMRPA/ASSMAA'
import ASSMRPABP from './ASSM/ASSMRPA/ASSMBP'
import ASSMRPAUi from './ASSM/ASSMRPA/ASSMUi'


export const AServiciosCRPA = () => {
    return (
<div>
<br></br><br></br>
<CardDeck className="card border-0">
<Row className="justify-content-md-center" fluid>
<Col sm>
  <Card>
    <Card.Img variant="top" src={AALogo} />
    <Card.Body>
      <Card.Title>AA</Card.Title>
      <Card.Text>
      Leader in the RPA  market and unique with a Cloud platform. 
      It has the most advanced cognitive capabilities to process semi-structured data.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <ASSMRPAAA/>
    </Card.Footer>
  </Card>
  </Col>
  <Col sm> 
  <Card>
    <Card.Img variant="top" src={BPLogo} />
    <Card.Body>
      <Card.Title>Blue Prism</Card.Title>
      <Card.Text>
      Pioneering, innovative and popular in the RPA market. Blue Prism offers one of the most successful digital workforces in the world.  
      </Card.Text>
    </Card.Body>
    <Card.Footer>

    <ASSMRPABP />
    
    </Card.Footer>
  </Card>
</Col>
  
<Col sm> 
  <Card>
    <Card.Img variant="top" src={UipathLogo}  />
    <Card.Body>
      <Card.Title>UiPath</Card.Title>
      <Card.Text>
      Designed for companies of all sizes. Allows you to create, deploy and manage bots from the web with unprecedented ease
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <ASSMRPAUi />
    </Card.Footer>
  </Card>
  </Col>
  </Row>
</CardDeck>
        </div>
    )
}
export default AServiciosCRPA;