import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';


const NavbarPerso = () => {
    return (
        <Navbar bg="light" expand="lg" bg="transparent" fixed="top">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav className="me-auto">
                        <Nav.Link className="p-5 nav-item" href="#project">Mes Projets</Nav.Link>
                        <Nav.Link className="p-5 nav-item" href="#about">A propos</Nav.Link>
                        <Nav.Link className="p-5 nav-item" href="#contact">Contactez-moi</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    
    )
}

export default NavbarPerso; 