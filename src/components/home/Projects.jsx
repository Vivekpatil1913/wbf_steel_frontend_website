import React, { useEffect, useState } from "react";
import "./Projects.css";

const Projects = () => {
  const [projectsData, setProjectsData] = useState(null);

  useEffect(() => {
    // Simulate backend call for now (replace with fetch/axios later)
    const data = {
      featured: {
        title: "WBF Steel",
        subtitle: "Featured Projects",
        image: "../../../public/assets/images/1.png"
      },
      projects: [
        {
          title: "Commercial Building USA",
          image: "../../../public/assets/images/2.png"
        },
        {
          title: "Commercial Building, FL USA",
          image: "../../../public/assets/images/3.png"
        },
        {
          title: "Commercial Building, GA USA",
          image: "../../../public/assets/images/4.png"
        },
        {
          title: "Commercial Building, MD USA",
          image: "../../../public/assets/images/5.png"
        }
      ]
    };

    // Mimic async load
    setTimeout(() => {
      setProjectsData(data);
    }, 500);
  }, []);

  if (!projectsData) {
    return <div className="loading">Loading projects...</div>;
  }

  return (
    <section className="projects-section">
      <div className="projects-grid">
        {/* LEFT MAIN PROJECT */}
        <div className="project-main">
          <img src={projectsData.featured.image} alt={projectsData.featured.title} />
          <div className="project-overlay center">
            <div className="overlay-content">
              <h2>{projectsData.featured.title}</h2>
              <p>{projectsData.featured.subtitle}</p>
              <a href="#" className="btn-yellow">
                VIEW ALL PROJECTS
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT PROJECTS */}
        <div className="project-side">
          {projectsData.projects.map((item, index) => (
            <div key={index} className="project-card">
              <img src={item.image} alt={item.title} />
              <p className="card-title">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
