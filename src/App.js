import './App.scss';
import Layout from './Components/Layout/layout'

// Components 
import Wave from './Components/Wave';
import Project from './Components/Project';

// Bootstrap

const App = () => {
  return (
    <div className="App">
      <Layout>
      <Wave />
      <Project />
      </Layout>
    </div>
  );
}

export default App;
