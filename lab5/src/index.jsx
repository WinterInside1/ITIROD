import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { GoogleAPI } from 'react-google-oauth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleAPI
    clientId={process.env.REACT_APP_GOOGLE_CLIENT}
    onUpdateSigninStatus={(e) => console.log(e)}
    onInitFailure={(e) => console.log(e)}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GoogleAPI>
);
