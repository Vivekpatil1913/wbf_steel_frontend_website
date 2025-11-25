import React, { useState, useRef } from "react";
import "./ProjectProducts2.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

import product1 from "../../assets/projectimg/project_page2/product1.png";
import product2 from "../../assets/projectimg/project_page2/product2.png";
import product3 from "../../assets/projectimg/project_page2/product3.png";
import product4 from "../../assets/projectimg/project_page2/product4.png";
import product5 from "../../assets/projectimg/project_page2/product5.png";
import product6 from "../../assets/projectimg/project_page2/product6.png";

import draftsight from "../../assets/images/draft.png";
import autocad from "../../assets/images/auto.png";
import tekla from "../../assets/images/tekla.png";
import rebard from "../../assets/images/rebar.png";
import sds2 from "../../assets/images/rebar.png";

import { Col, Container, Row, Card } from "react-bootstrap";

function ProjectProducts2() {
  const images = [product1, product2, product3, product4, product5, product6];
  const [mainImage, setMainImage] = useState(product1);

  const scrollRef = useRef(null);
  const infoRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  const scrollUp = () =>
    scrollRef.current?.scrollBy({ top: -110, behavior: "smooth" });

  const scrollDown = () =>
    scrollRef.current?.scrollBy({ top: 110, behavior: "smooth" });

  const toggleInfoScroll = () => {
    if (infoRef.current) {
      if (!scrolled) {
        infoRef.current.scrollTop = infoRef.current.scrollHeight;
      } else {
        infoRef.current.scrollTop = 0;
      }
      setScrolled(!scrolled);
    }
  };

  return (
    <>
      {/* ⭐ PRODUCT TABS SECTION ⭐ */}
      <section className="project-products">
        <div className="container text-center">
          <h2 className="product-title">Built to Power Your Product</h2>

          <div className="product-tabs">
            <button>Project 1</button>
            <button>Project 2</button>
            <button>Project 3</button>
            <button>Project 4</button>
            <button>Project 5</button>
            <button>Project 6</button>
          </div>
        </div>
      </section>

      {/* ⭐ PROJECT DETAILS SECTION ⭐ */}
      <section className="project-details">
        <div className="white-box">
          <div className="project-container">
            {/* LEFT THUMBNAILS */}
            <div className="image-list">
              <button className="arrow-btn" onClick={scrollUp}>
                <FontAwesomeIcon icon={faAngleUp} className="thumb-arrow" />
              </button>

              <div className="image-thumbnails" ref={scrollRef}>
                {images.map((img, i) => (
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

            {/* MAIN IMAGE */}
            <div className="main-image-section">
              <h2 className="project-title">Commercial Building, GA USA</h2>
              <img src={mainImage} alt="main" className="main-image" />
            </div>

            {/* RIGHT INFO BOX */}
            <div className="info-box">
              <div className="info-box-content" ref={infoRef}>
                <p>Located in Georgia, USA, WBF Steel Company specializes in commercial building projects. The company provides high-quality structural steel fabrication, design, and erection services for industrial and commercial constructions. Known for durability, precision, and timely project delivery.</p>
               
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ⭐ SECOND BOTTOM EXPERTISE CARD ⭐ */}
      <div className="card mt-5 mb-5 border-top-dashed-custom">
        <div className="card-body">
          <div className="container">
            <div className="row">

              <div className="col-lg-5">
                <p className="work_proces_text">
                  We work across the <b>world</b>
                </p>
                <p className="conactus_name mt-3">Connect with Us</p>
                <p className="para_conatc">
                  Contact WBF Steel for professional advice on steel detailing
                </p>
                <p className='gettouch mt-3'>
                    <b>Get in Touch</b> <i className="fa-solid fa-square-arrow-up-right ms-2"></i>
                  </p>
              </div>

              <div className="col-lg-7 experties-card-wrapper">
                <Card className="experties-card">
                  <Card.Body>
                    <p className="experties text-center">Our Expertise Lies In</p>

                    <div className="brands-wrapper">
                      {[draftsight, autocad, tekla, rebard, sds2].map((img, i) => (
                        <img key={i} src={img} className="brand-img" alt="brand" />
                      ))}
                    </div>

                  </Card.Body>
                </Card>
              </div>

            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default ProjectProducts2;
