import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Home from "../pages/Home";
import About from '../pages/About'
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import ContactUs from "../pages/ContactUs";
import ProjectDetails from "../pages/ProjectDetails";
import ProjectNav from "../components/projectCom/ProjectNav";

function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/projects" element={<ProjectNav />} /> */}
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/projects/details" element={<ProjectDetails />} /> */}
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRoutes;
