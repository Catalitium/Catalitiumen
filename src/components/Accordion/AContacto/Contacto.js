import React from 'react'
import {Row, Col} from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/Card'
import TwitterLogo from '../../../assets/img/TwitterLogo.png'
import InstagramLogo from '../../../assets/img/InstagramLogo.png'
import LinkedinLogo from '../../../assets/img/LinkedinLogo.png'
import FacebookLogo from '../../../assets/img/FacebookLogo.png'



export const Contacto = () => {
    return (
<div >
<CardDeck className="card border-0">
<Row className="justify-content-md-center" fluid>
  <Col sm>
        <Card >
            <div align="center">
                <Card.Img variant="top" src={FacebookLogo} style={{ width: '6rem' }} align="middle" />
            </div>
            <Card.Body>
            <Card.Title className="center" align="middle" >Facebook</Card.Title>
                <Card.Text>
                    Join us in Facebook.
                </Card.Text>
            </Card.Body>
        <Card.Footer>
            <div align="center">
                <a href="https://www.facebook.com/Catalitium" target="_blank" rel="noopener noreferrer" className='btn btn-outline-info'>
                    View
                </a> 
            </div>
        </Card.Footer>
        </Card>
  </Col>
  <Col sm> 
        <Card >
            <div align="center"> 
                <Card.Img variant="top" src={InstagramLogo} style={{ width: '6rem' }}  />
            </div>
            <Card.Body>
            <Card.Title align="middle" >Instagram</Card.Title>
                <Card.Text>
                Follow us on Instagram
                </Card.Text>
            </Card.Body>
        <Card.Footer>
        <div align="center"> 
            <a href='https://www.instagram.com/catalitiumen/' rel="noopener noreferrer" target="_blank" className='btn btn-outline-info'>
            View
            </a> 
        </div>
        </Card.Footer>
        </Card>
    
  </Col>
  
  <Col sm> 

        <Card>
        <div align="center"> 
            <Card.Img variant="top" src={TwitterLogo} style={{ width: '6rem' }} />
        </div>
        <Card.Body>
        <Card.Title align="middle" > Twitter</Card.Title>
            <Card.Text>
            Follow us on twitter
            </Card.Text>
        </Card.Body>
        <Card.Footer>
        <div align="center" >  
            <a href="https://twitter.com/catalitium" target="_blank" rel="noopener noreferrer" className='btn btn-outline-info'>
            Follow
            </a> 
        </div>
        </Card.Footer>
        </Card>

  </Col>
  <Col sm> 
            <Card>
            <div align="center"> 
                <Card.Img variant="top" src={LinkedinLogo} style={{ width: '6rem' }} />
            </div>
            <Card.Body>
            <Card.Title align="middle" > Linkedin</Card.Title>
            <Card.Text>
            Join our Linkedin community
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <div align="center" >  
            <a href="https://www.linkedin.com/in/catalitium-es-3886941a6/" target="_blank" rel="noopener noreferrer" className='btn btn-outline-info'>
            View
            </a> 
            </div>
            </Card.Footer>
            </Card>
  </Col>
  </Row>
</CardDeck>
</div>
    )
}
export default Contacto;