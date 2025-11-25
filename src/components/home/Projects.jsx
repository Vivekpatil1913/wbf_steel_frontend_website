import React, { useEffect, useState } from "react";
import "./Projects.css";

// ✅ Import images directly
import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/3.png";
import img4 from "../../assets/images/4.png";
import img5 from "../../assets/images/pp.png";

const Projects = () => {
  const [projectsData, setProjectsData] = useState(null);

  useEffect(() => {
    const data = {
      featured: {
        title: "WBF Steel",
        subtitle: "Featured Projects",
        image: img1, // ✅ use imported variable
      },
      projects: [
        { title: "Commercial Building USA", image: img2 },
        { title: "Commercial Building, FL USA", image: img3 },
        { title: "Commercial Building, GA USA", image: img4 },
        { title: "Commercial Building, MD USA", image: img5 },
      ],
    };

    setTimeout(() => {
      setProjectsData(data);
    }, 500);
  }, []);

  if (!projectsData) {
    return <div className="loading">Loading projects...</div>;
  }

  return (
    <section className="projects-section">
       <div className="container">
      <div className="projects-grid">
        {/* LEFT MAIN PROJECT */}
        <div className="project-main">
          <img
            src={projectsData.featured.image}
            alt={projectsData.featured.title}
          />
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
      </div>
    </section>
  );
};

export default Projects;
