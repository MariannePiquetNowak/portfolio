import React from 'react';
import './project.scss';
import { Link } from 'react-router-dom';

import binocular from '../../images/binoculars-leak.svg';
import aqlm from '../../images/aqlm-leak.png';
import superu from '../../images/super-u.png';

import { Container, Button } from 'react-bootstrap';

import { Carousel } from '3d-react-carousal';

let slides = [
    <a href="https://www.deviantart.com/sckyzo-pat/gallery/80213653/aqlm-3-5-visuels" target="_blank" rel="noreferrer">
        <img  src={binocular} alt="1" />
        <h6 className="p-1">Visuels AQLM-Leak</h6>
    </a>,
    <a href="https://leak.aqlm.fr/" target="_blank" rel="noreferrer">
        <img  src={aqlm} alt="2" /> 
        <h6 className="p-1">Help-Center AQLM-Leak</h6>
    </a>,
    <a href="https://www.deviantart.com/sckyzo-pat/gallery/79343165/super-u-print" target="_blank" rel="noreferrer">
        <img  src={superu} alt="3" />
        <h6 className="p-1">Print Super U</h6>
    </a>,
    <a href="https://www.deviantart.com/sckyzo-pat/gallery/79343165/super-u-print" target="_blank" rel="noreferrer">
        <img  src="https://picsum.photos/800/303/?random" alt="4" /> 
        <h6 className="p-1">Print Super U</h6>
    </a>,
    
    
];

const ProjectSection = (props) => {
    return (
        <Container className="Project text-center" id="Project">
            <div className="header-project mb-5 mt-5 pt-5">
                <h1>Mes Projets</h1>
                <h3>Voici les différents projets sur lesquels j'ai été amené à travailler</h3>
            </div>
            
            <Carousel slides={slides} autoplay={false} />
            <Link to="/projects" className="button-project mb-3" variant="outline-primary">Voir tous les projets</Link>
        </Container>
    )
}

export default ProjectSection;

// Version mobile : Retirer le slider et remplacer par une image simple ? 
// Ajouter images de projet dans le slider
// Créer une page Projects, ajouter le chemin au bouton
