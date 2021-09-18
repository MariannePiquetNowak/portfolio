import React from 'react';
import Navbar from '../Navbar';
import GithubSection from "../Github";




const Header = () => {
    return (
        <header className="Header container-sm">
            <Navbar />
            <GithubSection />
        </header>
    )
}

export default Header;