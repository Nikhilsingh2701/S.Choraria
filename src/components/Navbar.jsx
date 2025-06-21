import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import './Navbar.js'; // Ensure styles are imported

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo"></div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/aboutus" onClick={closeMenu}>About</Link></li>
        <li><Link to="/industries" onClick={closeMenu}>Industries</Link></li>
        <li className="dropdown-parent">
          <a href="/audit" onClick={(e) => e.preventDefault()}>Services ▾</a>
          <ul className="dropdown">
            <li><Link to="/audit" onClick={closeMenu}>Audit & Assurance</Link></li>
            <li><Link to="/tax" onClick={closeMenu}>Tax Advisory</Link></li>
            <li><Link to="/consulting" onClick={closeMenu}>Consultancy Services</Link></li>
            <li><Link to="/roc" onClick={closeMenu}>Corporate Structuring</Link></li>
            <li><Link to="/ibc" onClick={closeMenu}>IBC</Link></li>
            <li><Link to="/nbfc" onClick={closeMenu}>RBI Compliance</Link></li>
          </ul>
        </li>
        <li><Link to="/gallery" onClick={closeMenu}>Gallery</Link></li>
        <li><Link to="/careers" onClick={closeMenu}>Careers</Link></li>
        <li><Link to="/contactus" onClick={closeMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
