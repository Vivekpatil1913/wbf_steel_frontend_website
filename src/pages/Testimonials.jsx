import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/testmonials.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const cardsData = [
  {
    title: 'Edward Glenn',
    text: 'WBF team did a fantastic project, they were quick, efficient very professional.'
  },
  {
    title: 'Jane Doe',
    text: 'The team delivered above and beyond expectations, highly recommend them.'
  },
  {
    title: 'John Smith',
    text: 'Excellent service and timely delivery. Great communication throughout.'
  },
  {
    title: 'Sara Wilson',
    text: 'Professional approach and high-quality work. Will work again.'
  }
];

function Testimonials() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200, // large screens and below
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992, // tablets
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container  className="testimonials-container mt-5">
      <Row className="align-items-center">
        <Col lg={6} md={12} sm={12} className="text-section">
          <h2 className="heading_name">TESTIMONIALS</h2>
          <p className="para_testimonial">
            “I would like to say big ‘Thank you’ to WBF TEAM for immense effort and support.
            In addition, I have a feeling that our future projects are going to be great as well.
            Good luck to the Team.”
          </p>
        </Col>

        <Col lg={6} md={12} sm={12} >
          <Slider {...settings}>
            {cardsData.map((card, index) => (
              <div key={index} className="slider-card-wrapper">
                <div className="card testy_card">
                  <div className="card-body">
                    <h3 className="card_title text-center">{card.title}</h3>
                    <p className="card_data">{card.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </Col>
      </Row>
    </Container>
  );
}

export default Testimonials;
