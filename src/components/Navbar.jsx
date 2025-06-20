import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const handleServicesClick = (event) => {
    event.preventDefault();
  };

  return (
    <nav className="navbar">
      <div className="logo"></div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/aboutus">About</Link></li>
        <li><Link to="/industries">Industries</Link></li>
        <li>
          <a href="/audit" onClick={handleServicesClick}>Services &#9662;</a>
          <ul className="dropdown">
            <li><Link to="/audit">Audit & Assurance</Link></li>
            <li><Link to="/tax">Tax Advisory</Link></li>
            <li><Link to="/merge">Merger & Acquisition</Link></li>
            <li><Link to="/consulting">Consultancy Services</Link></li>
            <li><Link to="/roc">Corporate Structuring</Link></li>
            <li><Link to="/ibc">IBC</Link></li>
            <li><Link to="/nbfc">RBI Compliance</Link></li>
          </ul>
        </li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/careers">Careers</Link></li>
        <li><Link to="/contactus">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;