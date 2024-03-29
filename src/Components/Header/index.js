import React, { Component } from 'react';

import NavbarHome from '../NavbarHome';
import GithubSection from "../Github";
import NavProject from "../NavbarProject";

import './header.scss';


class Header extends Component {

    render() {
        return(
            <header className="Header container-sm">
                {SwitchNav()}
                <GithubSection />
            </header>

        )
    }
}


export default Header;

const SwitchNav = () => {
    const url = window.location;

    if(url.pathname === "/") {
        return <NavbarHome />
        // console.log('home')
    } 
    if(url.pathname === "/projects") {
        return <NavProject />
        // console.log('project')


    }
}