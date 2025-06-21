import React from 'react';

const Careers = () => {
  return (
    <>
      <div className="divTitle">
        <h1 className="title">Careers</h1>
      </div>

      <div className="page-container">
        <div className="left-section">
          <div className="job-form-wrapper">
            <img src={`${process.env.PUBLIC_URL}/images/careers.webp`} alt="Career" className="careerImg" />

            <div className="job-form-header">
              <p>
                We are thrilled to know your interest in working for our organization. Please fill up the form below with your details so that we can contact you.
              </p>
            </div>

            <form
              name="job-application"
              method="POST"
              action="/#/thank-you" 
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              encType="multipart/form-data"
            >
              {/* Required for Netlify form processing */}
              <input type="hidden" name="form-name" value="job-application" />
              {/* Honeypot field for bots */}
              <input type="hidden" name="bot-field" />

              <div className="form-row">
                <label className="form-label" htmlFor="applicant-name">Name*</label>
                <input type="text" id="applicant-name" name="applicant_name" className="form-input" required />
              </div>

              <div className="form-row">
                <label className="form-label" htmlFor="email-address">Email Address*</label>
                <input type="email" id="email-address" name="email" className="form-input" required />
              </div>

              <div className="form-row">
                <label className="form-label" htmlFor="phone-number">Mobile Number*</label>
                <input type="tel" id="phone-number" name="mobile" className="form-input" required />
              </div>

              <div className="form-row">
                <label className="form-label" htmlFor="job-position">Post Applied For*</label>
                <input type="text" id="job-position" name="position" className="form-input" required />
              </div>

              <div className="form-row">
                <label className="form-label" htmlFor="resume-upload">
                  CV / Resume* <span className="small">(Should not exceed 500kb)</span>
                </label>
                <input type="file" id="resume-upload" name="resume" className="form-file" required />
              </div>

              <button type="submit" className="form-button">Apply Now</button>
            </form>
          </div>
        </div>

        <div className="right-section">
          <p>
            Our firm has professional advisors who understand the client's business, market place and key concerns, and deliver an informed, positive, practical and cost effective service.
          </p>

          <h3>Professionalism at Every Step</h3>
          <p>
            We maintain the highest standards of professionalism, ensuring that every interaction with our clients and colleagues is guided by respect, integrity, and excellence.
          </p>

          <h3>Expert Team</h3>
          <p>
            Our team is composed of seasoned professionals with deep domain expertise, continuous learning habits, and a commitment to delivering superior results.
          </p>

          <h3>Structured Processes</h3>
          <p>
            From project planning to delivery, we follow well-defined workflows and industry best practices that ensure consistency, quality, and accountability.
          </p>

          <h3>Client-Centered Approach</h3>
          <p>
            We prioritize client satisfaction by understanding their unique needs and offering tailored, practical, and cost-effective solutions.
          </p>

          <h3>Focus on Continuous Improvement</h3>
          <p>
            We invest in upskilling, certifications, and ongoing training to ensure our staff stays ahead of the curve in industry trends and tools.
          </p>

          <h3>Transparent Communication</h3>
          <p>
            Clear and open communication is central to how we operate—ensuring our teams and clients are always aligned and informed.
          </p>

          <h3>Strong Work Ethics</h3>
          <p>
            Timeliness, ownership, and a solution-oriented mindset are values we uphold across all roles and responsibilities.
          </p>

          <h3>Quality Assurance</h3>
          <p>
            Every deliverable undergoes strict quality checks and review mechanisms to ensure our work exceeds expectations.
          </p>
        </div>
      </div>
    </>
  );
};

export default Careers;
