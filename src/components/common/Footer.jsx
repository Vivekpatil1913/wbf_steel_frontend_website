import "./Footer.css";
import logo from "../../../public/assets/images/logo.webp";
import bg from "../../../public/assets/images/Footer.webp"; // your background image

function Footer() {
  return (
    <footer
      className="footer-section text-white"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container-fluid py-5 px-5">
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
                info@wbfsteel.com,<br></br>
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
          <div className="col-lg-3 col-md-4 text-md-start text-center">
            <h4 className="footer-title mb-4">MENU</h4>
            <ul className="footer-menu">
              <li>
                <a href="#" className="active-menu">
                  Home
                </a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* ===== RIGHT COLUMN ===== */}
          <div className="col-lg-4 col-md-4 text-lg-start text-center">
            <img src={logo} alt="WBF Logo" className="footer-logo mb-3" />
        
            <p className="footer-desc">
              We have been increasing current standards in the matter of
              transmission impeccable building structures.
            </p>
            <h5 className="footer-follow-title fw-bold mt-4 mb-3">
              FOLLOW <span>US</span>
            </h5>
            <div className="footer-social d-flex gap-2 justify-content-lg-start justify-content-center">
              <a href="#">
                <img
                  src="../../../public/assets/icons/logos_facebook.png"
                  alt="Facebook"
                />
              </a>
              <a href="#">
                <img
                  src="../../../public/assets/icons/insta.png"
                  alt="Instagram"
                />
              </a>
              <a href="#">
                <img
                  src="../../../public/assets/icons/logos_whatsapp-icon.png"
                  alt="WhatsApp"
                />
              </a>
              <a href="#">
                <img
                  src="../../../public/assets/icons/Group.png"
                  alt="LinkedIn"
                />
              </a>
              <a href="#">
                <img src="../../../public/assets/icons/mail.png" alt="Email" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ===== COPYRIGHT ===== */}
      <div className="footer-bottom text-center py-3">
        © 2025 Copyright:{" "}
        <a href="#" className=" fw-semibold">
          Made With Passion by Sumago Infotech
        </a>
      </div>
    </footer>
  );
}

export default Footer;
