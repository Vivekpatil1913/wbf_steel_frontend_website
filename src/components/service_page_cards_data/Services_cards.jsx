import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import '../../css/service_card.css'

import service_img1 from '../../../src/assets/services/service_img1.png'
import service_img2 from '../../../src/assets/services/services_img2.png'
import service_img3 from '../../../src/assets/services/services_img3.png'

function Services_cards() {
    return (
        <>
            <div class="container-fluid mb-5">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 p-0 m-0">
                        <img src={service_img1} alt="..." className="responsive-image"/>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-center align-items-start m-0 colum_backcolor">
                        <p className="service_card1_headingstrature">Detailing & Estimations </p>
                        <p className="service_card_para">
                            WBF Steel is a leading global provider of Structural Steel Detailing and Estimation services, following AISC, NISD, CISC, OSHA, and ASTM standards. Using SDS/2, TEKLA, and Advanced Steel platforms, our 35+ skilled detailers and expert managers deliver accurate, cost-effective, and on-time solutions. We focus on quality, trust, and long-term client relationships built through consistent excellence.
                        </p>
                    </div>
                </div>

                <div class="row mt-3">
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-center align-items-left text-left p-0 m-0 colum_backcolor p-0 m-0">
                        <p className='service_card1_headingstrature'>Commercial Structures</p>
                        <p className='service_card_para'>
                            We deliver high-quality, on-time commercial projects with precision and excellence. Serving owners, contractors, engineers, fabricators, and architects, we offer complete architectural and structural solutions. Using SDS/2 and Tekla Structures, we handle new builds, extensions, and renovations with the same commitment and expertise across all project sizes.                        </p>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 m-0 p-0">
                        <img src={service_img2} class="img-fluid responsive-image" alt="..." />
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 m-0 p-0">
                        <img src={service_img3} class="img-fluid responsive-image" alt="..." />
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-center align-items-left text-left p-0 m-0 colum_backcolor p-0 m-0">
                        <p className='service_card1_headingstrature'>Architectural And Structural Design Support</p>
                        <p className='service_card_para'>
                            We specialize in delivering high-quality commercial construction solutions with precision, efficiency, and on-time performance. Our services cater to owners, contractors, engineers, fabricators, and architects, providing end-to-end architectural and structural design support.
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Services_cards
