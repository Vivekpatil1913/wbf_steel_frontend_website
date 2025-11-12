import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonials.css";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // TODO: Replace this with your actual backend API call later
    const fetchTestimonials = async () => {
      try {
        // Simulated API response
        const data = [
          {
            name: "Edward Glenn",
            text: "WBF team did a fantastic project, they were quick, efficient and very professional.",
          },
          {
            name: "Mark Tiner",
            text: "I’ve been working with these guys for a long time and I can say that our projects are in the perfect hands.",
          },
          {
            name: "Sarah Johnson",
            text: "Excellent communication, on-time delivery, and great attention to detail. Highly recommended!",
          },
          {
            name: "David Miller",
            text: "They exceeded expectations. Every detail was taken care of efficiently and professionally.",
          },
        ];

        // Mimic delay to simulate fetching
        setTimeout(() => setTestimonials(data), 500);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  if (testimonials.length === 0) {
    return (
      <section className="testimonials-section">
        <div className="testimonials-wrapper">
          <p>Loading testimonials...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="testimonials-section">
      <div className="testimonials-wrapper">
        {/* LEFT STATIC PART */}
        <div className="testimonials-left">
          <h2 className="testimonials-title">TESTIMONIALS</h2>
          <p className="testimonials-quote">
            “I would like to say big ‘Thank you’ to WBF TEAM for immense effort
            and support. In addition, I have feeling that our future projects
            are going to be great as well, good luck to the Team.”
          </p>
        </div>

        {/* RIGHT DYNAMIC SWIPER */}
        <div className="testimonials-right">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={2}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop={true}
            className="testimonial-swiper"
            breakpoints={{
              1280: { slidesPerView: 2 },
              1024: { slidesPerView: 1.5 },
              768: { slidesPerView: 1 },
              0: { slidesPerView: 1 },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-card">
                  <h3>{item.name}</h3>
                  <p>{item.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
