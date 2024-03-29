import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Scrollchor } from 'react-scrollchor';
import {useTranslation} from "react-i18next";

import './navbar.scss';


const NavbarHome = () => {
    const {t, i18n} = useTranslation('common');
    return (
        <Navbar expand="lg" fixed="top">
            <Container>            
                <Navbar.Toggle aria-controls="basic-navbar-nav"  />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav className="me-auto pt-3 justify-content-around nav">
                        <Nav.Item className="nav-item">
                            <Scrollchor to="#Project" animate={{offset: -200, duration: 1500, easing: easeOutBack}}>{t('navbar.projects')}</Scrollchor>
                        </Nav.Item>
                        <Nav.Item className="nav-item">
                            <Scrollchor to="#About" animate={{offset: -200, duration: 1500, easing: easeOutBack}}>{t('navbar.about')}</Scrollchor>
                        </Nav.Item>
                        <Nav.Item className="nav-item" href="#contact">
                            <Scrollchor to="#Contact" animate={{offset: -200, duration: 1500, easing: easeOutBack}}>{t('navbar.contact')}</Scrollchor>
                        </Nav.Item> 
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    
    )
}

export default NavbarHome; 

const easeOutBack = (x, t, b, c, d, s) => {
    if (s === undefined) s = 1.70158;
    return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
}