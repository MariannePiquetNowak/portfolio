import React from 'react';
import './project.scss';
import { Link } from 'react-router-dom';

import binocular from '../../images/binoculars-leak.svg';
import aqlm from '../../images/aqlm-leak.svg';
import superu from '../../images/super-u.svg';
import greenValley from '../../images/green-valley.svg';

import { Container } from 'react-bootstrap';

import { Carousel } from '3d-react-carousal';

import {useTranslation} from "react-i18next";

const ProjectSection = (props) => {
    const {t} = useTranslation('common');

    
    let slides = [
        <a href="https://www.deviantart.com/sckyzo-pat/gallery/80213653/aqlm-3-5-visuels" target="_blank" rel="noreferrer">
            <img  src={binocular} alt="1" />
            <h6 className="p-1">{t('slide.project_1')}</h6>
        </a>,
        <a href="https://leak.aqlm.fr/" target="_blank" rel="noreferrer">
            <img  src={aqlm} alt="2" /> 
            <h6 className="p-1">{t('slide.project_2')}</h6>
        </a>,
        <a href="https://www.deviantart.com/sckyzo-pat/gallery/79343165/super-u-print" target="_blank" rel="noreferrer">
            <img  src={superu} alt="3" />
            <h6 className="p-1">{t('slide.project_3')}</h6>
        </a>,
        <a href="https://www.facebook.com/people/Green-Valley-Disc-Golf/100067576636965/" target="_blank" rel="noreferrer">
            <img  src={greenValley} alt="4" /> 
            <h6 className="p-1">{t('slide.project_4')}</h6>
        </a>,
          
    ];
    return (
        <Container className="Project text-center" id="Project">
            <div className="header-project mb-5 mt-5 pt-5">
                <h1>{t('slide.title')}</h1>
                <h3>{t('slide.descr')}</h3>
            </div>
            
            <Carousel slides={slides} autoplay={false} />
            <Link to="/projects" className="button-project mb-3" variant="outline-primary">{t('slide.btn')}</Link>
        </Container>
    )
}

export default ProjectSection;

// Version mobile : Retirer le slider et remplacer par une image simple ? 
// Ajouter images de projet dans le slider
// Créer une page Projects, ajouter le chemin au bouton
