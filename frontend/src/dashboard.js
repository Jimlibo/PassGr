import React from "react";
import App from "./App";
// React-Bootstrap Components 
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css'

// Impor css module
import styles from './App.css'
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null
        }    }
    render() {
        return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Tolls Interoperability</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#providers">Providers</Nav.Link>
                            <Nav.Link href="#charges">Charges</Nav.Link>
                            <Nav.Link href="#statistics">Statistics</Nav.Link>
                            <Nav.Link href="#appinfo">App Info</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
            </Navbar> 
            <Container className="cl1">
                
                <Row>
                    <Image className="img1"
                           src="https://media.fugro.com/media/images/default-source/services/highways.jpg?sfvrsn=79a53b1a_19" 
                    ></Image>
                </Row>
                <Row>
                    <p> 
                    </p>
                </Row>
            </Container>
        </>
        );
    }
}

export default Dashboard;