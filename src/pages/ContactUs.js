// src/pages/ContactUs.js

import React, { useState } from 'react';

// Import shared layout components if you're using that pattern
// import TopBar from '../components/TopBar';
// import Header from '../components/Header';
// import Navbar from '../components/Navbar';

const ContactUs = () => {
  // === JAVASCRIPT LOGIC STARTS HERE ===

  // 1. Use 'useState' to manage the values of the input fields.
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // 2. Use 'useState' to manage the success or error message displayed to the user.
  const [statusMessage, setStatusMessage] = useState('');

  // 3. This function handles the form submission.
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default browser page reload

    // Check if any field is empty (we use the state variables, not the DOM)
    if (!name || !email || !message) {
      // Set an error message
      setStatusMessage({ text: 'All fields are required.', type: 'error' });
      return;
    }

    // --- This is where you would send the data to a backend server ---
    console.log('Form Submitted:', { name, email, message });
    // ---

    // 4. Simulate a successful submission
    setStatusMessage({ text: 'Thank you! Your message has been sent.', type: 'success' });
    
    // 5. Clear the form fields by resetting the state
    setName('');
    setEmail('');
    setMessage('');
  };

  // === JSX (HTML-like part) STARTS HERE ===
  return (
    <>
      {/* If you are putting layout in every page, uncomment these */}
      {/* <TopBar /> */}
      {/* <Header /> */}
      {/* <Navbar /> */}

      <div className="divTitle">
        <h1 className="title">Contact Us</h1>
      </div>

      <img src="/images/contact.png" alt="Contact" className="contactImg" />
      <hr />

      <h2 className="form-title">Write to Us</h2>

      <div className="form">
        {/* The 'onSubmit' event on the form tag is the React way */}
        <form id="form" className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          {/*
            - 'value' is tied to our 'name' state variable.
            - 'onChange' updates the 'name' state variable every time the user types.
          */}
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <button type="submit">Send Message</button>

          {/* 6. Conditionally render the status message below the button */}
          {statusMessage && (
            <div id="form-message" className={statusMessage.type}>
              <p>{statusMessage.text}</p>
            </div>
          )}
        </form>
      </div>

      <hr />

      <div className="contact-container">
        <div className="address">
          <h2>Our Address</h2>
          <p>
            S.Choraria and Associates<br />
            Room no.- 222 , P-41<br />
            Princep Street, Chandni Chowk<br />
            Kolkata-700072 <br></br>
            Ph No.-  033-40054515
          </p>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2190.6934200224237!2d88.35236850743307!3d22.56816143414952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a899d90ba1%3A0xc1ff5fd764220ba2!2sP41%2C%20Princep%20St%2C%20Esplanade%2C%20Chandni%20Chawk%2C%20Bowbazar%2C%20Kolkata%2C%20West%20Bengal%20700072!5e0!3m2!1sen!2sin!4v1747056597830!5m2!1sen!2sin"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          ></iframe>
        </div>
      </div>

      {/* If you are putting layout in every page, add your footer here */}
      {/* <footer className="site-footer">...</footer> */}
    </>
  );
};

export default ContactUs;