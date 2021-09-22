import React from 'react';
import { Nav, Navbar, Container, Image } from 'react-bootstrap';
import '../Navbar/navbar.scss';
import logo from '../../images/logo.svg';


import './navbar.scss';

const NavProject = () => {
    return(
         <Navbar expand="lg" fixed="top" className="pt-3 pb-4">
            <Container>            
                <Navbar.Toggle aria-controls="basic-navbar-nav"  />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav className="me-auto pt-3 justify-content-around nav">
                        <Nav.Item className="nav-item">
                            <Image className="nav-img" src={logo} />
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default NavProject;