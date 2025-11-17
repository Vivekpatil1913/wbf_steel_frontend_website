import React from "react";
import "./ExpertiseSection.css";

// Import your logos here
import draftsight from "../../assets/images/draft.png";
import autocad from "../../assets/images/auto.png";
import tekla from "../../assets/images/tekla.png";
import rebard from "../../assets/images/rebar.png";
import sds2 from "../../assets/images/rebar.png";

function ExpertiseSection() {
  return (
    <section className="expertise-section">
      <div className="expertise-container">
        {/* Left Text Section */}
        <div className="expertise-left">
          <h2>
            We work across <br /> the <span>world</span>
          </h2>
          <h3>Connect with Us</h3>
          <p>
            Contact WBF Steel for <br></br> professional advice on steel <br></br> detailing and
            industry best <br></br>practices.
          </p>
          <a href="AboutUs" className="learn-more">
            Get in Touch <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>

        {/* Right Expertise Logos Section */}
        <div className="expertise-right">
          <h3>Our Expertise Lies In</h3>
          <div className="logo-grid">
            <img src={draftsight} alt="DraftSight" />
            <img src={autocad} alt="AutoCAD" />
            <img src={tekla} alt="Tekla" />
            <img src={rebard} alt="RebarCAD" />
            <img src={sds2} alt="SDS/2" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExpertiseSection;
