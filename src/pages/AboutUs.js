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
         Santosh Choraria is a highly respected Chartered Accountant with over 33 years of professional experience in the fields of Audit and Taxation, Corporate Restructuring, Company Law Matters, and Insolvency. He qualified as a Chartered Accountant in 1992, has been in active professional practice ever since.Santosh possesses specialized expertise in Corporate Restructuring and Mergers & Acquisitions, having advised numerous clients on strategic structuring, legal compliance, and transaction execution.
He has also been a co-opted member of the Direct Tax Committee of the Institute of Chartered Accountants of India (ICAI) for the year 2012–13, and a Registered Insolvency Professional (IP) with the Insolvency and Bankruptcy Board of India (IBBI).
In addition to his professional practice. he served as the Convener of the Views Exchange Chartered Accountants Study Circle – EIRC in 2011–12, and remains actively associated with various CA Study Circles in Kolkata.
He is also a member of the Direct Tax Committee of the Bharat Chamber of Commerce and a proud member of the St. Xavier's Alumni Association, reflecting his commitment to both the profession and the broader business community.

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
         Seema Choraria is a seasoned Chartered Accountant with over 28 years of professional experience in the fields of Audit and Taxation. She qualified as a Chartered Accountant in 1997, earning the distinction of being a Merit Holder in the CA Final Examination on an All India basis.
With deep expertise spanning across statutory audits, tax audits, and direct taxation matters, Seema has built a strong reputation for her analytical acumen, meticulous approach, and unwavering commitment to professional ethics. Her extensive experience includes advising corporates, firms, and individuals on complex audit and tax issues, compliance, and strategic planning.
Her long-standing career reflects a blend of technical excellence and practical insight, making her a trusted advisor and a valuable asset to her clients and the profession.
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
          Ramesh Verma is a Chartered Accountant with over 15 years of extensive experience in the industry, bringing deep domain knowledge and practical insight to his professional practice. He is presently engaged in Audit & Assurance, Indirect Taxation, and Bank Audits.
With a strong foundation built through years in the corporate environment, Ramesh offers a well-rounded perspective in handling statutory audits, GST compliance and advisory, internal controls, and audits of public and private sector banks. His methodical approach, attention to detail, and commitment to quality have earned him the trust of clients across sectors.
Ramesh continues to contribute actively to the profession by combining industry best practices with technical proficiency in every assignment he undertakes.

        </p>
      </div>
    </div>
  </>
);

export default AboutUs;
