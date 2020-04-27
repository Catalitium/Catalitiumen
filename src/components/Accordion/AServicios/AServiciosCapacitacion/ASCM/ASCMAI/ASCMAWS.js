import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import AWSLogo from './../../../../../../assets/img/AWSLogo.png'
import CursosSimples from '../Cursos/CursosSimples'


function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton >
          <Modal.Title id="contained-modal-title-vcenter" >
          <h4>AWS - Machine Learning</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3 ><img src={AWSLogo}  style={{ width: '45rem' }} alt="AWSLogo" ></img></h3>
          <CursosSimples />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function ASCMAIAWS() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button onClick={() => setModalShow(true)} variant="outline-info" className="text-info" >  
        View more
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
  
  export default ASCMAIAWS;