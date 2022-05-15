import React, {useState} from "react";
import "./open.scss";
import { useCookies, Cookies } from 'react-cookie';

const Opening = (props) => {

    const [cookies, setCookie] = useCookies(['name']);
   
    const overflowHidden = () => {
        const body = document.body;
        body.style.overflow = 'hidden';
    }
    overflowHidden()

    const openTime = () => {
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

    const overflowVisible = () => {
        const body = document.body;
        body.style.overflow = 'visible';
    }

    openTime()
    displayNoneOpening();
        

    return (
        <div className="opening"> 
            <div className="container-left"></div>
            
            <div className="container-right"></div>
            <div className="circle">
                <img className="logo" src="https://nsa40.casimages.com/img/2021/05/11//210511122423929435.png" alt="logo" />
            </div>
        </div>
    )
}

export default Opening;