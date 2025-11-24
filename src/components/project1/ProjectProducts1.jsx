import "./ProjectProducts1.css";
import { useNavigate } from "react-router-dom";

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
    { product_img: product1, text: "Commercial Building, GA USA" },
    { product_img: product2, text: "Commercial Building, LA USA" },
    { product_img: product3, text: "Commercial Building, MD USA" },
    { product_img: product4, text: "Commercial Building, FL USA" },
    { product_img: product5, text: "Commercial Building USA" },
    { product_img: product6, text: "Industrial Building, AR USA" },
    { product_img: product7, text: "Commercial Building, FL USA" },
    { product_img: product8, text: "Commercial Building, IL USA" },
    { product_img: product9, text: "Commercial Building, FL USA" },
    { product_img: product10, text: "Commercial Building, MD USA" },
  ];

  return (
    <section className="project-products">
      <div className="container text-center">
        <h2 className="product-title">Built to Power Your Product</h2>

        <div className="product-tabs">
          <button>Project 1</button>
          <button>Project 2</button>
          <button>Project 3</button>
          <button>Project 4</button>
          <button>Project 5</button>
          <button>Project 6</button>
        </div>
      </div>
      
      <div className='container mt-5'>
        <div className="row justify-content-center">
          {productdata.map((a, index) => (
            <div 
              key={index} 
              className="col-lg-4 col-md-6 col-sm-12 text-center"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/projectproducts2")}   // ⭐ navigation added
            >
              <div className="img_container">
                <img src={a.product_img} className="img-fluid img_product" alt={`Product ${index+1}`} />
              </div>
              <p className="product_name mt-3">{a.text}</p>
            </div>
          ))}
        </div>

        <div className="card product2_buttom_card mb-3">
          <div className="card-body">
            <div className='container'>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 border-right-column">
                  <h2 className='wbf_steel_name'>WBF Steel</h2>
                  <p className='Detailing_num'>Detailing in Numbers</p>
                  <p className='gettouch mt-3'>
                    <b>Get in Touch</b> <i className="fa-solid fa-square-arrow-up-right ms-2"></i>
                  </p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 colou2">
                  <p className='workingpara'>We work across the <b className='bold_work'>world</b></p>
                  <p className='para_card mt-3'>
                    Contact WBF Steel for professional advice on steel detailing and industry best practices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    
  );
}

export default ProjectProducts1;
