import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import PythonLogo from './../../../../../../assets/img/PythonLogo.jpeg'
import CursosCompletos from '../Cursos/CursosCompletos'


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
          <h4 align="center">Python</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h3 align="center"><img src={PythonLogo} alt="AALogo" ></img></h3>
          <CursosCompletos />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function ASSMPPy() {
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
  
  export default ASSMPPy;