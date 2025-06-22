import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation

const Careers = () => {
  // State to manage form data for controlled components
  const [formData, setFormData] = useState({
    applicant_name: '',
    email: '',
    mobile: '',
    position: '',
    resume: null, // To store the file object
  });
  const [submissionSuccess, setSubmissionSuccess] = useState(false); // State to show success message
  const [submissionError, setSubmissionError] = useState(false); // State to show error message

  const navigate = useNavigate(); // Hook for programmatic navigation

  // Handler for all input changes (text and file)
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? files[0] : value, // If it's a file input, store the file object; otherwise, store the value
    }));
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // <<< THIS IS CRITICAL: Prevents the default browser form refresh/redirect

    setSubmissionSuccess(false); // Reset messages before new submission attempt
    setSubmissionError(false);

    const form = e.target; // Get the form DOM element from the event
    const data = new FormData(form); // Create a FormData object from the form

    // Append the hidden form-name field. Netlify needs this to identify the form during JavaScript submissions.
    data.append("form-name", "job-application");
    // Append the honeypot field. Important for bot protection.
    data.append("bot-field", "");

    try {
      // Send the form data to Netlify. The URL is typically the root for SPA forms when using fetch.
      // Netlify's backend will detect the form based on 'name' and 'data-netlify' attributes in the deployed HTML.
      const response = await fetch('/', {// Use form.action if defined, otherwise default to '/'
        method: 'POST',
        // DO NOT manually set Content-Type header when sending FormData with file uploads.
        // The fetch API and FormData object will automatically set the correct 'multipart/form-data' header with boundary.
        body: data, // Pass the FormData object directly for file uploads and other fields
      });

      if (response.ok) {
        console.log('Form successfully submitted to Netlify!');
        setSubmissionSuccess(true);
        // Navigate programmatically to the Thank You page using React Router (HashRouter will handle the #)
        navigate('/thank-you'); // Navigate to the path defined in your AppLayout for the ThankYou component

        // Optionally, clear the form fields after successful submission
        setFormData({
          applicant_name: '',
          email: '',
          mobile: '',
          position: '',
          resume: null,
        });
        e.target.reset(); // Resets all form fields, including file inputs
      } else {
        // Log errors from Netlify's response if the submission failed
        console.error('Form submission failed:', response.status, response.statusText);
        setSubmissionError(true);
        // Attempt to read response body for more details
        const errorText = await response.text();
        console.error('Response body:', errorText);
      }
    } catch (error) {
      // Catch network errors or issues with the fetch request itself
      console.error('Network or submission error:', error);
      setSubmissionError(true);
    }
  };

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
              action="/pages/ThankYou" // This action is still useful for Netlify's form detection at build time.
                                     // For client-side JS submission, the onSubmit handler takes precedence.
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              encType="multipart/form-data"
              onSubmit={handleSubmit} 
            >
              {/* Required for Netlify form processing, especially for React/JS forms */}
              <input type="hidden" name="form-name" value="job-application" />
              {/* Honeypot field for bots, should be empty */}
              <input type="hidden" name="bot-field" />

              <div className="form-row">
                <label className="form-label" htmlFor="applicant-name">Name*</label>
                <input
                  type="text"
                  id="applicant-name"
                  name="applicant_name"
                  className="form-input"
                  required
                  value={formData.applicant_name} // Controlled component: value from state
                  onChange={handleChange} // Update state on change
                />
              </div>

              <div className="form-row">
                <label className="form-label" htmlFor="email-address">Email Address*</label>
                <input
                  type="email"
                  id="email-address"
                  name="email"
                  className="form-input"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row">
                <label className="form-label" htmlFor="phone-number">Mobile Number*</label>
                <input
                  type="tel"
                  id="phone-number"
                  name="mobile"
                  className="form-input"
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row">
                <label className="form-label" htmlFor="job-position">Post Applied For*</label>
                <input
                  type="text"
                  id="job-position"
                  name="position"
                  className="form-input"
                  required
                  value={formData.position}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row">
                <label className="form-label" htmlFor="resume-upload">
                  CV / Resume* <span className="small">(Should not exceed 500kb)</span>
                </label>
                <input
                  type="file"
                  id="resume-upload"
                  name="resume"
                  className="form-file"
                  required
                  onChange={handleChange} // File inputs don't use 'value' prop for controlled behavior
                />
              </div>

              <button type="submit" className="form-button">Apply Now</button>

              {/* Display submission status messages */}
              {submissionSuccess && <p style={{ color: 'green', marginTop: '10px' }}>Application submitted successfully! Redirecting...</p>}
              {submissionError && <p style={{ color: 'red', marginTop: '10px' }}>There was an error submitting your application. Please try again.</p>}
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