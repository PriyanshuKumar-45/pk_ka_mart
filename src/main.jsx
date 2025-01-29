import React from 'react';
import ReactDOM from 'react-dom/client'; // Use react-dom/client
import './index.css';
import App from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
