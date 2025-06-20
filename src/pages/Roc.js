import React from 'react';

// Import the shared layout components
// import TopBar from '../components/TopBar';
// import Header from '../components/Header';
// import Navbar from '../components/Navbar';

const Roc = () => {
  return (
    <>
      <main>
        <div className="divTitle">
          <h1 className="title">Corporate structuring</h1>
        </div>

        <img src="/images/roc.webp" alt="ROC" className="rocImg" />
        <hr />
        <p className="desc">
          We offer a full spectrum of services related to compliance with the Registrar of Companies (ROC) under the Ministry of Corporate Affairs (MCA). Our team assists businesses in meeting their statutory obligations right from company incorporation and obtaining necessary registrations to regular compliance filings and event-based reporting. . We also provide advisory on corporate restructuring, conversion of company types (e.g., private to public), and striking off defunct companies. In case of non-compliance or regulatory notices, we offer expert representation and rectification support before ROC authorities. By ensuring timely and accurate filings, we help clients avoid penalties and maintain good legal standing. Whether you’re a startup, SME, or large enterprise, our ROC compliance solutions are tailored to keep your business legally sound and governance-ready.
        </p>
        <h3 className="heading">Our Services</h3>
        <ul className='descList'>
           <li>Mergers and Demergers</li>
           <li>Due diligence</li>
           <li>Financial Structuring</li>
           <li>Acquisitions and disposals</li>
          <li>Drafting and filing of incorporation documents</li>
          <li>Annual returns (AOC-4, MGT-7)</li>
          <li>Director KYC (DIR-3 KYC)</li>
          <li>Maintenance of statutory registers</li>
         
        </ul>
      </main>
    </>
  );
};

export default Roc;