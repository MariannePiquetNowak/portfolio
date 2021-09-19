import './App.scss';
import Layout from './Components/Layout/layout'

// Components 
import Wave from './Components/Wave';
import Project from './Components/Project';

// Bootstrap



const goProjectPage = () => {
    console.log('go to the project page');
}

const App = (props) => {
  return (
    <div className="App">
      <Layout>
      <Wave />
      <Project projectPage={goProjectPage}/>
      </Layout>
    </div>
  );
}

export default App;
