import React from 'react'
import '../css/about.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import about_img1 from '../../public/assets/about_img/about_img1.png'
import about_img2 from '../../public/assets/about_img/about_img2.png'
import about_img3 from '../../public/assets/about_img/about_img3.png'

import constrction_icons from '../../public/assets/about_img/constractionperson_img.png'
import file_img from '../../public/assets/about_img/exportFile_img.png'
import export_global from '../../public/assets/about_img/globalIMg.png'

import CountUp from 'react-countup';
import VissionMission from './VissionMission';
import FaqCom from './FaqCom';
import Testimonials from './Testimonials';
// import VissionMission from '../Vision_mission/VissionMission';
// import FaqCom from '../FAQ/FaqCom';
// import Testimonials from '../testimonials/Testimonials';




function About() {

    const compoverview = [
        {
            para: "We are a leading structural engineering and design firm delivering reliable, cost-effective, and high-quality services. Our skilled team and modern processes ensure on-time project completion with minimal risk and maximum value. We specialize in structural and architectural design for residential and industrial projects, along with steel detailing, connection design, pre-engineered metal buildings, BIM, and rebar detailing services. All our work complies with OSHA standards, emphasizing both safety and quality. Driven by passion and professionalism, we use advanced software and global standards to deliver outstanding results that our clients trust for their future projects."
        }
    ];


    return (
        <>
            <h3 className='text-center mt-2'><b>Company Overview</b></h3>
            <div className='paraAbout'>
                <p>
                    {
                        compoverview.map((item, index) => (
                            <span key={index}>{item.para}</span>
                        ))
                    }
                </p>
            </div>

            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12} className='p-0 m-0'>
                        <img src={about_img1} class="img-fluid aboutimgs" alt="..."></img>
                    </Col>
                    <Col lg={6} md={6} sm={12} className='backcol1_color p-0 m-0'>
                        <div className='content_card1'>
                            <h1 className='number_card'>1</h1>
                            <h3 className='text-content'><b>Environment</b></h3>
                            <p className='text-content-text'>Safety is one of the highest priorities within
                                Facmaster.It is imperative that everyone follows the
                                policies and guidelinesto ensure their own safety
                                and the safety of others around them.
                                We are providing different.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={6} sm={12} className='backcol2_color p-0 m-0'>
                        <div className='content_card1'>
                            <h1 className='number_card'>2</h1>
                            <h3 className='text-content'><b>Health & Safety</b></h3>
                            <p className='text-content-text'>Health & Safety
                                Safety is one of the highest priorities within
                                Facmaster. It is imperative that everyone follows the
                                policies and guidelines to ensure their own safety
                                and the safety of others around them.Lorem Ipsum is
                                simply dummy.</p>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} className='p-0 m-0'>
                        <img src={about_img2} class="img-fluid aboutimgs" alt="..."></img>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={6} sm={12} className='p-0 m-0'>
                        <img src={about_img3} class="img-fluid aboutimgs" alt="..."></img>
                    </Col>
                    <Col lg={6} md={6} sm={12} className='backcol3_color p-0 m-0'>

                        <div className='content_card1'>
                            <h1 className='number_card'>3</h1>
                            <h3 className='text-content'><b>Integrity</b></h3>
                            <p className='text-content-text'>
                                Safety is one of the highest priorities within
                                Facmaster. It is imperative that everyone follows the
                                policies and guidelines to ensure their own safety
                                and the safety of others around them. It is a long
                                established fact that a reader.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className='mt-5'>
                <div className='background_color_aboutus_name'>
                    <h3 className='aboutus_name'><b>About Us</b></h3>
                </div>
                <Row>
                    <Col lg={8} md={8} sm={12} className='mt-5'>
                        <div className='paraAbout1'>
                            <p>We are a trusted name in structural engineering, committed to delivering
                                precise, reliable,and cost-effective solutions.With a skilled team and
                                advanced tools,we ensure quality and on-time project delivery while
                                maintaining transparency and safety.Our expertise spans steel detailing,
                                connection design, BIM,rebar detailing, and pre-engineered metal buildings
                                for residential,industrial, and commercial sectors. Guided by OSHA
                                standards and global codes,we continue to build lasting client relationships
                                through innovation, integrity, and excellence.</p>
                        </div>
                    </Col>


                    <Col lg={4} md={4} sm={12}>
                        <div className="engineer-box mb-3">
                            <div className="icon">
                                <img src={constrction_icons} alt="Engineer Icon" className="icon-image" />
                            </div>
                            <div className="text-group">
                                <span className="number">
                                    <CountUp end={35} duration={2} enableScrollSpy scrollSpyOnce /> +
                                </span>
                                <span className="label">Expert Engineers</span>
                            </div>
                        </div>
                        <div className="engineer-box mb-3">
                            <div className="icon">
                                <img src={file_img} alt="Project Icon" className="icon-image" />
                            </div>
                            <div className="text-group">
                                <span className="number">
                                    <CountUp end={250} duration={2} enableScrollSpy scrollSpyOnce /> +
                                </span>
                                <span className="label">Project Completed</span>
                            </div>
                        </div>
                        <div className="engineer-box">
                            <div className="icon">
                                <img src={export_global} alt="Clients Icon" className="icon-image" />
                            </div>
                            <div className="text-group">
                                <span className="number">
                                    <CountUp end={25} duration={2} enableScrollSpy scrollSpyOnce /> +
                                </span>
                                <span className="label">Global Clients</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <VissionMission />
            <FaqCom />
            <Testimonials/>


        </>
    )
}

export default About
