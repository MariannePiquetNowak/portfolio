import React from 'react';
import './title.scss';

import { Container, Row, Col } from 'react-bootstrap';


const TitleHeader = () => {
    return (
        <Container className="Title-header d-flex justify-content-center">
            <Row className="row-title text-center">
                <Col className="col-title">
                    <h1>Marianne Piquet-Nowak</h1>
                    <h3>Développeuse Full-Stack</h3>
                    <h3>Graphiste</h3>
                </Col>
            </Row>
        </Container>
    )
}

export default TitleHeader;