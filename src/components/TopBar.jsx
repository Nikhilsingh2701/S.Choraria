import React from 'react';

const TopBar = () => (
  <div className="top-bar">
    <div className="left" style={{ color: 'white' }}>
      📞 033-40054515
    </div>
    <div className="right">
      ✉️ <a href="mailto:admin@teamcna.in" style={{ color: 'white' }}>Sch@gmialsdfk</a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <img
          src={`${process.env.PUBLIC_URL}/images/linkedin-logo.png`}
          alt="LinkedIn"
          style={{ height: '45px' }}
        />
      </a>
    </div>
  </div>
);

export default TopBar;
