import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import ReactLogo from './../../../../../../assets/img/ReactLogo.png'


function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" align="center" >
          <h4 align="center">React</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
          
          <h3 align="center"><img src={ReactLogo} alt="AALogo" ></img></h3>
          React es la principal forma de construir grandes y rápidas aplicaciones. Potenciando: Airbnb, Uber, Facebook, Netflix, Instagram, Twitter entre otras.
          </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function ASSMWebDevReact() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button onClick={() => setModalShow(true)} variant="outline-info" className="text-info" >  
          Ver mas
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
  
  export default ASSMWebDevReact;