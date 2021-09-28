import React from 'react';
import './App.scss';
import '../src/Components/Project/project.scss';
import Layout from './Components/Layout/layout';
import Wallpaper from './Components/Wallpaper';
import wallpaper from "./images/header-fusion.svg";
import Project from "./Components/Project";
import ScrollButton from './Components/ScrollTop';


// Images 
import binocular from './images/binoculars-leak.svg';
import aqlm from './images/aqlm-leak.svg';
import superu from './images/super-u.svg';
import greenValley from './images/green-valley.svg';
import cvWeb from './images/cv.svg'

import { Container } from "react-bootstrap";

const reverse = "flex-row-reverse";

const Projects = () => {
    return (
        <div className="App">
            <Layout>
                <Wallpaper src={wallpaper}/>
                <Container className="Project-list">
                    <Project 
                        src={binocular } 
                        reverse={reverse}
                        title="Visuels AQLM 3.5"
                        text="J'ai été amené à réaliser les visuels du site leak.aqlm.fr de la Start-Up AQLM 3.5. Pour cela, j'ai utilisé le logiciel Adobe Illustrator que j'utilise en autodidacte depuis 3 ans. Ils ont été crée entièrement vectoriel."
                        link="https://www.deviantart.com/sckyzo-pat/gallery/80213653/aqlm-3-5-visuels"
                        linkName="Accéder aux projets"
                        techno="Adobe Illustrator"
                    />
                    <Project 
                        src={aqlm} 
                        reverse={null}
                        title="Help-Center AQLM 3.5"
                        text="AQLM 3.5 est une Start-Up proposant des services de référencement, développement web et cybersécurité. J'ai eu le plaisir de réaliser leur page Help-Center de leur site leak.aqlm.fr"
                        link="https://leak.aqlm.fr"
                        linkName="Accéder au site"
                        techno="Symfony, Bootstrap, Javascript"
                    />
                    <Project 
                        src={greenValley} 
                        reverse={reverse}
                        title="Logo + Visuels Green Valley"
                        text="Green Valley Disc Golf est une association de Disc Golf situé en Haute-Savoie. L'association m'a contacté pour réaliser leur logo. Contente de mon travail, j'ai créer d'autres visuels en leur nom. Les visuels sont visibles sur leur Page Facebook"
                        link="https://www.facebook.com/people/Green-Valley-Disc-Golf/100067576636965/"
                        linkName="Accéder à la page"
                        techno="Adobe Illustrator, Adobe Photoshop"
                    />
                    <Project 
                        src={superu} 
                        reverse={null}
                        title="Print Super U"
                        text="2/3 Boucher de laboratoire, 1/3 Graphist Marketing. 6 mois durant lesquels j'ai réalisé quelques tracts et logo en format PDF pour le Super U du pays de L'Arbresle."
                        link="https://www.deviantart.com/sckyzo-pat/gallery/79343165/super-u-print"
                        linkName="Accéder aux projets"
                        techno="Adobe Illustrator, Adobe InDesign"
                    />
                    <Project 
                        src={cvWeb} 
                        reverse={reverse}
                        title="Single Page CV"
                        text="Une petite Single Page de mon Curriculum Vitae créer en React.sj, framework Javascript, afin d'apprendre celui-ci en autodidacte. Elle n'est plus mise à jour et n'est pas responsive."
                        link="https://curriculumvitae-mariannepn.yj.fr"
                        linkName="Accéder au site"
                        techno="Javascript, React.js, Redux"
                    />
                </Container>
            </Layout>
            <ScrollButton />
        </div>
    )
}

export default Projects;