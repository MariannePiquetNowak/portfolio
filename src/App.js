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
  return (
    <div className="App">
      <Layout>
      {/* <Wave /> */}
      <Wallpaper/>
      <ProjectSection projectPage={goProjectPage}/>
      <AboutSection open={openCv} />
      <ContactSection />
      <FormContact />
      </Layout>
    </div>
  );
}

export default App;
