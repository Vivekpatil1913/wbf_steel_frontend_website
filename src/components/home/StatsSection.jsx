import React from "react";
import "./StatsSection.css";

function StatsSection() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-box">
          <div className="row align-items-center">
            {/*  LEFT TEXT */}
            <div className="col-lg-4 col-md-12 text-lg-start text-center mb-4 mb-lg-0">
              <h2 className="stats-title">WBF Steel</h2>
              <p className="stats-subtitle">Detailing in Numbers</p>
              <a href="#" className="get-in-touch">
                Get in Touch <i className="bi bi-box-arrow-up-right"></i>
              </a>
            </div>

            {/*  RIGHT STATS  */}
            <div className="col-lg-8 col-md-12">
              <div className="stats-grid">
                {/* Row 1 */}
                <div className="stats-row">
                  <div className="stat-item">
                    <div className="stat-header">
                      <i className="bi bi-people-fill"></i>
                      <h3>118 +</h3>
                    </div>
                    <p>EXPERT EMPLOYED</p>
                  </div>

                  <div className="vertical-line"></div>

                  <div className="stat-item">
                    <div className="stat-header">
                      <i className="bi bi-clipboard-data"></i>
                      <h3>900 +</h3>
                    </div>
                    <p>WORK PLATFORMS</p>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="stats-row single">
                  <div className="stat-item">
                    <div className="stat-header">
                      <i className="bi bi-globe"></i>
                      <h3>99 +</h3>
                    </div>
                    <p>CLIENTS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
