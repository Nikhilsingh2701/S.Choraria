import React, { useState } from 'react';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !message) {
      setStatusMessage({ text: 'All fields are required.', type: 'error' });
      return;
    }

    console.log('Form Submitted:', { name, email, message });

    setStatusMessage({ text: 'Thank you! Your message has been sent.', type: 'success' });

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <>
      <div className="divTitle">
        <h1 className="title">Contact Us</h1>
      </div>

      {/* ✅ Fixed image path */}
      <img src={`${process.env.PUBLIC_URL}/images/contact.png`} alt="Contact" className="contactImg" />
      
      <hr />

      <h2 className="form-title">Write to Us</h2>

      <div className="form">
        <form id="form" className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
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
            Kolkata-700072 <br />
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
    </>
  );
};

export default ContactUs;
