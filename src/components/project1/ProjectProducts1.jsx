import "./ProjectProducts1.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import product1 from "../../assets/projectimg/project_page2/product1.png";
import product2 from "../../assets/projectimg/project_page2/product2.png";
import product3 from "../../assets/projectimg/project_page2/product3.png";
import product4 from "../../assets/projectimg/project_page2/product4.png";
import product5 from "../../assets/projectimg/project_page2/product5.png";
import product6 from "../../assets/projectimg/project_page2/product6.png";
import product7 from "../../assets/projectimg/project_page2/product7.png";
import product8 from "../../assets/projectimg/project_page2/product8.png";
import product9 from "../../assets/projectimg/project_page2/product9.png";
import product10 from "../../assets/projectimg/project_page2/product10.png";

function ProjectProducts1() {
  const navigate = useNavigate();

  const productdata = [
    { id:1, product_img: product1, text: "Commercial Building, GA USA" },
    { id:2, product_img: product2, text: "Commercial Building, LA USA" },
    { id:3, product_img: product3, text: "Commercial Building, MD USA" },
    { id:4, product_img: product4, text: "Commercial Building, FL USA" },
    { id:5, product_img: product5, text: "Commercial Building USA" },
    { id:6, product_img: product6, text: "Industrial Building, AR USA" },
    { id:7, product_img: product7, text: "Commercial Building, FL USA" },
    { id:8, product_img: product8, text: "Commercial Building, IL USA" },
    { id:9, product_img: product9, text: "Commercial Building, FL USA" },
    { id:10, product_img: product10, text: "Commercial Building, MD USA" },
  ];

  const projectImages = {
    "Project 1": productdata.slice(0, 3),
    "Project 2": productdata.slice(3, 6),
    "Project 3": productdata.slice(6, 9),
    "Project 4": productdata.slice(0, 4),
    "Project 5": productdata.slice(4, 8),
    "Project 6": productdata.slice(7, 10),
  };

  const [selectedTab, setSelectedTab] = useState("Project 1");
  const [products, setProducts] = useState(projectImages["Project 1"]);

  useEffect(() => {
    setProducts(projectImages[selectedTab]);
  }, [selectedTab]);

  return (
    <>
      <section className="project-products">
        <div className="container text-center">
          <h2 className="product-title text-center">Built to Power Your Product</h2>

          <div className="product-tabs">
            {Object.keys(projectImages).map((tab, i) => (
              <button
                key={i}
                onClick={() => setSelectedTab(tab)}
                style={{
                  background: selectedTab === tab ? "#FFC442" : "#fff",
                  fontWeight: selectedTab === tab ? "700" : "500",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="container mt-5">
          <div className="row justify-content-center">
            {products.map((a, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 col-sm-12 text-center"
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/projectproducts2?id=${a.id}`)}
              >
                <div className="img_container">
                  <img src={a.product_img} className="img-fluid img_product" alt="" />
                </div>
                <p className="product_name mt-3">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your second section untouched */}
      <section className="wbf-wrapper">
        <div className="wbf-container">
          <div className="wbf-left">
            <h2>WBF Steel</h2>
            <p className="subtitle">Detailing in Numbers</p>
            <a href="#" className="cta-btn">
              Get in Touch <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>

          <div className="wbf-divider"></div>

          <div className="wbf-right">
            <h2>
              We work across <br /> the <span> world</span>
            </h2>
            <p>
              Contact WBF Steel for <br /> professional advice on steel <br /> detailing and
              industry best <br /> Practices
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectProducts1;
