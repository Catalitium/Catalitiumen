import React from 'react';
import { Container } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';

export const Layout = (props) => (

<Jumbotron fluid style={{backgroundColor: '#eeeeee'}}>
<Container>
        <p>{props.children}</p>
</Container>
</Jumbotron>
)

export default Layout;