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

const Project = () => {
    return (
        <Container className="Project">
            <h1>Mes Projets</h1>
            <span>Voici les différents projets sur lesquels j'ai été amené à travailler</span>
            <Carousel slides={slides} autoplay={false} />
        </Container>
    )
}

export default Project;