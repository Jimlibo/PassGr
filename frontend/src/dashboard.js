import React from "react";
import App from "./App";
// React-Bootstrap Components 
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css'

//import "./NewForm.css";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null
        }    }
    render() {
        return (
        <Container>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Tolls Interoperability</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#action/3.1">Providers</Nav.Link>
                            <Nav.Link href="#action/3.1">Charges</Nav.Link>
                            <Nav.Link href="#action/3.1">Statistics</Nav.Link>
                            <Nav.Link href="#action/3.1">App Info</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
            </Navbar> 
            <Container>
            </Container>
        </Container>
        );
    }
}

export default Dashboard;