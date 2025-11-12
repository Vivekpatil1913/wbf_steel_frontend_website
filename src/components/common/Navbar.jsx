// import { Link, NavLink } from "react-router-dom";
// import "./Navbar.css";
// import logo from "../../../public/assets/images/wbfnewlogo.png"; // replace with your actual logo

// const Navbar = () => {
//   return (
//     <>
//       {/* ======== INFO BAR ======== */}
//       <div className="topbar py-2 px-3 d-none d-md-flex justify-content-between align-items-center">
//         <div className="contact-info d-flex align-items-center gap-4">
//           <div className="d-flex align-items-center gap-2">
//             <i className="bi bi-telephone-fill text-warning"></i>
//             <span>Call Us: 248-301-0901</span>
//           </div>
//           <div className="d-flex align-items-center gap-2">
//             <i className="bi bi-envelope-fill text-warning"></i>
//             <span>info@wbfsteel.com</span>
//           </div>
//           <div className="d-flex align-items-center gap-2">
//             <i className="bi bi-geo-alt-fill text-warning"></i>
//             <span>1309 Coffeen Ave #1200 Sheridan WY 82801, USA</span>
//           </div>
//         </div>
//         <div className="social-icons d-flex align-items-center gap-3">
//           <a href="#"><i className="bi bi-facebook"></i></a>
//           <a href="#"><i className="bi bi-instagram"></i></a>
//           <a href="#"><i className="bi bi-whatsapp"></i></a>
//           <a href="#"><i className="bi bi-linkedin"></i></a>
//           <a href="#"><i className="bi bi-envelope"></i></a>
//         </div>
//       </div>

//       {/* ======== NAVBAR ======== */}
//       <nav className="navbar navbar-expand-lg navbar-dark wbf-navbar sticky-top">
//         <div className="container">
//           <Link className="navbar-brand d-flex align-items-center" to="/">
//             <img src={logo} alt="WBF Logo" className="navbar-logo" />
//           </Link>

//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//             <ul className="navbar-nav text-uppercase fw-semibold">
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/">Home</NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/about">About Us</NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/services">Services</NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/projects">Projects</NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

import "./Navbar.css";
import logo from "../../../public/assets/images/wbfnewlogo.png";

function Navbar() {
  return (
    <>
      {/* ======== INFOBAR ======== */}
      <div className="top-infobar py-2">
        <div className="container d-flex flex-wrap justify-content-between align-items-center">
          
          {/* Left Logo + Tagline */}
          <div className="left-logo text-center text-lg-start">
            <img src={logo} alt="WBF Logo" className="infobar-logo" />
      
          </div>

          {/* Right Info + Socials */}
          <div className="right-info d-flex align-items-center justify-content-end flex-wrap">
            {/* Contact Info */}
            <div className="info-item d-flex align-items-center me-4">
              <i className="bi bi-telephone-fill text-warning fs-4 me-2"></i>
              <div>
                <div className="fw-semibold info-title">Call Us: 248-301-0901</div>
                <div className="text-muted info-sub">info@wbfsteel.com</div>
              </div>
            </div>

            {/* Location Info */}
            <div className="info-item d-flex align-items-center me-4">
              <i className="bi bi-geo-alt-fill text-warning fs-4 me-2"></i>
              <div>
                <div className="fw-semibold info-title">1309 Coffeen Ave #1200 Sheridan</div>
                <div className="text-muted info-sub">WY 82801, USA</div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="social-icons d-flex align-items-center">
              <a href="#"><img src="../../../public/assets/icons/logos_facebook.png" alt="Facebook" /></a>
              <a href="#"><img src="../../../public/assets/icons/insta.png" alt="Instagram" /></a>
              <a href="#"><img src="../../../public/assets/icons/logos_whatsapp-icon.png" alt="WhatsApp" /></a>
              <a href="#"><img src="../../../public/assets/icons/Group.png" alt="LinkedIn" /></a>
              <a href="#"><img src="../../../public/assets/icons/mail.png" alt="Mail" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* ======== NAVBAR ======== */}
      <nav className="navbar navbar-expand-lg navbar-dark main-navbar">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center" id="mainNav">
            <ul className="navbar-nav text-uppercase fw-bold">
              <li className="nav-item">
                <a href="#" className="nav-link active">Home</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">About Us</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Services</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Projects</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
