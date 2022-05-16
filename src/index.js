import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './index.scss'
import App from './App'
import Projects from './Projects'
import NotFound from './Components/NotFound'
import reportWebVitals from './reportWebVitals'

import 'bootstrap/dist/css/bootstrap.css'

import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import common_fr from './translations/fr/common.json'
import common_en from './translations/en/common.json'

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: 'fr',
  resources: {
    fr: {
      common: common_fr,
    },
    en: {
      common: common_en,
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <Router forceRefresh={true}>
      <Switch>
        <Route exact path="/">
          <I18nextProvider i18n={i18next}>
            <App />
          </I18nextProvider>
        </Route>
        <Route exact path="/projects">
          <I18nextProvider i18n={i18next}>
            <Projects />
          </I18nextProvider>
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
