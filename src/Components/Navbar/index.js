import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { easeOutQuad, Scrollchor } from 'react-scrollchor';


import './navbar.scss';


const NavbarPerso = () => {
    return (
        <Navbar expand="lg" fixed="top" >
            <Container>            
                <Navbar.Toggle aria-controls="basic-navbar-nav"  />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center" >
                    <Nav className="me-auto pt-3 justify-content-around nav">
                        <Nav.Link className="nav-item">
                            <Scrollchor to="#Project" animate={{offset: -200, duration: 1500, easing: easeOutBack}}>Mes Projets</Scrollchor>
                            </Nav.Link>
                        <Nav.Link className="nav-item">
                            <Scrollchor to="#About" animate={{offset: 50, duration: 1500, easing: easeOutBack}}>A propos</Scrollchor>
                        </Nav.Link>
                        <Nav.Link className="nav-item" href="#contact">
                            <Scrollchor to="#Contact" animate={{offset: 50, duration: 1500, easing: easeOutBack}}>Contact</Scrollchor>
                        </Nav.Link> 
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    
    )
}

export default NavbarPerso; 

const easeOutBack = (x, t, b, c, d, s) => {
    if (s == undefined) s = 1.70158;
    return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
}