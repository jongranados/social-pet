import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider as ReduxProvider } from 'react-redux';
import store from '../src/store'; 
import { csrfFetch, restoreCSRF } from 'store/csrf';

if (process.env.NODE_ENV !== 'production') { 
  restoreCSRF(); 

  window.csrfFetch = csrfFetch; 
  window.store = store; 
}; 

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <React.StrictMode>
    <ReduxProvider> 
      <App />
    </ReduxProvider>
  </React.StrictMode>
)
