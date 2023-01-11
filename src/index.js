import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { ContextProvider } from './Context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ContextProvider>
      <App />
      </ContextProvider>
    </Router>
  </React.StrictMode>
);

