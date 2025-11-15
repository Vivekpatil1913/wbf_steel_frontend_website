import "./Navbar.css";
import logo from "../../assets/images/wbfnewlogo.png";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


import facebookIcon from "../../assets/icons/logos_facebook.png";
import instaIcon from "../../assets/icons/insta.png";
import whatsappIcon from "../../assets/icons/logos_whatsapp-icon.png";
import linkedinIcon from "../../assets/icons/Group.png";
import mailIcon from "../../assets/icons/mail.png";

function Navbar() {
  const [hideInfobar, setHideInfobar] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const isMobile = window.innerWidth <= 768;
      const currentScroll = window.scrollY;

      if (isMobile) {
        // hide when user scrolls down
        if (currentScroll > lastScrollY && currentScroll > 50) {
          setHideInfobar(true);
        }
        // show when user scrolls up
        else if (currentScroll < lastScrollY) {
          setHideInfobar(false);
        }
      } else {
        // Always visible on desktop
        setHideInfobar(false);
      }

      lastScrollY = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="sticky-header">
        {/* ======== INFOBAR ======== */}
        <div
          className={`top-infobar py-2 ${hideInfobar ? "hide-infobar" : ""}`}
        >
          <div className="container d-flex flex-wrap justify-content-between align-items-center">
            {/* Left Logo + Tagline */}
            <div className="left-logo text-center text-lg-start">
              <img src={logo} alt="WBF Logo" className="infobar-logo" />
            </div>

            {/* Right Info + Socials */}
            <div className="right-info d-flex align-items-center justify-content-end flex-wrap">
              {/* Contact Info */}
              <div className="info-item d-flex align-items-center me-4">
                <a
                  href="tel:2483010901"
                  className="d-flex align-items-center text-decoration-none text-dark"
                >
                  <i className="bi bi-telephone-fill text-warning fs-4 me-2"></i>
                  <div>
                    <div className="fw-semibold info-title">
                      Call Us: 248-301-0901
                    </div>
                    <div className="text-muted info-sub">info@wbfsteel.com</div>
                  </div>
                </a>
              </div>

              {/* Location Info */}
              <div className="info-item d-flex align-items-center me-4">
                <a
                  href="#"
                  className="d-flex align-items-center text-decoration-none text-dark"
                >
                <i className="bi bi-geo-alt-fill text-warning fs-4 me-2"></i>
                <div>
                  <div className="fw-semibold info-title">
                    1309 Coffeen Ave #1200 Sheridan
                  </div>
                  <div className="text-muted info-sub">WY 82801, USA</div>
                </div>
                </a>
              </div>

              {/* Social Icons */}
              <div className="social-icons d-flex align-items-center">
                <a href="https://www.facebook.com/" className="me-2">
                  <img src={facebookIcon} alt="Facebook" />
                </a>
                <a href="https://www.instagram.com/" className="me-2">
                  <img src={instaIcon} alt="Instagram" />
                </a>
                <a href="https://www.whatsapp.com/" className="me-2">
                  <img src={whatsappIcon} alt="WhatsApp" />
                </a>
                <a href="https://in.linkedin.com/" className="me-2">
                  <img src={linkedinIcon} alt="LinkedIn" />
                </a>
                <a href="https://www.mail.com/">
                  <img src={mailIcon} alt="Mail" />
                </a>
              </div>
            </div>
          </div>
        </div>

        
        <nav className="navbar navbar-expand-lg navbar-dark main-navbar sticky-top">
          <div className="container d-flex justify-content-between align-items-center">
            
            <img
              src={logo}
              alt="WBF Logo"
              className="navbar-mobile-logo d-lg-none"
            />

            
            <button
              className="navbar-toggler ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNav"
              aria-controls="mainNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            
            <div
              className="collapse navbar-collapse justify-content-center"
              id="mainNav"
            >
              <ul className="navbar-nav text-uppercase fw-bold">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/AboutUs" className="nav-link">
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/Services" className="nav-link">
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/Projects" className="nav-link">
                    Projects
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/ContactUs" className="nav-link">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
