import React, { useState } from "react";
import "./ContactSection.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccessMessage("Thank you! Your message has been sent successfully.");
    setFormData({
      name: "",
      email: "",
      mobile: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-wrapper row">
          {/* LEFT FORM */}
          <div className="col-lg-6 col-md-12 mb-5 mb-lg-0">
            <div className="contact-form-box">
              <h2 className="contact-form-title">GET IN TOUCH</h2>
              <p className="contact-form-subtitle">
                Your Product Goals, Our Proven Solutions. Let’s Build Together.
              </p>

              <form className="contact-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <div className="half-inputs">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email ID"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="mobile"
                    placeholder="Mobile No"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />

                <textarea
                  name="message"
                  placeholder="Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>

                <button type="submit" className="submit-btn">
                  Submit
                </button>

                {successMessage && (
                  <p className="success-message">{successMessage}</p>
                )}
              </form>
            </div>
          </div>

          {/* RIGHT INFO */}
          <div className="col-lg-6 col-md-12">
            <div className="contact-info">
              <h3>Your Connection to Quality 
                <br></br>Manufacturing Starts
                <br></br> Here.</h3>
              <p>
                With decades of experience in manufacturing switchgear, busbars,
                laminations, and transformers, we are trusted by clients across
                industries and continents.
                <br></br>
                Have questions about our products or
                services? Reach out to us and we’ll get back to you with the
                right solution.
              </p>

              {/* Address & Email Row */}
              <div className="info-row">
                <div className="info-block">
                  <h5>Our Address</h5>
                  <p>
                    423/17; Talegaon Industrial Area, Igatpuri, Nashik 422 403,
                    Maharashtra, India
                  </p>
                </div>

                <div className="info-block">
                  <h5>Email</h5>
                  <p>info@wellproducts.co.in</p>
                  <p>support@wellproducts.co.in</p>
                </div>
              </div>

              {/* Social & Contact Row */}
              <div className="info-row">
                <div className="info-block">
                  <h5>Social Network</h5>
                  <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                      <img src="../../../public/assets/icons/logos_facebook.png" alt="Facebook" className="social-icon-img" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <img src="../../../public/assets/icons/insta.png" alt="Instagram" className="social-icon-img" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <img src="../../../public/assets/icons/Group.png" alt="LinkedIn" className="social-icon-img" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <img src="../../../public/assets/icons/logos_whatsapp-icon.png" alt="Twitter" className="social-icon-img" />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                      <img src="../../../public/assets/icons/mail.png" alt="YouTube" className="social-icon-img" />
                    </a>
                  </div>
                </div>

                <div className="info-block">
                  <h5>Contact</h5>
                  <p>+91 8564-0000-00</p>
                  <p>+91 4658-0000-00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
