import React from 'react';
import { Nav, Navbar, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.scss';
import logo from '../../images/logo.svg';


import './navbar.scss';

const NavProject = (props) => {
    const url = window.location.host
    const home = url 
    
    return(
         <Navbar expand="lg" fixed="top" className="pt-3 pb-3">
            <Container className="nav-container-project">            
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="nav-project justify-content-start">
                    <Nav className="me-auto justify-content-start nav">
                        <Link to="/" className="nav-item">
                            <Image className="nav-img" src={logo} />
                            <span style={{color: '#27D7B7', fontWeight: "500"}}>Retour</span>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default NavProject;