import './App.scss';
import Layout from './Components/Layout/layout'

import wave from './images/wave.svg';
import Wave from './Components/Wave';

// Components 

// Bootstrap
import { Button } from 'react-bootstrap';

const App = () => {
  return (
    <div className="App">
      <Layout>
      <Wave />
      </Layout>
    </div>
  );
}

export default App;
