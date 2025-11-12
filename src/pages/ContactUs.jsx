import React from "react";
import Navbar from "../components/common/Navbar";
import MapSection from "../components/common/Footer";
import Footer from "../components/common/Footer";
import ContactSection from "../components/contactus/ContactSection";

const contactData = {
  title: "GET IN TOUCH",
  subtitle:
    "Your Product Goals, Our Proven Solutions Let’s Build The Future Together.",
  address:
    "423/17; Talegaon Industrial Area, Igatpuri, Nashik 422 403, Maharashtra, India",
  email: ["Wellproducts.Co.In", "Nashikwellproduct.Co.In"],
  contact: ["+91 8564-0000-00", "+91 4658-0000-00"],
  socials: [
    { name: "facebook", link: "#" },
    { name: "instagram", link: "#" },
    { name: "whatsapp", link: "#" },
    { name: "linkedin", link: "#" },
    { name: "envelope-fill", link: "#" },
  ],
  formFields: [
    { placeholder: "Name", type: "text" },
    { type: "half" },
    { placeholder: "Subject", type: "text" },
    { placeholder: "Message", type: "textarea" },
  ],
};

const ContactUs = () => {
  return (
    <>
    
      <ContactSection contactData={contactData} />
      
      
    </>
  );
};

export default ContactUs;
