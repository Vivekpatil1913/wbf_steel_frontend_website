import React from "react";
import "./WorkPlatforms.css";
import draftsight from "../../assets/images/draft.png";
import autocad from "../../assets/images/auto.png";
import tekla from "../../assets/images/tekla.png";
import rebars from "../../assets/images/rebar.png";
import sds from "../../assets/images/Sds.png";

const WorkPlatforms = () => {
  return (
    <section className="work-platform-section">
        <div className="work-platform-box">
            <h2 className="work-platform-title">WORK PLATFORM</h2>
              <div className="work-platform-content">
          {/* LEFT SIDE: LOGOS */}
          <div className="work-platform-logos">
            <div className="logo-row">
              <img src={draftsight} alt="DraftSight" />
              <img src={autocad} alt="AutoCAD" />
            </div>
            <div className="logo-row">
              <img src={tekla} alt="Tekla" />
              <img src={rebars} alt="RebarCAD" />
            </div>
            <div className="logo-row single">
              <img src={sds} alt="SDS/2" />
            </div>
          </div>

          {/* DIVIDER */}
          <div className="divider"></div>

          {/* RIGHT SIDE: TEXT CONTENT */}
          <div className="work-platform-text">
            <p>
              Steel access/mezzanine structures; designed per AISC/IS codes;
              includes stairs, rails, grating, connections.
            </p>

            <p>
              <strong>Tools:</strong> Tekla, SDS/2, AutoCAD.
            </p>

            <p>
              <strong>Website:</strong>{" "}
              <a href="https://wbfsteel.com" target="_blank" rel="noopener noreferrer">
                wbfsteel.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkPlatforms;