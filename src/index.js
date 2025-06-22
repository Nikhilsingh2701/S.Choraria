import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.css';
import Home from './Home'; // ✅ Use your main layout
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Home /> {/* ✅ Central routing is inside here */}
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
