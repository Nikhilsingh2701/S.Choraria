import React from 'react';

const AboutUs = () => (
  <>
    <section className="about-us-section">
      <div className="divTitle">
        <h1 className="title">About Us</h1>
      </div>

      <div className="aboutUsDesc">
        <p>
          Established in 1997, S. Choraria & Associates is a reputed Chartered Accountancy firm committed to delivering high-quality professional services with integrity and excellence. With over two decades of experience, the firm is led by a team of three dedicated partners who bring a wealth of expertise across auditing, taxation, corporate advisory, and compliance services. Our client-centric approach, coupled with deep domain knowledge and practical insight, has helped us build lasting relationships with a diverse clientele, ranging from startups to established corporates. At S. Choraria & Associates, we strive to be trusted advisors, delivering solutions that are timely, tailored, and aligned with our clients’ strategic goals. <br />
          The firm operates in the service sector and plays a fiduciary role. Therefore, the partners and employees of the firm are required to adhere to ethical standards and a code of conduct to ensure independence, reliability, and integrity. They shall:
          <ul>
            <li>Act solely in the best interests of the organization and its clients while performing their duties.</li>
            <li>Treat all information gained in relation to clients as confidential and private, unless authorized in writing by the client to disclose such information.</li>
            <li>Avoid communicating false or misleading information that may compromise the integrity of accreditation, registration, and certification processes or related decisions.</li>
            <li>Demonstrate the ability to act professionally even when facing adverse pressure from clients.</li>
            <li>Conduct business professionally, with truth, accuracy, fairness and responsibility.</li>
            <li>Refrain from misrepresenting the qualifications, competence, or experience of individuals associated with the organization and avoid undertaking assignments beyond their capabilities.</li>
          </ul>
        </p>
      </div>
    </section>

    <div className="our-team-header">
      <h1>Our Team</h1>
      <div className="services-underline"></div>
    </div>

    <div className="our-team-container">
      <div className="our-team-member-card">
        <div className="team-wrapper">
          <img src={`${process.env.PUBLIC_URL}/images/santosh.webp`} alt="Santosh Choraria" className="team-member-image" />
          <div className="team-details">
            <h2>Santosh Choraria</h2>
            <div className="our-team-member-designation">
              FCA, CS, DISA, Insolvency professional
            </div>
          </div>
        </div>
        <p>
          Santosh Choraria having More than 33 years of experience in audit and taxation, corporate restructuring, company law matters, insolvency matters. He has specialized knowledge in the area of corporate restructuring and mergers & acquisitions. Qualified as Chartered Accountant in 1992 in first attempt. Practising CA since 1992. Co opted member of the Direct Tax Committee of the Institute of Chartered Accountants of India for the year 2012-13. Registered as an IP with Insolvency and Bankruptcy Board of India.Was Convener of Views Exchange Chartered Accountants Study Circle -EIRC for the year 2011-12.Associated with various Study Circles in Kolkata.Member of Direct Tax Committee of Bharat Chamber of Commerce.Member of St. Xaviers Alumni Association.
        </p>
      </div>

      <div className="our-team-member-card">
        <div className="team-wrapper">
          <img src={`${process.env.PUBLIC_URL}/images/seema.webp`} alt="Seema Choraria" className="team-member-image" />
          <div className="team-details">
            <h2>Seema Choraria</h2>
            <div className="our-team-member-designation">FCA, CS</div>
          </div>
        </div>
        <p>
          Seema Choraria having more than 28 years of experience in audit and taxation. Qualified as a Chartered Accountant in 1997. Merit holder in the CA Final Exam on All India Basis.
        </p>
      </div>

      <div className="our-team-member-card">
        <div className="team-wrapper">
          <img src={`${process.env.PUBLIC_URL}/images/ramesh.webp`} alt="Ramesh Verma" className="team-member-image" />
          <div className="team-details">
            <h2>Ramesh Verma</h2>
            <div className="our-team-member-designation">CA</div>
          </div>
        </div>
        <p>
          Ramesh Verma having more than 15 years of experience in industry and is presently engaged in audit & assurance, indirect taxation, and bank audits.
        </p>
      </div>
    </div>
  </>
);

export default AboutUs;
