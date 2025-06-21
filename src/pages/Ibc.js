import React from 'react';

const Ibc = () => {
  return (
    <>
      <main>
        <div className="divTitle">
          <h1 className="title">Insolvency and Bankruptcy Code</h1>
        </div>

        
        <img src={`${process.env.PUBLIC_URL}/images/bankruptcy.webp`} alt="Bankruptcy" className="ibcImg" />

        <hr />

        <p className="desc">
          At S.Choraria & Associates, we offer comprehensive IBC (Insolvency and Bankruptcy Code) services, tailored to meet the evolving needs of stakeholders in today’s dynamic business environment. Our dedicated team of qualified insolvency professionals, legal advisors, and financial experts assist clients through every stage of the insolvency resolution process with integrity and precision. We represent financial creditors, operational creditors, and corporate debtors, ensuring compliance with all regulatory and procedural requirements under the IBC framework. Our services include conducting due diligence, drafting resolution plans, advisory on restructuring, and guiding stakeholders through litigation or liquidation proceedings, if required. With a deep understanding of IBC laws and a results-driven approach, we aim to protect client interests while facilitating timely resolution. Whether you're navigating financial distress or seeking strategic debt recovery solutions, S.Choraria & Associates is committed to delivering transparent, effective, and timely insolvency and bankruptcy support across diverse sectors.
        </p>

        
      </main>
    </>
  );
};

export default Ibc;
