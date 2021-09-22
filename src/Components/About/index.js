import React from 'react';
import './about.scss';

import { Container, Row, Col, Image, Button } from 'react-bootstrap';

import avatar from '../../images/avatar-web.svg';
import pdf from "../../pdf/cv.pdf";

const AboutSection = ({open}) => {

    const openCv = () => {
        window.open(pdf)
    }

    return (
        <Container className="About mt-5 mb-5 pt-5">
            <Row className="row-about" id="About">
                <Col xs={6} md={4} className="about-img d-flex justify-content-center p-5">
                    <Image src={avatar} alt="avatar"/>
                </Col>
                <Col xs={6} md={4} className="about-infos d-flex flex-column align-items-center">
                    <h1>A propos</h1>
                    <p>Développeuse web issus d’une reconversion professionnelle, je suis passionnée de code et de graphisme.</p>
                    <Button onClick={openCv} className="button-about" variant="outline-primary">Télécharger mon CV</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutSection;

// Créer une page pour télécharger le CV : se renseigner sur les PDF