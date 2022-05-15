import React from "react";
import "./open.scss";
// import { useCookies } from 'react-cookie';
import logo from "../../images/logo.svg";

const Opening = (props) => {

    // const [cookies, setCookie] = useCookies(['name']);

   const overflowVisible = () => {
    const body = document.body;
    body.style.overflow = 'visible';
}

    const openTime = (e) => {
        setTimeout(() => {

            const logo = document.querySelector('.circle');
            const c_left = document.querySelector(".container-left");
            const c_right = document.querySelector(".container-right");

            c_left.classList.add("slide-left");
            c_right.classList.add("slide-right");
            
            overflowVisible();
            logo.style.display = "none";
        }, 1500)
    }

    const displayNoneOpening = () => {
        setTimeout(() => {
            const opening = document.querySelector('.opening');
            opening.style.display = "none";    

        }, 2000)

    }

    openTime()
    displayNoneOpening();
        

    return (
        <div className="opening"> 
            <div className="container-left"></div>
            
            <div className="container-right"></div>
            <div className="circle">
                <img className="logo" src={logo} alt="logo" />
            </div>
        </div>
    )
}

export default Opening;