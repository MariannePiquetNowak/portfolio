import React from 'react';
import Navbar from '../Navbar';
import GithubSection from "../Github";




const Header = () => {
    return (
        <header className="Header container-sm">
            <GithubSection />
            <Navbar />
        </header>
    )
}

export default Header;