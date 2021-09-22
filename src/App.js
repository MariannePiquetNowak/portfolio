import React, { useState } from 'react';
import Typewriter from "typewriter-effect";
import './App.scss';


// Components 
import Layout from './Components/Layout/layout'
import ProjectSection from './Components/ProjectHome';
import AboutSection from './Components/About';
import ContactSection from './Components/Contact';
import FormContact from './Components/FormContact';
import Wallpaper from './Components/Wallpaper';
// images
import wallpaper from "./images/header-fusion.svg";


import {AiOutlineCheckCircle} from 'react-icons/ai';

const goProjectPage = () => {
    console.log('go to the project page');
}

const openCv = () => {
  console.log('open the CV');
}


/* ======== APP ========*/
const App = (props) => {

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
        nameLabel.innerHTML = "Nom invalide"
        nameLabel.style.color = "#D24040"
      } else {
        nameLabel.innerHTML = "Votre nom" 
        nameLabel.style.color = "#27D7B7"
    }
  
    /* ===== Email ====== */

      if(!email.match(regexEmail)) {
        formIsValid = false;
        mailLabel.innerHTML = "Mail invalide"
        mailLabel.style.color = "#D24040"
      } else {
        mailLabel.innerHTML = "Votre mail"
        mailLabel.style.color = "#27D7B7"
      }

    /* ===== Email ====== */

      if(!message) {
        formIsValid = false;
        messageLabel.innerHTML = "Votre message est vide"
        messageLabel.style.color = "#D24040"
      }else {
        messageLabel.innerHTML = "Votre message"
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
    <div className="App" id="App">
      <Layout>
      <div className="form-message">
          <AiOutlineCheckCircle />
          <p>Message envoyé ! Je vous recontacte dès que possible.</p>
      </div>
      <Wallpaper src={wallpaper}/>
      <div className="type">
        <h3>Je suis</h3>
        <Typewriter 
          className="typewriter" 
          options={{
            strings: ["Développeuse Front-End.", "Graphiste."],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
       
      <ProjectSection projectPage={goProjectPage}/>
      <AboutSection open={openCv} />
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
    </div>
  );

}

export default App;
