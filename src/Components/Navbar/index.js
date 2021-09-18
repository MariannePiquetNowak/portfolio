import React from 'react';
import { Nav, Navbar, Container, Col } from 'react-bootstrap';

import './navbar.scss';


const NavbarPerso = () => {
    return (
        <Navbar expand="lg" bg="transparent" fixed="top" >
            <Container>            
                <Navbar.Toggle aria-controls="basic-navbar-nav"  />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center" >
                    <Nav className="me-auto p-3 justify-content-around nav">
                        <Nav.Link className="nav-item" href="#project">Mes Projets</Nav.Link>
                        <Nav.Link className="nav-item" href="#about">A propos</Nav.Link>
                        <Nav.Link className="nav-item" href="#contact">Contact</Nav.Link> 
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    
    )
}

export default NavbarPerso; 