import React, { useState } from "react";
import "./CareersSections.css";

const CareersSections = () => {
  const [mobile, setMobile] = useState("");
  const [fileName, setFileName] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  // 📌 TRUNCATE TEXT HELPER
  const truncate = (str, max = 20) => {
    return str.length > max ? str.substring(0, max) + "..." : str;
  };

  // 📌 FILE NAME TRUNCATION
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(truncate(file.name, 18));
    }
  };

  // 📌 MESSAGE LIMIT (250 chars)
  const handleMessageChange = (e) => {
    const text = e.target.value;
    if (text.length <= 250) {
      setMessage(text);
    }
  };

  // 📌 FINAL FORM VALIDATION + RESET
  const validateForm = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (mobile === "" || errors.mobile)
      newErrors.mobile = "Enter a valid mobile number";
    if (message.trim().length < 5) newErrors.message = "Message is too short";
    if (!fileName) newErrors.file = "Please upload CV";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form Submitted Successfully!");

      // ✅ CLEAR ALL FIELDS AFTER SUCCESS
      setMobile("");
      setFileName("");
      setMessage("");
      setName("");
      setEmail("");
      setSubject("");
      setErrors({});
      
      // also reset actual file input
      document.getElementById("fileInput").value = "";
    }
  };

  return (
    <>
   
           {/* WHY WORK WITH US */}
      <section className="why-work">
        <h2>Why Work With Us?</h2>
        <p className="why-sub">
          With Decades Of Experience In Manufacturing Switchgear, Busbars,{" "}
          <br></br>
          Laminations, And Transformers, We Are Trusted By Clients Across
          Industries <br></br> And Continents.
        </p>

        <div className="why-grid">
          <div className="why-item">
            <h3>Strong Industry Presence</h3>
            <p>
              With Decades Of Experience In Manufacturing Switchgear, Busbars,
              Laminations, And Transformers, We Are Trusted By Clients Across
              Industries And Continents.
            </p>
          </div>

          <div className="why-item">
            <h3>Growth Opportunities</h3>
            <p>
              We Offer A Clear Path For Professional Growth — Whether You're A
              Skilled Technician Or A Young Engineer, Your Journey Here Is Full
              Of Learning And Leadership.
            </p>
          </div>

          <div className="why-item">
            <h3>Global Exposure</h3>
            <p>
              Be A Part Of An Export-Driven Organization With Clients Across
              Asia, Europe, And Beyond — Experience International Standards,
              Audits, And Projects.
            </p>
          </div>
        </div>
      </section>

  

       
      <section className="career-section">
        <h2 className="text-center job-title">Currently Job Openings</h2>

        <div className="career-box container">
          <h5 className="text-center join-title">Join Our Team</h5>

          <form className="career-form" onSubmit={validateForm}>
            <h6 className="form-heading">UPLOAD YOUR CV</h6>

            {/* Name + Email */}
            <div className="row mb-3">
              <div className="col-md-6">
                <label>Name :</label>
                <input 
                  className="form-control" 
                  type="text" 
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  required 
                />
              </div>

              <div className="col-md-6">
                <label>Email Id:</label>
                <input 
                  className="form-control" 
                  type="email" 
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  required 
                />
              </div>
            </div>

            {/* Mobile + Subject */}
            <div className="row mb-3">
              <div className="col-md-6">
                <label>Email/Mobile Number With Country Code :</label>

                <input
                  className="form-control"
                  type="text"
                  value={mobile}
                  onChange={(e) => {
                    const value = e.target.value;
                    setMobile(value);

                    if (
                      !value.startsWith("+91") &&
                      !value.startsWith("+1") &&
                      value !== ""
                    ) {
                      setErrors((prev) => ({
                        ...prev,
                        mobile: "Must start with +91 (India) or +1 (USA)",
                      }));
                    } else {
                      setErrors((prev) => ({ ...prev, mobile: "" }));
                    }
                  }}
                />

                <small className="example-text">
                  (E.g. +91xxxxxxxxxx For India, +1 XXX XXX-XXXX For US)
                </small>

                {errors.mobile && (
                  <small style={{ color: "red", marginLeft: "10px", fontSize: "11px" }}>
                    {errors.mobile}
                  </small>
                )}
              </div>

              <div className="col-md-6">
                <label>Subject:</label>
                <input 
                  className="form-control" 
                  type="text" 
                  value={subject}
                  onChange={(e)=>setSubject(e.target.value)}
                  required 
                />
              </div>
            </div>

            {/* File Upload */}
            <label>Upload CV</label>
            <div className="d-flex gap-2 mb-3">
              <input
                id="fileInput"
                type="file"
                className="form-control file-area"
                onChange={handleFileChange}
              />
              <button type="button" className="choose-btn">
                CHOOSE FILE
              </button>
            </div>

            {fileName && (
              <small style={{ marginLeft: "10px", color: "#555" }}>
                {fileName}
              </small>
            )}
            {errors.file && (
              <small style={{ color: "red", marginLeft: "10px" }}>
                {errors.file}
              </small>
            )}

            {/* Message */}
            <label>Messages</label>
            <textarea
              rows="4"
              className="form-control mb-4"
              value={message}
              onChange={handleMessageChange}
              placeholder="Write your message (Max 250 chars)"
            ></textarea>

            <small style={{ marginLeft: "10px", color: "#777" }}>
              {message.length}/250
            </small>

            {errors.message && (
              <p style={{ color: "red", marginLeft: "10px" }}>
                {errors.message}
              </p>
            )}

            {/* reCAPTCHA + Submit same row */}
            <div className="recaptcha-submit-row">
              <div className="g-recaptcha" data-sitekey="YOUR_SITE_KEY"></div>

              <button className="submit-btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default CareersSections;
