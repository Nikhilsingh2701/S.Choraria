import React from 'react';

const Tax = () => {
  return (
    <>
      <main>
        <div className="divTitle">
          <h1 className="title">Tax Advisory</h1>
        </div>

        {/* ✅ Fixed image path */}
        <img src={`${process.env.PUBLIC_URL}/images/tax.webp`} alt="Tax" className="taxImg" />
        
        <hr />

        <p className="desc">
          We offer a full range of direct and indirect tax services designed to ensure compliance, minimize liabilities, and optimize tax efficiency for individuals, trusts, businesses, and corporates. Our approach combines deep technical knowledge with practical insight to help clients structure their transactions, investments, and operations in the most tax-efficient manner. Whether you're a salaried individual, a growing business, an MNC, or an NRI, we ensure timely compliance, risk mitigation, and maximum benefit of available deductions, exemptions, and incentives. With our proactive and personalized tax solutions, we help you stay ahead in a dynamic regulatory environment while focusing on your core business goals. Our taxation expertise can help the client achieve an optimum tax position. We are proactive in reviewing the client’s tax strategies in the context of their business objectives, and can assist in all areas of compliance and corporate taxation requirements.
        </p>

        <h3 className="heading">Our Services</h3>

        <ul className='descList'>
          <li>Direct Tax</li>
          <ul>
            <li>Corporate Tax Planning (including tax efficient structuring of operation and transaction)</li>
            <li>Handling of all tax assessment, Payment Correspondence and appeals</li>
            <li>Advice on non-routine tax queries and issues</li>
            <li>Tax and legal due diligence reviews</li>
            <li>Preparation and filing of tax computation and returns</li>
            <li>Transfer Pricing</li>
            <li>Personal Taxation</li>
            <li>Processing and electronic filing of TDS, TCS</li>
          </ul>
          <li>Indirect Tax</li>
          <ul>
            <li>GST registration</li>
            <li>Electronic filing of GST return</li>
            <li>GST Audit</li>
            <li>Handling of assessment and appeals</li>
          </ul>
        </ul>
      </main>
    </>
  );
};

export default Tax;
