import React, { useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { projects } from "../../data/projects";
import "./ProjectProducts2.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import ExpertiseSection from "./ExpertiseSection";

function ProjectProducts2() {
  const [params] = useSearchParams();
  const id = Number(params.get("id")); // get ?id=1

  const project = projects.find((p) => p.id === id);

  // fallback if project not found
  if (!project) return <h2 className="text-center mt-5">Project Not Found</h2>;

  const scrollRef = useRef(null);
  const infoRef = useRef(null);

  const scrollUp = () =>
    scrollRef.current?.scrollBy({ top: -110, behavior: "smooth" });

  const scrollDown = () =>
    scrollRef.current?.scrollBy({ top: 110, behavior: "smooth" });

  const [mainImage, setMainImage] = useState(project.images[0]);

  return (
    <>
      {/* ⭐ Project Tabs (Optional, can be dynamic later) ⭐ */}
      <section className="project-products">
        <div className="container text-center">
          <h2 className="product-title mt-3">Built to Power Your Product</h2>
        </div>
      </section>

      {/* ⭐ Project Details ⭐ */}
      <section className="project-details">
        <div className="white-box">
          <div className="project-container">

            {/* LEFT — THUMBNAILS */}
            <div className="image-list">
              <button className="arrow-btn" onClick={scrollUp}>
                <FontAwesomeIcon icon={faAngleUp} className="thumb-arrow" />
              </button>

              <div className="image-thumbnails" ref={scrollRef}>
                {project.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt=""
                    onClick={() => setMainImage(img)}
                    className={mainImage === img ? "active" : ""}
                  />
                ))}
              </div>

              <button className="arrow-btn" onClick={scrollDown}>
                <FontAwesomeIcon icon={faAngleDown} className="thumb-arrow" />
              </button>
            </div>

            {/* CENTER — MAIN IMAGE + TITLE */}
            <div className="center-column">
              <h2 className="project-title">{project.title}</h2>

              <div className="main-image-holder">
                <img src={mainImage} alt="main" className="main-image" />
              </div>
            </div>

            {/* RIGHT — INFO BOX */}
            <div className="info-box">
              <div className="info-box-content" ref={infoRef}>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ExpertiseSection />
    </>
  );
}

export default ProjectProducts2;
