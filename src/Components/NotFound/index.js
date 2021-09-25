import React from 'react';
import { Link } from 'react-router-dom';
import './notfound.scss';

const NotFound = () => {
    return (
<div className="matrix">
    <div className="noise"></div>
    <div className="overlay"></div>
    <div className="terminal">
        <h1>Error <span className="errorcode">404</span></h1>
        <p className="output">Désolé Mr Anderson, mais la page que vous recherchez n'existe pas</p>
        <p className="output">Mon conseil est que vous retourniez sur <Link to="/">la page d'accueil</Link>.</p>
        <p className="output">A bientôt Mr Anderson...</p>
        <p className="output">Mr Smith.</p>
        <p className="signature">Template by Robin Selmer</p>
    </div>
</div>
        
    )
}

export default NotFound;