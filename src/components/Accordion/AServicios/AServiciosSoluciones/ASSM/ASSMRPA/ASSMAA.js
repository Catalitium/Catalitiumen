import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import AALogo from './../../../../../../assets/img/AALogo.png'


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
          <h4 align="center">Automation Anywhere</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3 align="center"><img src={AALogo} alt="AALogo" ></img></h3>
          <p align="center" >
          It is undoubtedly the tool that best integrates ML. Its new Cloud platform is the most innovative in the market. The easiest to learn, since they do not need extensive technical programming knowledge to effectively develop and implement solutions on a large scale.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function ASSMRPAAA() {
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
  
  export default ASSMRPAAA;