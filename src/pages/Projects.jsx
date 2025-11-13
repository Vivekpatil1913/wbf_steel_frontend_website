import React from 'react'
import '../css/project.css'

import com_img from '../../public/assets/project img/Commercial_img.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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


import Slider from "react-slick";
const images = [
  com_img,
  com_img,
  com_img,
  com_img,
  com_img,
  com_img,
];

function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
  return (
    <>

      <h1 className='text-center head_project mt-3 mb-3'>Built to Power Your Product</h1>
      <div className='container'>
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation ">
            <button class="nav-link active" id="project1-tab" data-bs-toggle="pill" data-bs-target="#project1" type="button" role="tab" aria-controls="project1" aria-selected="true">Project 1</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="project2-tab" data-bs-toggle="pill" data-bs-target="#project2" type="button" role="tab" aria-controls="project2" aria-selected="false">Project 2</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="project3-tab" data-bs-toggle="pill" data-bs-target="#project3" type="button" role="tab" aria-controls="project3" aria-selected="false">Project 3</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="project4-tab" data-bs-toggle="pill" data-bs-target="#project4" type="button" role="tab" aria-controls="project4" aria-selected="false">Project 4</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="project5-tab" data-bs-toggle="pill" data-bs-target="#project5" type="button" role="tab" aria-controls="project5" aria-selected="false">Project 5</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="project6-tab" data-bs-toggle="pill" data-bs-target="#project6" type="button" role="tab" aria-controls="project6" aria-selected="false">Project 6</button>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade show active " id="project1" role="tabpanel" aria-labelledby="project1-tab">
            {/* <div class="card mt-5 mb-5">
              <div class="card-body">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-lg-3 col-md-4 col-12">

                      One of three columns
                    </div>
                    <div class="col-lg-5 col-md-4 col-12">
                      One of three columns
                    </div>
                    <div class="col-lg-4 col-md-4 col-12">
                      One of three columns
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            <div class="card mt-3 mb-3 border-top-dashed-custom" >
              <div class="card-body">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-5 col-md-5 col-sm-12">
                      <p className='work_proces_text'>We work across the <b>world</b></p>
                      <p className='conactus_name mt-3'>Connect with Us</p>
                      <p className='para_conatc'>Contact WBF Steel for professional advice on steel detailing and industry best
                        Practices</p>
                      <p className='get_in_touch mt-5'>Get in Touch <i class="fa-solid fa-up-right-from-square ml-3"></i></p>
                    </div>
                    <div class="col-lg-7 col-md-7 col-sm-12">
                      <div class="card our_experties mt-4 mb-4">
                        <div class="card-body">
                          <p className='para_experites'>Our Expertise Lies In</p>
                          <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-6'>
                              <img src={brand1} className="img-fluid mx-auto d-block" />
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-6'>
                              <img src={brand2} className="img-fluid mx-auto d-block" />
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-6'>
                              <img src={brand3} className="img-fluid mx-auto d-block" />
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-6'>
                              <img src={brand4} className="img-fluid mx-auto d-block" />
                            </div>

                            <img src={brand5} className="img-fluid" alt="brand" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '60%', height: '60%' }} />


                          </div>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="tab-pane fade" id="project2" role="tabpanel" aria-labelledby="project2-tab">

            <div className="row justify-content-center">
              {productdata.length === 1 ? (
                // If only ONE product, center it
                <div className="col-lg-4 col-md-6 col-sm-12 text-center">
                  <img src={productdata[0].product_img} className="img-fluid img_product" />
                  <p className="product_name mt-3">{productdata[0].text}</p>
                </div>
              ) : (
                // Otherwise, show all normally
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
                      <p className='para_card mt-3'>Contact WBF Steel for professional advice on steel detailing and industry best
                        Practices</p>
                    </div>
                  </div>


                </div>
              </div>
            </div>

          </div>
          <div class="tab-pane fade" id="project3" role="tabpanel" aria-labelledby="project3-tab">Project 3</div>
          <div class="tab-pane fade" id="project4" role="tabpanel" aria-labelledby="project4-tab">Project 4</div>
          <div class="tab-pane fade" id="project5" role="tabpanel" aria-labelledby="project5-tab">Project 5</div>
          <div class="tab-pane fade" id="project6" role="tabpanel" aria-labelledby="project6-tab">Project 6</div>
        </div>

      </div>
    </>
  )
}

export default Projects

