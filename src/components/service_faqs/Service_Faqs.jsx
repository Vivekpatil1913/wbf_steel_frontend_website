import React from 'react'
import '../../css/service_faq.css'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { SlArrowDown } from "react-icons/sl";
import "../home/WorkPlatforms.css";
import draftsight from "../../assets/images/draft.png";
import autocad from "../../assets/images/auto.png";
import tekla from "../../assets/images/tekla.png";
import rebars from "../../assets/images/rebar.png";
import sds from "../../assets/images/Sds.png";

import CountUp from 'react-countup';
import { Link } from 'react-router-dom';


function Service_Faqs() {
    return (
        <>
            <div className='background_color_faq mt-5 mb-5'>
                <div class="container-fluid  pb-5">
                    <div class="row ">
                        <div class="col-lg-4 col-md-4 col-sm-12 pl-5 pe-5 d-flex flex-column align-items-center faq-column">

                            <p className="count">
                                <CountUp
                                    end={10}
                                    duration={10}
                                    enableScrollSpy
                                    scrollSpyOnce
                                    suffix="+"
                                />
                            </p>
                            <p class="title_colum">Years of <span class="tablet-break">Expertise</span></p>
                            <p class="title_para">A decade of excellence in steel detailing, connection design, and BIM solutions</p>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12 pl-5 pe-5 d-flex flex-column align-items-center faq-column">

                            <p className="count">
                                <CountUp
                                    end={1500}
                                    duration={10}
                                    enableScrollSpy
                                    scrollSpyOnce
                                    suffix="+"
                                />
                            </p>
                            <p class="title_colum">Successful Projects</p>
                            <p class="title_para">Delivered with unmatched precision, optimizing fabrication and installation</p>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12 pl-5 pe-5 d-flex flex-column align-items-center faq-column">

                            <p className="count">
                                <CountUp
                                    end={1500}
                                    duration={10}
                                    enableScrollSpy
                                    scrollSpyOnce
                                    suffix="+"
                                />
                            </p>
                            <p class="title_colum">Tons of Steel Detailed Monthly</p>
                            <p class="title_para">Ensuring efficiency in fabrication and erection processes</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ service */}
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-12 col-lg-6 col-md-6 ">
                        <div className='faq_backimg_service'>
                            <p className='service_FAQ pl-3'>FAQ's</p>
                            <p className='faq_section_para'>Have questions about our steel detailing services?
                                Explore our FAQs for quick answers on workflows, software expertise, and industry standards. For further assistance, reach out to us</p>
                            <div class="contactUs_container">
                                <Link to='/ContactUs'>
                                    <p class="contactUs_name">
                                        <span class="text">Contact Us</span>
                                        <FaExternalLinkAlt className='link-icons ml-2' />
                                    </p>
                                </Link>
                            </div>

                        </div>


                    </div>
                    <div class="col-sm-12 col-lg-6 col-md-6 ">
                        <div class="accordion" id="faqAccordion">

                            <button class="btn backbtn_color" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <span class="icon_box">
                                    <SlArrowDown className="icon_faq" />
                                </span>
                                What types of steel detailing services does WBF Steel provide?
                            </button>

                            <div id="collapseOne" class="collapse show" data-parent="#faqAccordion">
                                <div class="card servicefaq card-body">
                                    We offer structural steel detailing, connection design, miscellaneous steel detailing (stairs, railings, ladders, etc.), BIM & 3D modeling, material take-off & estimation, CNC & fabrication support, and quality control & compliance services.
                                </div>
                            </div>

                            <button class="btn backbtn_color collapsed mt-3" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <span class="icon_box">
                                    <SlArrowDown className="icon_faq" />
                                </span>
                                Do you follow international standards for steel detailing?

                            </button>

                            <div id="collapseTwo" class="collapse" data-parent="#faqAccordion">
                                <div class="card servicefaq card-body">
                                    We offer structural steel detailing, connection design, miscellaneous steel detailing (stairs, railings, ladders, etc.), BIM & 3D modeling, material take-off & estimation, CNC & fabrication support, and quality control & compliance services.

                                </div>
                            </div>

                            <button class="btn backbtn_color collapsed mt-3" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <span class="icon_box">
                                    <SlArrowDown className="icon_faq" />
                                </span>
                                Can you handle large-scale and complex projects?
                            </button>

                            <div id="collapseThree" class="collapse" data-parent="#faqAccordion">
                                <div class="card servicefaq card-body">
                                    We use industry-leading software such as Tekla Structures, AutoCAD, and Revit to deliver precise and efficient steel detailing services.
                                </div>
                            </div>

                            <button class="btn backbtn_color collapsed mt-3" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                <span class="icon_box">
                                    <SlArrowDown className="icon_faq" />
                                </span>
                                How does your BIM & 3D modeling service help in construction?

                            </button>

                            <div id="collapseFour" class="collapse" data-parent="#faqAccordion">
                                <div class="card servicefaq card-body">
                                    Our typical project turnaround time varies depending on project complexity but usually ranges from 1 to 3 weeks after receiving all necessary details.
                                </div>
                            </div>

                            <button class="btn backbtn_color collapsed mt-3" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                <span class="icon_box">
                                    <SlArrowDown className="icon_faq" />
                                </span>
                                Can you work as per US and Canada time zones?
                            </button>

                            <div id="collapseFive" class="collapse" data-parent="#faqAccordion">
                                <div class="card servicefaq card-body">
                                    We ensure quality control by adhering to international standards, thorough reviews, BIM clash detection, and detailed coordination with fabricators and contractors.
                                </div>
                            </div>
                        </div>






                    </div>

                </div>
            </div>

            <section className="work-platform-section mt-2">
                <div className="work-platform-box">
                    <h2 className="work-platform-title">WORK PLATFORM</h2>
                    <div className="work-platform-content">
                        {/* LEFT SIDE: LOGOS */}
                        <div className="work-platform-logos">
                            <div className="logo-row">
                                <img src={draftsight} alt="DraftSight" />
                                <img src={autocad} alt="AutoCAD" />
                            </div>
                            <div className="logo-row">
                                <img src={tekla} alt="Tekla" />
                                <img src={rebars} alt="RebarCAD" />
                            </div>
                            <div className="logo-row single">
                                <img src={sds} alt="SDS/2" />
                            </div>
                        </div>

                        {/* DIVIDER */}
                        <div className="divider"></div>

                        {/* RIGHT SIDE: TEXT CONTENT */}
                        <div className="work-platform-text">
                            <p>
                                Steel access/mezzanine structures; designed per AISC/IS codes;
                                includes stairs, rails, grating, connections.
                            </p>

                            <p>
                                <strong>Tools:</strong> Tekla, SDS/2, AutoCAD.
                            </p>

                            <p>
                                <strong>Website:</strong>{" "}
                                <a href="https://wbfsteel.com" target="_blank" rel="noopener noreferrer">
                                    wbfsteel.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Service_Faqs
