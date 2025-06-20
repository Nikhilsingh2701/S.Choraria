// src/Home.js (Your Main App Layout)

import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout Components
import TopBar from './components/TopBar';
import Header from './components/Header';
import Navbar from './components/Navbar';
import './App.css'; 

// === 1. IMPORT ALL YOUR PAGE COMPONENTS ===
// The path for your main page (index.html) is "/"
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Audit from './pages/Audit';
import Careers from './pages/Careers';
import Consulting from './pages/Consulting';
import ContactUs from './pages/ContactUs';
import Gallery from './pages/Gallery';
import Ibc from './pages/Ibc';
import Industries from './pages/Industries';
import Merge from './pages/Merge';
import Nbfc from './pages/Nbfc';
import Roc from './pages/Roc';
import Tax from './pages/Tax';

const AppLayout = () => {
  return (
    <div className="App">
      {/* These appear on EVERY page */}
      <TopBar />
      <Header />
      <Navbar />

      <main>
        {/* === 2. DEFINE A ROUTE FOR EVERY PAGE === */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/audit" element={<Audit />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/ibc" element={<Ibc />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/merge" element={<Merge />} />
          <Route path="/nbfc" element={<Nbfc />} />
          <Route path="/roc" element={<Roc />} />
          <Route path="/tax" element={<Tax />} />
        </Routes>
      </main>

      {/* This footer appears on EVERY page */}
      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-links">
            <a href="https://www.icai.org/">ICAI</a>
            <a href="https://www.icsi.edu/home/">ICSI</a>
            <a href="https://www.incometax.gov.in/iec/foportal/">Income-Tax</a>
            <a href="https://www.mca.gov.in/content/mca/global/en/home.html">MCA</a>
            <a href="https://www.rbi.org.in/">RBI</a>
            <a href="https://nclt.gov.in">NCLT</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div style={{ color: 'white' }}>
  Copyright 2025. S.Choraria & Associates. All rights reserved.
</div>
<div>
  <a
    href="https://nikhilsingh2701.github.io/Portfolio/"
    style={{ color: 'white' }}
  >
    Powered by Nikhil
  </a>
</div>


        </div>
      </footer>
    </div>
  );
};

export default AppLayout;