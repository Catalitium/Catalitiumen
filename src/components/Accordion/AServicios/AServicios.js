import React from 'react';
import { Tab, Row, Col, Tabs } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import AServiciosCRPA from './AServiciosSoluciones/AServiciosCRPA';
import AServiciosCAppDev from './AServiciosSoluciones/AServiciosCAppDev';
import AServiciosCProgramacion from './AServiciosSoluciones/AServiciosCProgramacion';
import AServiciosCCAI from './AServiciosCapacitacion/AServiciosCCAI';
import AServiciosCCRPA from './AServiciosCapacitacion/AServiciosCCRPA';
import AServiciosCCAppDev from './AServiciosCapacitacion/AServiciosCCAppDev';
import AServiciosCCProgramacion from './AServiciosCapacitacion/AServiciosCCProgramacion';


export const AServicios = () => {
    return (
<div>
<Tab.Container id="list-group-tabs-example" defaultActiveKey="#solutions">
  <Row className="justify-content-md-center"> 
  <Col className="justify-content-md-center"> 
      <ListGroup align="center" >
        <ListGroup.Item action href="#solutions" >
          Solutions
        </ListGroup.Item>
        <ListGroup.Item action href="#trainings" >
          Trainings
        </ListGroup.Item>
      </ListGroup>
      </Col> 
      </Row>
      <hr></hr>


  <Row >
      <Tab.Content >
      <Tab.Pane eventKey="#solutions" title="solutions" >
            <Tabs defaultActiveKey="RPA" id="noanim-tab-example" className="justify-content-md-center">   
            <Tab eventKey="AppDev" title="Apps">
                  <AServiciosCAppDev />
            </Tab>
            <Tab eventKey="RPA" title="RPA">
                  <AServiciosCRPA />
            </Tab>
            <Tab eventKey="Programacion" title="Programming">
                  <AServiciosCProgramacion />
            </Tab>
            </Tabs>
        </Tab.Pane>
        <Tab.Pane eventKey="#trainings" title="#trainings">
        <Tabs defaultActiveKey="Apps" transition={false} id="noanim-tab-example">
            <Tab eventKey="Apps" title="Apps">
              <AServiciosCCAppDev />
            </Tab>
            <Tab eventKey="AI" title="AI" >
            <AServiciosCCAI />
            </Tab>
            <Tab eventKey="RPA" title="RPA">
            <AServiciosCCRPA/>
            </Tab>
            <Tab eventKey="Programacion" title="Programming">
            <AServiciosCCProgramacion/>
            </Tab>
            </Tabs>
        </Tab.Pane>
      </Tab.Content>
  </Row>

</Tab.Container>
</div>
    )
}

export default AServicios;