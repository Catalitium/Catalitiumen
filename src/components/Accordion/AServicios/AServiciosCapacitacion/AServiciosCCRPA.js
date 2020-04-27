import React from 'react'
import {Row, Col} from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/Card'
import AALogo from '../../../../assets/img/AALogo.png'
import BPLogo from '../../../../assets/img/BPLogo.png'
import UipathLogo from '../../../../assets/img/UipathLogo.png'
import ASCMAA from './ASCM/ASCMRPA/ASCMAA'
import ASCMBP from './ASCM/ASCMRPA/ASCMBP'
import ASCMUI from './ASCM/ASCMRPA/ASCMUi'


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
      <br></br>
      <Card.Title>AA</Card.Title>
      <Card.Text>
      We have worked with multinationals to train their staff around the world to optimise their workforce using Automation Anywhere. We offer introductory and advanced courses
      so that your staff can develop robust solutions after completing the course
      </Card.Text>
    </Card.Body>
    <Card.Footer>

    <ASCMAA/>

    </Card.Footer>
  </Card>
  </Col>
  
  <Col sm> 
  <Card>
    <Card.Img variant="top" src={BPLogo} />
    <Card.Body>
      <Card.Title>BluePrism</Card.Title>
      <Card.Text>
      We can train your staff and positioning them as experts so that you have a competitive advantage over other automation departments
      </Card.Text>
    </Card.Body>
    <Card.Footer>

    <ASCMBP />
    
    </Card.Footer>
  </Card>
  </Col>

  <Col sm> 
  <Card>
    <Card.Img variant="top" src={UipathLogo}  />
    <Card.Body>

      <Card.Title>UiPath</Card.Title>
      <Card.Text>
      Enrolling in our Uipath course will  enable you to use the most widely used tool in the RPA market to build your own solutions without relying on overpriced consultants.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <ASCMUI />
    </Card.Footer>
  </Card>
  </Col>
  </Row>
</CardDeck>
        </div>
    )
}
export default AServiciosCRPA;