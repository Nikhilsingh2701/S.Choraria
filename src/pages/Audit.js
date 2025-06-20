// import React from 'react';
// import TopBar from '../components/TopBar';
// import Header from '../components/Header';
// import Navbar from '../components/Navbar';

const Audit = () => (
  <>
    

    <div className="divTitle">
      <h1 className="title">Audit</h1>
    </div>

   <img src={`${process.env.PUBLIC_URL}/images/audit.webp`} alt="Audit" className="auditImg" />
<hr />

    <p className="desc">
      We provide comprehensive audit and assurance services aimed at enhancing financial transparency, ensuring statutory compliance, and strengthening stakeholder confidence. Our audit approach goes beyond numbers—we focus on understanding your business operations, internal controls, and industry risks to deliver insightful and value-added reporting. Our services include statutory audits under the Companies Act, and audits required by regulatory bodies such as RBI, SEBI, and GST authorities. Leveraging industry best practices and advanced audit tools, we ensure accuracy, compliance, and efficiency in our audit processes. Whether you're a startup, SME, NBFC, or a large corporation, our audit services are designed to provide reliable financial information, detect potential risks, and support sound decision-making. Our commitment to integrity, independence, and excellence makes us a trusted partner in your business’s financial oversight and governance.<br></br> <br></br>The audit team specializes in areas such as banking and financial services, real estate, the manufacturing industry, the services industry, etc. Our audit approach ensures that financial reporting information is accurate, systems and controls are operating effectively and management and regulatory information is reliable.  We focus on areas where the risk of material misstatement of financial information is highest. We thoroughly plan our audit work, concentrate on these areas and examine accounting systems and controls.Client considerations such as anticipation of problems and early identification of issues to ensure that there are no surprises at the end of an audit, regular contact to discuss key issues which affect operations, and speed of response, all form part of the high quality service approach.
    </p>

    <h2 className="heading">Our Services</h2>
    <ul className="descList">
      <li>Statutory Audit</li>
      <li>Internal Audit</li>
      <li>Tax Audit</li>
      <li>Gst Audit</li>
      <li>Stock Audit</li>
      <li>Concurrent Audit</li>
      <li>Management Audit</li>
      <li>IND AS Conversion</li>
      <li>Forensic Audit</li>
      <li>Special Purpose Audit</li>
    </ul>
  </>
);

export default Audit;