import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="projects-grid">
        {/* LEFT MAIN PROJECT */}
        <div className="project-main">
          <img src="../../../public/assets/images/1.png" alt="Main Project" />
          <div className="project-overlay center">
            <div className="overlay-content">
              <h2>WBF Steel</h2>
              <p>Featured Projects</p>
              <a href="#" className="btn-yellow">
                VIEW ALL PROJECTS
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT PROJECTS  */}
        <div className="project-side">
          <div className="project-card">
            <img src="../../../public/assets/images/2.png" alt="Commercial Building USA" />
            <p className="card-title">Commercial Building USA</p>
          </div>

          <div className="project-card">
            <img src="../../../public/assets/images/3.png" alt="Commercial Building FL USA" />
            <p className="card-title">Commercial Building, FL USA</p>
          </div>

          <div className="project-card">
            <img src="../../../public/assets/images/4.png" alt="Commercial Building GA USA" />
            <p className="card-title">Commercial Building, GA USA</p>
          </div>

          <div className="project-card">
            <img src="../../../public/assets/images/5.png" alt="Commercial Building MD USA" />
            <p className="card-title">Commercial Building, MD USA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
