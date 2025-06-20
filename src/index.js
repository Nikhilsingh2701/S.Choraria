// src/index.js


import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.css';
import Home from './Home'; // This is your AppLayout component now
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Ensure basename matches your GitHub repo name exactly (case-sensitive) */}
    <HashRouter basename="/S.Choraria"> {/* <-- Fix capitalization here */}
      <Home />
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();