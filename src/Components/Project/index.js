 import React from 'react';
import './project.scss';
import { Row, Col, Image } from "react-bootstrap";
import {useTranslation} from "react-i18next";

const Project = (props) => {
    const {t, i18n} = useTranslation('common');
    document.title = t('title');
    return (
        <Row className={props.reverse} id="row-project-list">
            <Col lg={4} className="img-project">
                <Image src={props.src} />
            </Col>
            <Col lg={8} className="info-project">
                <Col lg={10} className="info">
                    <h3 className="pt-3 pb-2">{props.title}</h3>
                    <p>{props.text}</p>
                    <h6>{t('project.tech')}</h6>
                    <span>{props.techno}</span>
                </Col>
                <Col className="btn-project">
                    <a href={props.link} target="_blank" rel="noreferrer" variant="transparent">{props.linkName}</a>
                </Col>
            </Col> 
        </Row>
    )
}

export default Project;