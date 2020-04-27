import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import DBLogo from '../../../../../../assets/img/DBLogo.png'


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
          <h4 align="center">Databases</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h3 align="center"><img src={DBLogo} alt="AALogo" ></img></h3>
        <h6 align="center" > <b> SQL - NoSQL - MongoDB  </b></h6>
          <p>Relational databases (SQL) are the most used, there are a number of disadvantages, because they are very rigid, preventing a constant growth of the files. 
            In the case of NoSQL they are perhaps the most used alternative in the near future.
          There are still experts who are reluctant to use them, mainly because they don't know all the possibilities they can offer. </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function ASSMPDB() {
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
  
  export default ASSMPDB;