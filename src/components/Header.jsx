import React from 'react';

const Header = () => (
  <div id="logo" style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '10px' }}>
    <img src={`${process.env.PUBLIC_URL}/images/caLogo.png`} alt="CA Logo" style={{ height: '60px' }} />
    <div>
      <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#2c3e50' }}>
        S. Choraria & Associates
      </div>
      <div style={{ fontSize: '24px' }}>Chartered Accountants</div>
    </div>
  </div>
);

export default Header;
