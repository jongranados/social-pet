import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider as ReduxProvider } from 'react-redux';
import store from '../src/store'; 

if (process.env.NODE_ENV !== 'production') { 
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
