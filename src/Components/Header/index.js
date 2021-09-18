import React from 'react';
import Navbar from '../Navbar';
import GithubSection from "../Github";
import TitleHeader from "../Title";

import './header.scss';


const Header = () => {
    return (
        <header className="Header container-sm">
            <Navbar />
            <GithubSection />
            <TitleHeader/>
        </header>
    )
}

export default Header;