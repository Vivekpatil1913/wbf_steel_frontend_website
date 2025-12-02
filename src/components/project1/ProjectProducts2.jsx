import React, { useState, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import "./ProjectProducts2.css";
import ExpertiseSection from "./ExpertiseSection";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

function ProjectProducts2() {
  const [params] = useSearchParams();
  const id = params.get("id");

  const scrollRef = useRef(null);
  const infoRef = useRef(null);

  const [project, setProject] = useState(null);
  const [projectDetails, setProjectDetails] = useState(null);
  const [mainImage, setMainImage] = useState("");

  // Load basic meta from ProjectProducts1
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("projectData"));
    setProjectDetails(stored);
  }, []);

  // Fetch full details including images
  useEffect(() => {
    if (!id) return;

    const loadDetails = async () => {
      try {
        const res = await axios.get(`/projectDetailsWithImages/projects/${id}`);
        const data = res.data;

        const parsed = {
          ...data,
          project_images:
            typeof data.project_images === "string"
              ? JSON.parse(data.project_images)
              : data.project_images,
        };

        setProject(parsed);
        setMainImage(parsed.project_images[0]);
      } catch (err) {
        console.log("Project Details Error:", err);
      }
    };

    loadDetails();
  }, [id]);

  if (!projectDetails) {
    return <h2 className="text-center mt-5">Project Not Found</h2>;
  }

  return (
    <>
      <section className="project-products">
        <div className="container text-center">
          <h2 className="product-title mt-3">Built to Power Your Product</h2>
        </div>
      </section>

      <section className="project-details">
        <div className="white-box">
          <div className="project-container">

            {/* LEFT : Thumbnails */}
            <div className="image-list">
              <button className="arrow-btn" onClick={() => scrollRef.current.scrollBy({ top: -120, behavior: "smooth" })}>
                <FontAwesomeIcon icon={faAngleUp} />
              </button>

              <div className="image-thumbnails" ref={scrollRef}>
                {project?.project_images?.map((img, i) => (
                  <img
                    key={i}
                    src={`${axios.defaults.baseURL}${img}`}
                    className={mainImage === img ? "active" : ""}
                    onClick={() => setMainImage(img)}
                  />
                ))}
              </div>

              <button className="arrow-btn" onClick={() => scrollRef.current.scrollBy({ top: 120, behavior: "smooth" })}>
                <FontAwesomeIcon icon={faAngleDown} />
              </button>
            </div>

            {/* CENTER: Main Image */}
            <div className="center-column">
              <h2 className="project-title">{projectDetails.project_name}</h2>

              <div className="main-image-holder">
                <img
                  src={`${axios.defaults.baseURL}${mainImage}`}
                  className="main-image"
                />
              </div>
            </div>

            {/* RIGHT: Info Box */}
            <div className="info-box">
              <div className="info-box-content" ref={infoRef}>
                <p>{projectDetails.project_info}</p>

                <h5><strong>Location:</strong> {projectDetails.project_location}</h5>
                <h5><strong>Total Tonnage:</strong> {projectDetails.project_total_tonnage}</h5>
                <h5><strong>Year:</strong> {projectDetails.project_year_of_completion}</h5>
                <h5><strong>Status:</strong> {projectDetails.project_status}</h5>
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
