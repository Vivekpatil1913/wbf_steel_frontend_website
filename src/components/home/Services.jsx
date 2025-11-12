import React from "react";
import "./Services.css";

function Services() {
  return (
    <section className="services-section py-5">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="row justify-content-center">
          {/* Service Card 1  */}
          <div className="col-md-6 col-sm-12 mb-4">
            <div className="service-card yellow-card shadow-sm">
              <div className="service-icon">
                <i className="bi bi-exclamation-triangle-fill"></i>
              </div>
              <h4 className="service-title">
                Structural & Miscellaneous Steel
              </h4>
              <p className="service-text">
                Structural steel is utilized in construction or building
                projects. Structural steel is considered as steel shaped for use
                in development of projects.
              </p>
              <a href="#" className="service-link">
                READ MORE
              </a>
            </div>
          </div>

          {/*  Service Card 2 */}
          <div className="col-md-6 col-sm-12 mb-4">
            <div className="service-card blue-card shadow-sm">
              <div className="service-icon">
                <i className="bi bi-building"></i>
              </div>
              <h4 className="service-title">Pre-Engineered Metal Building</h4>
              <p className="service-text">
                With regards to Pre-Engineered Metal Buildings and detailing, we
                work on projects that consist of both simple and highly compound
                ones.
              </p>
              <a href="#" className="service-link">
                READ MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
