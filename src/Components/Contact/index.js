import React from 'react';
import './contact.scss';

import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { 
    FaEnvelope,
    FaLinkedinIn,
    FaDeviantart,
    FaBeer
} from 'react-icons/fa';

import { AiFillPhone, AiOutlineInstagram, } from 'react-icons/ai';

import contact from '../../images/contact.svg';

const ContactSection = () => {
    return (
        <Container className="Contact mt-5 mb-5">
        <Row className="row-contact" id="Contact">
            <Col xs={10} md={4} className="contact-infos d-flex flex-column align-items-center">
                <h1>Me Contacter</h1>
                <div className="phone">
                    <AiFillPhone className="phone-icon" />
                    <a href="tel:+330750046765">07.50.04.67.65</a>
                </div>
                <div className="mail">
                    <FaEnvelope className="phone-icon" />
                    <a href="mailto:mariannexpiquet@gmail.com">mariannexpiquet@gmail.com</a>
                </div>
                <div className="social">
                    <a href="https://www.linkedin.com/in/marianne-piquet-nowak/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
                    <a href="https://www.instagram.com/mariannepiquet/" target="_blank" rel="noreferrer"><AiOutlineInstagram /></a>
                    <a href="https://www.deviantart.com/sckyzo-pat" target="_blank" rel="noreferrer"><FaDeviantart /></a>
                </div>
            </Col>
            <Col xs={6} md={4} className="contact-img d-flex justify-content-center p-5">
                <Image src={contact} alt="contact-img"/>
            </Col>
        </Row>
    </Container>
    )
}

export default ContactSection;