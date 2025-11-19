import React, { useState } from "react";
import "./ContactSection.css";

import facebookIcon from "../../assets/icons/logos_facebook.png";
import instaIcon from "../../assets/icons/insta.png";
import linkedinIcon from "../../assets/icons/Group.png";
import whatsappIcon from "../../assets/icons/logos_whatsapp-icon.png";
import mailIcon from "../../assets/icons/mail.png";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    // Live validation
    setErrors((prev) => {
      const updated = { ...prev };

      // Name
      if (name === "name") {
        updated.name = value.trim() ? "" : "Name is required.";
      }

      // Email
      if (name === "email") {
        if (!value.trim()) {
          updated.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          updated.email = "Enter a valid email address.";
        } else {
          updated.email = "";
        }
      }

      // Mobile
      if (name === "mobile") {
        if (!value.trim()) {
          updated.mobile = "Mobile number is required.";
        } else if (!/^[0-9]{10}$/.test(value)) {
          updated.mobile = "Mobile number must be 10 digits.";
        } else {
          updated.mobile = "";
        }
      }

      // Subject
      if (name === "subject") {
        updated.subject = value.trim() ? "" : "Subject is required.";
      }

      // Message
      // Message
      if (name === "message") {
        if (!value.trim()) {
          updated.message = "Message is required.";
        } else if (value.length > 250) {
          updated.message = "Message cannot exceed 250 characters.";
        } else {
          updated.message = "";
        }
      }

      return updated;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Please enter Name.";
    if (!formData.email.trim()) newErrors.email = "Please enter Email.";
    if (!formData.mobile.trim())
      newErrors.mobile = "Please enter Mobile number.";
    if (!formData.subject.trim()) newErrors.subject = "Please enter Subject.";
    if (!formData.message.trim()) newErrors.message = "Please enter Message.";
    if (formData.message.length > 250)
      newErrors.message = "Message cannot exceed 250 characters.";

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailPattern.test(formData.email))
      newErrors.email = "Enter a valid email address.";

    const mobilePattern = /^[0-9]{10}$/;
    if (formData.mobile && !mobilePattern.test(formData.mobile))
      newErrors.mobile = "Mobile number must be 10 digits.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setSuccessMessage("Thank you! Your message has been sent successfully.");

    setFormData({
      name: "",
      email: "",
      mobile: "",
      subject: "",
      message: "",
    });

    setTimeout(() => setSuccessMessage(""), 3000);
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

              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="error-message">{errors.name}</p>}

                <div className="half-inputs">
                  <div style={{ width: "100%" }}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email ID"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <p className="error-message">{errors.email}</p>
                    )}
                  </div>

                  <div style={{ width: "100%" }}>
                    <input
                      type="text"
                      name="mobile"
                      placeholder="Mobile No"
                      value={formData.mobile}
                      onChange={handleChange}
                    />
                    {errors.mobile && (
                      <p className="error-message">{errors.mobile}</p>
                    )}
                  </div>
                </div>

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
                {errors.subject && (
                  <p className="error-message">{errors.subject}</p>
                )}

                <textarea
                  name="message"
                  placeholder="Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <p
                  className={`char-count ${
                    formData.message.length > 250 ? "exceeded" : ""
                  }`}
                >
                  {formData.message.length}/250 
                </p>

                {errors.message && (
                  <p className="error-message">{errors.message}</p>
                )}

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
              <h3>
                Your Connection to Quality
                <br /> Manufacturing Starts
                <br /> Here.
              </h3>
              <p>
                With decades of experience in manufacturing switchgear, busbars,
                laminations, and transformers, we are trusted by clients across
                industries and continents.
                <br />
                Have questions about our products or services? Reach out to us
                and we’ll get back to you with the right solution.
              </p>

              <div className="info-row d-flex flex-wrap justify-content-between">
                <div className="info-block mb-3">
                  <h5>Our Address</h5>
                  <p className="mb-0">
                    423/17; Talegaon Industrial Area, Igatpuri, Nashik 422 403,
                    Maharashtra, India
                  </p>
                </div>

                <div className="info-block mb-3">
                  <h5>Email</h5>
                  <p className="mb-0">info@wellproducts.co.in</p>
                  <p className="mb-0">support@wellproducts.co.in</p>
                </div>
              </div>

              <div className="info-row  justify-content-between align-items-start">
                <div className="info-block">
                  <h5>Social Network</h5>
                  <div className="social-icons flex-wrap">
                    <a href="https://facebook.com" target="_blank">
                      <img
                        src={facebookIcon}
                        alt="Facebook"
                        className="social-icon-img"
                      />
                    </a>
                    <a href="https://instagram.com" target="_blank">
                      <img
                        src={instaIcon}
                        alt="Instagram"
                        className="social-icon-img"
                      />
                    </a>
                    <a href="https://linkedin.com" target="_blank">
                      <img
                        src={linkedinIcon}
                        alt="LinkedIn"
                        className="social-icon-img"
                      />
                    </a>
                    <a href="https://wa.me/918564000000" target="_blank">
                      <img
                        src={whatsappIcon}
                        alt="WhatsApp"
                        className="social-icon-img"
                      />
                    </a>
                    <a href="mailto:info@wellproducts.co.in" target="_blank">
                      <img
                        src={mailIcon}
                        alt="Mail"
                        className="social-icon-img"
                      />
                    </a>
                  </div>
                </div>

                <div className="info-block">
                  <h5>Contact</h5>
                  <p className="mb-0">+91 8564-0000-00</p>
                  <p className="mb-0">+91 4658-0000-00</p>
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
