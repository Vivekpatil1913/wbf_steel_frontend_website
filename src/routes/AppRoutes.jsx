import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Home from "../pages/Home";
import About from '../pages/About';
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import ContactUs from "../pages/ContactUs";
import ProjectDetails from "../pages/ProjectDetails";
import ProjectNav from "../components/projectCom/ProjectNav";
import Careers from "../pages/Careers";
// import Careers from "../pages/Careers";

// ScrollToTop component resets scroll on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppRoutes() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRoutes;
