import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">

        {/* Left Section */}
        <div className="footer-content-left">
          <img src={assets.logo} alt="Company logo" />

          <p>
            We design dependable, high-quality products that enhance daily life, 
            with a strong emphasis on innovation and outstanding customer experiences.
          </p>

          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>

        {/* Center Section */}
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About us</a></li>
            <li><a href="/delivery">Delivery</a></li>
            <li><a href="/privacy">Privacy policy</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li><a href="tel:0710988072">+94 710988072</a></li>
            <li><a href="mailto:plattofoods@gmail.com">plattofoods@gmail.com</a></li>
          </ul>
        </div>

      </div>

      <hr />

      <p className="footer-bottom-text">
        © 2025 Platto. All rights reserved. Unauthorized reproduction or distribution of this content is strictly prohibited.
      </p>
    </div>
  );
};

export default Footer;
