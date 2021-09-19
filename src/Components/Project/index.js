import React from 'react';
import './project.scss';

import { Container, Button } from 'react-bootstrap';

import { Carousel } from '3d-react-carousal';

let slides = [
    <a href="https://www.google.fr" target="_blank" rel="noreferrer">
        <img  src="https://picsum.photos/800/300/?random" alt="1" />
    </a>,
    <a href="https://www.google.fr" target="_blank" rel="noreferrer">
        <img  src="https://picsum.photos/800/301/?random" alt="2" /> 
    </a>,
    <a href="https://www.google.fr" target="_blank" rel="noreferrer">
        <img  src="https://picsum.photos/800/302/?random" alt="3" />
    </a>,
    <a href="https://www.google.fr" target="_blank" rel="noreferrer">
        <img  src="https://picsum.photos/800/303/?random" alt="4" /> 
    </a>,
    
    
];

const Project = (props) => {
    return (
        <Container className="Project text-center">
            <div className="header-project mb-5">
                <h1>Mes Projets</h1>
                <h3>Voici les différents projets sur lesquels j'ai été amené à travailler</h3>
            </div>
            
            <Carousel slides={slides} autoplay={false} />
            <Button onClick={props.projectPage} className="button-project mb-3" variant="outline-primary">Voir tous les projets</Button>
        </Container>
    )
}

export default Project;

// Version mobile : Retirer le slider et remplacer par une image simple ? 
// Ajouter images de projet dans le slider
// Créer une page Projects, ajouter le chemin au bouton
