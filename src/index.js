import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './index.scss';
import App from './App';
import Projects from './Projects'
import NotFound from './Components/NotFound';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
  <React.StrictMode>
    <Router forceRefresh={true}>
      <Switch>
      <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
