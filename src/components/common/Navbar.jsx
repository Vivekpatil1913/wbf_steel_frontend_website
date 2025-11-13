import "./Navbar.css";
import logo from "../../../public/assets/images/wbfnewlogo.png";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

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
                <i className="bi bi-geo-alt-fill text-warning fs-4 me-2"></i>
                <div>
                  <div className="fw-semibold info-title">
                    1309 Coffeen Ave #1200 Sheridan
                  </div>
                  <div className="text-muted info-sub">WY 82801, USA</div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="social-icons d-flex align-items-center">
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
                  <img src="../../../public/assets/icons/mail.png" alt="Mail" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ======== NAVBAR ======== */}
        <nav className="navbar navbar-expand-lg navbar-dark main-navbar">
          <div className="container">
            {/* === MOBILE LOGO (instead of toggle) === */}
            <img
              src={logo}
              alt="WBF Logo"
              className="navbar-mobile-logo d-lg-none"
            />

            {/* Keep toggle for menu (hidden anyway) */}
            <button
              className="navbar-toggler d-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNav"
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
                  <NavLink to="/about" className="nav-link">
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/services" className="nav-link">
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/projects" className="nav-link">
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
