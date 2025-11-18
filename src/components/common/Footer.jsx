import { NavLink } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/images/wbfnewlogo.png";
import bg from "../../assets/images/Footer.webp"; // Background image


import facebookIcon from "../../assets/icons/logos_facebook.png";
import instaIcon from "../../assets/icons/insta.png";
import whatsappIcon from "../../assets/icons/logos_whatsapp-icon.png";
import linkedinIcon from "../../assets/icons/Group.png";
import mailIcon from "../../assets/icons/mail.png";



function Footer() {
  return (
    <>
      {/* ===== GOOGLE MAP SECTION ===== */}
      {/* <section className="footer-map-section">
        <div className="container-fluid p-0">
          <img src={mapImage} alt="Map" className="footer-map w-100" />
        </div>
      </section> */}

      {/* ===== FOOTER SECTION ===== */}
      <footer
        className="footer-section text-white"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="container-fluid py-4 px-4">
          <div className="row gy-5 justify-content-between align-items-start">

            {/* ===== LEFT COLUMN ===== */}
            <div className="col-lg-4 col-md-4 text-md-start text-center">
              <h4 className="footer-title mb-4">CONTACT COMPANY</h4>
              <ul className="footer-contact list-unstyled">
                
                <li>
                  <i className="bi bi-telephone-fill me-2 text-warning fs-5"></i>
                  248-301-0901
                </li>
                <li>
                  
                  <i className="bi bi-envelope-fill me-2 text-warning fs-5"></i>
                  info@wbfsteel.com,
                  <br />
                  sales@wbfsteel.com
                </li>
                <li>
                  <i className="bi bi-geo-alt-fill me-2 text-warning fs-5"></i>
                  1309 Coffeen Ave #1200
                  <br />
                  Sheridan, WY 82801, USA
                </li>
                <li>
                  <i className="bi bi-globe2 me-2 text-warning fs-5"></i>
                  <a
                    href="https://www.wbfsteel.com"
                    className="text-white text-decoration-none"
                  >
                    https://www.wbfsteel.com
                  </a>
                </li>
              </ul>
            </div>

            {/* ===== MIDDLE COLUMN ===== */}
            <div className="col-lg-3 col-md-4 text-md-start text-center footer-follow-col">
              <h4 className="footer-title mb-4 men">MENU</h4>
              <ul className="footer-menu">
                <li>
                  <NavLink to="/" className="menu-link">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/AboutUs" className="menu-link">
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Services" className="menu-link">
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Careers" className="menu-link">
                    Careers
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/ContactUs" className="menu-link">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* ===== RIGHT COLUMN ===== */}
            <div className="col-lg-4 col-md-4 text-lg-start ">
              <img src={logo} alt="WBF Logo" className="footer-logo mb-3" />

              <p className="footer-desc">
                We have been increasing current standards in the matter of
                transmission impeccable building structures.
              </p>

              <h5 className="footer-follow-title fw-bold mt-4 mb-3">
                FOLLOW <span>US</span>
              </h5>

              <div className="footer-social d-flex gap-2 justify-content-lg-start justify-content-center">
                <a href="https://www.facebook.com/">
                  <img src={facebookIcon} alt="Facebook" />
                </a>
                <a href="https://www.instagram.com/">
                  <img src={instaIcon} alt="Instagram" />
                </a>
                <a href="https://www.whatsapp.com/">
                  <img src={whatsappIcon} alt="WhatsApp" />
                </a>
                <a href="https://in.linkedin.com/">
                  <img src={linkedinIcon} alt="LinkedIn" />
                </a>
                <a href="https://www.mail.com/">
                  <img src={mailIcon} alt="Email" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ===== COPYRIGHT ===== */}
        <div className="footer-bottom text-center py-3">
          © 2025 Copyright:{" "}
          <a href="https://www.sumagoinfotech.com/" className="fw-semibold text-white text-decoration-none">
            Made With Passion by Sumago Infotech
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
