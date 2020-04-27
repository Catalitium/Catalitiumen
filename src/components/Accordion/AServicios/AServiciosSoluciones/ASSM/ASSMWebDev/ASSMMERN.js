import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import MERNLogo from './../../../../../../assets/img/MERNLogo.png'


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
          <h4 align="center">MERN o MEAN</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
          
          <h3 align="center"><img src={MERNLogo} alt="AALogo" ></img></h3>
          It is the acronym for <b>M</b>ongoDb, <b>E</b>xpress.js <b>R</b>eact or <b>A</b> angular and <b>N</b>ode.js
     <p>These components provide a comprehensive framework for producing end-to-end solutions.</p> </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function ASSMWebDevMERN() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button onClick={() => setModalShow(true)} variant="outline-info" className="text-info" >  
          View More
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
  
  export default ASSMWebDevMERN;