import React from "react";
import "./HomeAbout.css";
import aboutImg from "../../../public/assets/images/image 136.png"; 

const HomeAbout = () => {
  return (
    <section className="home-about">
      <div className="home-about-container">
        <div className="home-about-text">
          <h2>Welcome To WBF Steel</h2>
          <p>
            We deliver reliable, cost-effective, and high-quality building
            solutions that add value and reduce risk. With expert teams and
            modern methods, we ensure timely, transparent project delivery. Our
            support and advice team always helps customers wholeheartedly and
            answers all customers' questions.
          </p>
          <a href="#" className="learn-more">
            LEARN MORE <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
        <div className="home-about-image">
          <img src={aboutImg} alt="About WBF Steel" />
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
