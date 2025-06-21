import React from 'react';

const Nbfc = () => {
  return (
    <>
      <main>
        <div className="divTitle">
          <h1 className="title">RBI Compliance</h1>
        </div>

        {/* ✅ Fixed image path */}
        <img src={`${process.env.PUBLIC_URL}/images/nbfc.webp`} alt="NBFC" className="nbfcImg" />
        
        <hr />

        <p className="desc">
         At S.Choraria & Associates, we provide end-to-end RBI compliance services to help businesses and financial institutions navigate the complex regulatory landscape governed by the Reserve Bank of India. With deep expertise in RBI guidelines, circulars, and statutory frameworks, our team ensures that clients remain fully compliant with evolving regulatory requirements. Our services are tailored to banks, NBFCs, fintechs, and corporates engaging in cross-border transactions or regulated activities. We also provide advisory support during inspections, audits, and regulatory assessments. By ensuring timely filings, accurate disclosures, and strategic guidance, we help clients avoid penalties and build a strong foundation of trust and transparency. We are committed to providing reliable, responsive, and up-to-date compliance solutions, empowering your business to grow within the bounds of regulatory certainty.
        </p>

        <h3 className="heading">Our Services</h3>

        <ul className='descList'>
          <li>NBFC Registrations</li>
          <li>Periodic filings</li>
          <li>Reporting under RBI directions</li>
        </ul>
      </main>
    </>
  );
};

export default Nbfc;
