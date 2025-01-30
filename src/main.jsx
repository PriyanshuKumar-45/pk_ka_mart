import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Your global styles (optional)
import App from './App';  // Your main App component
import { HashRouter } from 'react-router-dom';  // Import HashRouter

ReactDOM.render(
  <HashRouter basename="/pk_ka_mart/">  {/* Wrap your app with HashRouter */}
    <App />
  </HashRouter>,
  document.getElementById('root')  // Renders the app inside the div with id 'root'
);
