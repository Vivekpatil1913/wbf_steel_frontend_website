import React, { useRef, useState } from 'react'
import '../css/project.css'

import com_img from '../../public/assets/project img/Commercial_img.png'


import brand1 from '../../public/assets/project img/brand1.png'
import brand2 from '../../public/assets/project img/brand2.png'
import brand3 from '../../public/assets/project img/brand3.png'
import brand4 from '../../public/assets/project img/brand4.png'
import brand5 from '../../public/assets/project img/brand5.png'


import product1 from '../../public/assets/project img/project_page2/product1.png'
import product2 from '../../public/assets/project img/project_page2/product2.png'
import product3 from '../../public/assets/project img/project_page2/product3.png'
import product4 from '../../public/assets/project img/project_page2/product4.png'
import product5 from '../../public/assets/project img/project_page2/product5.png'
import product6 from '../../public/assets/project img/project_page2/product6.png'
import product7 from '../../public/assets/project img/project_page2/product7.png'
import product8 from '../../public/assets/project img/project_page2/product8.png'
import product9 from '../../public/assets/project img/project_page2/product9.png'
import product10 from '../../public/assets/project img/project_page2/product10.png'

import Card from 'react-bootstrap/Card';

import project_banner from '../../public/assets/project img/project_banner.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from 'react-router-dom'



function Projects() {

  const sliderRefs = useRef([]);   // store refs for each project


  const MAX_LENGTH = 287;

  const paradata = [
    {
      text:
        "Located in Georgia, USA, WBF Steel Company specializes in commercial building projects. The company provides high-quality structural steel fabrication, design, and erection services for industrial and commercial constructions. Known for durability, precision, and timely project delivery"
    }
  ];

  const isLong = paradata[0].text.length > MAX_LENGTH;

  const truncatedText = isLong
    ? paradata[0].text.substring(0, MAX_LENGTH)
    : paradata[0].text;



  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 576, // MOBILE VIEW
        settings: {
          vertical: false,           // horizontal sliding
          verticalSwiping: false,
          slidesToShow: 2,           // show 2 images at a time
          slidesToScroll: 1,
          swipeToSlide: true,
          centerMode: false,
        }
      }
    ]
  };


  const productdata = [
    {
      product_img: product1,
      text: "Commercial Building, GA USA"
    },
    {
      product_img: product2,
      text: "Commercial Building, LA USA"
    },
    {
      product_img: product3,
      text: "Commercial Building, MD USA"
    },
    {
      product_img: product4,
      text: "Commercial Building, FL USA"
    },
    {
      product_img: product5,
      text: "Commercial Building USA"
    },
    {
      product_img: product6,
      text: "Industrial Building, AR USA"
    },
    {
      product_img: product7,
      text: "Commercial Building, FL USA"
    },
    {
      product_img: product8,
      text: "Commercial Building, IL USA"
    },
    {
      product_img: product9,
      text: "Commercial Building, FL USA"
    },
    {
      product_img: product10,
      text: "Commercial Building, MD USA"
    },

  ]

  const images = [
    product1, product2, product3, product4, product5, product7
  ];

  const projects = [
    {
      name: "Project 1",
      location: "Commercial Building, GA USA",
      description: "Located in Georgia, USA, WBF Steel Company specializes in commercial building projects. The company provides high-quality structural steel fabrication, design, and erection services for industrial and commercial constructions. Known for durability, precision, and timely project delivery",
      mainImage: product1,

      sliderImages: [product1, product2, product3, product3]
    },
    {
      name: "Project 2",
      location: "Commercial Test, GA USA",
      description: "Located in Georgia, USA, WBF Steel Company specializes in commercial building projects. The company provides high-quality structural steel fabrication, design, and erection services for industrial and commercial constructions. Known for durability, precision, and timely project delivery ",
      mainImage: product10,

      sliderImages: [product10, product5, product8, product9, product7]
    },



  ];


  const [showProductSection, setShowProductSection] = useState(false);



  return (
    <>
      <img src={project_banner} class="img-fluid" alt="project_img" width={'100%'}/>
      <h1 className='text-center head_project mt-3 mb-3'>Built to Power Your Product</h1>
      <div className='container'>
        <div className="tabs-wrapper">
          <ul
            className={`nav nav-pills mb-3 tab-scroll ${projects.length === 1 ? "single-tab" : ""
              }`}
            id="pills-tab"
            role="tablist"
          >
            {projects.map((project, index) => (
              <li className="nav-item" role="presentation" key={index}>
                <button
                  className={`nav-link w-100 text-center ${index === 0 ? "active" : ""
                    }`}
                  id={`project${index}-tab`}
                  data-bs-toggle="pill"
                  data-bs-target={`#project${index}`}
                  type="button"
                  role="tab"
                  aria-controls={`project${index}`}
                  aria-selected={index === 0}
                >
                  {project.name}
                </button>
              </li>
            ))}
          </ul>
        </div>







        {!showProductSection && (
          <>
            <div className="tab-content" id="pills-tabContent">
              {projects.map((project, index) => (
                <div
                  className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
                  id={`project${index}`}
                  role="tabpanel"
                  aria-labelledby={`project${index}-tab`}
                  key={index}
                >
                  <Card className='main_card'>
                    <Card.Body>
                      <div className="row card-row">

                        {/* Column 1 - Slider */}
                        <div className="col-lg-3 col-md-3 col-sm-12 slider-col mt-3 mb-3">
                          <button
                            className="custom-btn slider-btn top-btn"
                            onClick={() => sliderRefs.current[index]?.slickPrev()}
                          >
                            <i class="fa-solid fa-arrow-up"></i>
                          </button>

                          <div className="slider-wrapper">
                            <Slider
                              ref={(el) => (sliderRefs.current[index] = el)}
                              {...sliderSettings}
                            >
                              {project.sliderImages.map((img, i) => (
                                <div key={i} className="slider-item">
                                  <img src={img} className="img-fluid slide-img" alt="slide" />
                                </div>
                              ))}
                            </Slider>
                          </div>

                          <button
                            className="custom-btn slider-btn bottom-btn"
                            onClick={() => sliderRefs.current[index]?.slickNext()}
                          >
                            <i class="fa-solid fa-arrow-down"></i>
                          </button>
                        </div>

                        {/* Column 2 */}
                        <div className="col-lg-4 col-md-4 col-sm-12 p-0 m-0">
                          <p className="Commercial_name">{project.location}</p>
                          <img src={project.mainImage} height="320" width="100%" className="product_img" />
                        </div>

                        {/* Column 3 */}
                        <div className="col-lg-5 col-md-5 col-sm-12 text-box">
                          <div className="para_background">
                            <p>
                              {project.description.length > MAX_LENGTH
                                ? project.description.substring(0, MAX_LENGTH)
                                : project.description}

                              {project.description.length > MAX_LENGTH && (
                                <FaExternalLinkAlt
                                  className="external-icon"
                                  onClick={() => setShowProductSection(true)}
                                  style={{ cursor: "pointer" }}
                                />
                              )}
                            </p>
                          </div>
                        </div>

                      </div>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>

            {/* Bottom WBF Section */}
            <div class="card mt-5 mb-3 border-top-dashed-custom mb-5">
              <div class="card-body">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-5 col-md-5 col-sm-12">
                      <p className='work_proces_text'>We work across the <b>world</b></p>
                      <p className='conactus_name mt-3'>Connect with Us</p>
                      <p className='para_conatc'>Contact WBF Steel for professional advice on steel detailing</p>
                      <p className='get_in_touch mt-5'>Get in Touch <i class="fa-solid fa-up-right-from-square ml-3"></i></p>
                    </div>

                    <div class="col-lg-7 col-md-7 col-sm-12 experties-card-wrapper">
                      <Card className="experties-card">
                        <Card.Body>
                          <p className='experties text-center'>Our Expertise Lies In</p>

                          <div className="brands-wrapper">
                            {[brand1, brand2, brand3, brand4, brand5].map((img, i) => (
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
        )}


        {showProductSection && (
          <>
            <div className="row justify-content-center">
              {productdata.length === 1 ? (
                <div className="col-lg-4 col-md-6 col-sm-12 text-center">
                  <img src={productdata[0].product_img} className="img-fluid img_product" />
                  <p className="product_name mt-3">{productdata[0].text}</p>
                </div>
              ) : (
                productdata.map((a, index) => (
                  <div key={index} className="col-lg-4 col-md-6 col-sm-12 text-center">
                    <div className="img_container">
                      <img src={a.product_img} className="img-fluid img_product" />
                    </div>
                    <p className="product_name mt-3">{a.text}</p>
                  </div>
                ))
              )}
            </div>

            <div class="card product2_buttom_card mb-3">
              <div class="card-body">
                <div className='container'>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 border-right-column ">
                      <h2 className='wbf_steel_name '>WBF Steel</h2>
                      <p className='Detailing_num'>Detailing in Numbers</p>
                      <p className='gettouch mt-3'><b>Get in Touch</b> <i class="fa-solid fa-square-arrow-up-right ml-2"></i></p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 colou2">
                      <p className='workingpara'>We work across the <b className='bold_work'>world</b></p>
                      <p className='para_card mt-3'>Contact WBF Steel for professional advice on steel detailing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

      </div>
    </>
  )
}

export default Projects


