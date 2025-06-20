import React from 'react';

// Import the shared components. The path is '../components/' because
// this file is in 'pages/' and those are in 'components/'.
// import TopBar from '../components/TopBar';
// import Header from '../components/Header';
// import Navbar from '../components/Navbar';

const Ibc = () => {
  return (
    <>

      <main>
        <div className="divTitle">
          <h1 className="title">Insolvency and Bankruptcy Code</h1>
        </div>
        <img src="/images/bankruptcy.webp" alt="Bankruptcy" className="ibcImg" />
        <hr />
        <p className="desc">Our firm offers expert advisory and compliance services...</p>
        <h3 className="heading">Our Services</h3>
        <p className="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
      </main>

    </>
  );
};

export default Ibc;