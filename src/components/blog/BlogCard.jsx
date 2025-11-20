import React from "react";
import { Link } from "react-router-dom";

import "./BlogCard.css";

import img1 from "../../assets/images/Blog2.png";
import img2 from "../../assets/images/Blog2.png";
import img3 from "../../assets/images/Blog2.png";

const BlogCard = () => {
  const blogs = [
    {
      img: img1,
      title: "Copper Clad Aluminium Busbars: The Best of Both Worlds",
      number: "01",
    },
    {
      img: img2,
      title:
        "Revolutionizing Power with Laminated Copper Busbars: Efficiency in Every Layer",
      number: "02",
    },
    {
      img: img3,
      title: "Efficiency in Every Amp: The Copper Busbar Advantage",
      number: "03",
    },
  ];

  return (
    <section className="blog-section">
      {blogs.map((blog, i) => (
        <div className="blog-card" key={i}>
          <div className="blog-card-image">
            <img src={blog.img} alt="blog" />
            <span className="blog-card-number">{blog.number}</span>
          </div>

          {/* <p className="blog-card-date">
            {blog.date} || {blog.location}
          </p> */}

          <h3 className="blog-card-title">{blog.title}</h3>

          <Link className="blog-readmore read" to={`/blog/${i}`}>
            Read More <span className="arrow">➜</span>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default BlogCard;
