import React, { useState } from 'react';
import './App.scss';
import Layout from './Components/Layout/layout'

// Components 
import ProjectSection from './Components/Project';
import AboutSection from './Components/About';
import ContactSection from './Components/Contact';
import FormContact from './Components/FormContact';
import Wallpaper from './Components/Wallpaper';


const goProjectPage = () => {
    console.log('go to the project page');
}

const openCv = () => {
  console.log('open the CV');
}

const App = (props) => {

 // ======= emailjs ======= //
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  /* Vérification email */
  const isEmail = () => {
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/;

    if(email.match(regex)) {
      return true;
    } else {
      return false;
    }
  }

  const handleSubmit = e => {

    let mail = document.getElementById("not-email");
    e.preventDefault();

    if(name && isEmail() && message) {
        sendFeedback('template_yoiccom',{
          name,
          email, 
          message
        });
        mail.innerHTML = "Votre email"
        mail.style.color = "white";
      } else {
        mail.innerHTML = "Votre email n'est pas valide"
        mail.style.color = "red";
        console.log("erreur")
      }

    }


  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
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
    <div className="App">
      <Layout>
      {/* <Wave /> */}
      <Wallpaper/>
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
        />
      </Layout>
    </div>
  );
}

export default App;
