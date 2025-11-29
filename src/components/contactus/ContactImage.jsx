import "./ContactImage.css";
import ContactImg from "../../assets/images/Group 1000005624.png";
import ContactImgMobile from "../../assets/images/Mobile Banner/Group 1000005623.webp";

function ContactImage() {
  return (
    <section className="Contact">
      <picture>
        <source media="(max-width: 678px)" srcSet={ContactImgMobile} />
        <img src={ContactImg} alt="Contact Banner" className="contact-img" />
      </picture>
    </section>
  );
}

export default ContactImage;
