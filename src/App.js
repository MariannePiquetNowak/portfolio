import React, { useState, Suspense } from 'react';
import Typewriter from "typewriter-effect";
import './App.scss';


// Components 
import Layout from './Components/Layout/layout'
import ProjectSection from './Components/ProjectHome';
import AboutSection from './Components/About';
import ContactSection from './Components/Contact';
import FormContact from './Components/FormContact';
import Wallpaper from './Components/Wallpaper';
import ScrollButton from './Components/ScrollTop';
import Opening from './Components/Opening'
// images
import wallpaper from "./images/header-fusion.svg";
import flag_fr from './images/flag_fr.png';
import flag_uk from './images/flag_uk.png';


import {AiOutlineCheckCircle} from 'react-icons/ai';
// import { ModalBody } from 'react-bootstrap';

import { useTranslation } from 'react-i18next'

/* ======== APP ========*/
const App = (props) => {

  const {t, i18n} = useTranslation('common');
  document.title = t('title');


 // ======= emailjs ======= //
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  /* Vérification form */
  const checkForm = () => {
    let regexName = /^[A-Z][A-Za-z\é\è\ê\-]+$/;
    let regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/;

    let mailLabel = document.getElementById("not-email");
    let nameLabel = document.getElementById("not-name");
    let messageLabel = document.getElementById("not-message");

    let formIsValid = true; 

    /* ===== Name ====== */

      if(!name.match(regexName)) {
        formIsValid = false;
        nameLabel.innerHTML = t('messages.error_name')
        nameLabel.style.color = "#D24040"
      } else {
        nameLabel.innerHTML = t('contact.name')
        nameLabel.style.color = "#27D7B7"
    }
  
    /* ===== Email ====== */

      if(!email.match(regexEmail)) {
        formIsValid = false;
        mailLabel.innerHTML = t('messages.error_mail')
        mailLabel.style.color = "#D24040"
      } else {
        mailLabel.innerHTML = t('contact.mail')
        mailLabel.style.color = "#27D7B7"
      }

    /* ===== Email ====== */

      if(!message) {
        formIsValid = false;
        messageLabel.innerHTML = t('messages.error_msg')
        messageLabel.style.color = "#D24040"
      }else {
        messageLabel.innerHTML = t('contact.msg')
        messageLabel.style.color = "#27D7B7"
      }
    
    return formIsValid;
  }

  const successMessage = () => {
    let formMess = document.querySelector(".form-message");
    formMess.classList.add('success-mess');

    setTimeout(() => {
      formMess.classList.remove('success-mess');
    }, 3000)
  }

  const handleSubmit = e => {

    e.preventDefault();

    if(!checkForm()) {
        console.log("Le formulaire n'est pas remplis") 
      } else {
        console.log("Le formulaire est bien remplis")
        sendFeedback('template_yoiccom',{
        name,
        email, 
        message
      });        
      }
    }


   const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        successMessage();
        console.log("success !")
        setName("");
        setEmail("");
        setMessage("");
        
      })
      .catch(
        (err) => document.querySelector('.form-message').innerHTML = "Une erreur s'est produite, veuillez réessayer")
  }
  
  // =================================== //     

  return (
    <Suspense fallback="loading">
      <div className="App" id="App">
        <Opening />
        <Layout>
          <div className="form-message">
              <AiOutlineCheckCircle />
              <p>{t('messages.msg_send')}</p>
          </div>
        <Wallpaper src={wallpaper}/>
          <div className="type">
            <h3>{t('messages.iam')}</h3>
            <Typewriter 
              className="typewriter" 
              options={{
                strings: [t('messages.typer_1'), t('messages.typer_2')],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        <ProjectSection />
        <AboutSection />
        <ContactSection />
        <FormContact 
          submit={handleSubmit} 
          name={name} 
          email={email} 
          message={message}
          setName={setName}
          setEmail={setEmail}
          setMessage={setMessage}
          check={checkForm}
          />
        </Layout>
        <ScrollButton />
        <div className="btn-lang">
          <button onClick={() => i18n.changeLanguage('fr')}><img src={flag_fr} alt="lang_fr"/></button>
          <button onClick={() => i18n.changeLanguage('en')}><img src={flag_uk} alt="lang_fr"/></button>
        </div>
      </div>
    </Suspense>
  );

}

export default App;
