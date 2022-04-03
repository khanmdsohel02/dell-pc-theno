import React from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOMClient.createRoot(document.getElementById('root')
);
root.render(
  <React.StrictMode>
    < BrowserRouter>
      < App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
