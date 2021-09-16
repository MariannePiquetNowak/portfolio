import logo from './logo.svg';
import './App.scss';

// Components 
import Header from './Components/test/header';

// Bootstrap
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App container-sm">
      <Header/>
      <Button variant="primary">Submit</Button>
    </div>
  );
}

export default App;
