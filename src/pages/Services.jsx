import React from 'react'
import '../css/services.css'


import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';



import thum_icon from '../../public/assets/services/services_thum_icon.png'
import services_card2 from '../../public/assets/services/service_card2_img.png'
import service_card3 from '../../public/assets/services/services_card3_img.png'
import Services_cards from '../components/service_page_cards_data/Services_cards';
import Start_work_together from '../components/Work Together Com/Start_work_together';
import OurExperience from '../components/our experience/OurExperience';
import Service_Faqs from '../components/service_faqs/Service_Faqs';
import services_banner from '../../public/assets/services/service_banner.png'

function Services() {
  return (
    <>
      <img src={services_banner} class="img-fluid" alt="..."></img>
      <p className='service_heading_name'>Why Choose Us</p>
      <Container>
        <Row>
          <Col lg={4} md={4} sm={12}>
            <div className="d-flex justify-content-center align-items-center">
              <Card className="rounded-circle circle_card_styling">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                  <Image src={thum_icon} fluid />
                </Card.Body>
              </Card>
            </div>
            <div className="mt-2 text-center rounded_card1_data">
              Quality brands and Work
            </div>
          </Col>
          <Col lg={4} md={4} sm={12}>
            <div className="d-flex justify-content-center align-items-center">
              <Card className="rounded-circle circle_card_styling">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                  <Image src={services_card2} fluid />
                </Card.Body>
              </Card>
            </div>
            <div className="mt-2 text-center rounded_card1_data">
              Fully licensed and insured
            </div>
          </Col>
          <Col lg={4} md={4} sm={12}>
            <div className="d-flex justify-content-center align-items-center ">
              <Card className="rounded-circle circle_card_styling">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                  <Image src={service_card3} fluid />
                </Card.Body>
              </Card>
            </div>
            <div className="mt-2 text-center rounded_card1_data pl-5">
              100% service warranty
            </div>
          </Col>
        </Row>
      </Container>
      <Services_cards />
      <Start_work_together />
      <OurExperience />
      <Service_Faqs />


    </>
  )
}

export default Services

