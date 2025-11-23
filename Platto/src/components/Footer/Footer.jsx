
import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id='footer'>
      <div className="footer-content">

        {/* Logo */}
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Our company strives to deliver high-quality products that improve the everyday lives of our customers. We focus on innovation, reliability, and ensuring that each experience exceeds expectations.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon}  alt="" />
            <img src={assets.linkedin_icon}  alt="" />

          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>0710988072</li>
                <li>plattofoods@gmail.com</li>
            </ul>
        </div>

      </div>
    <hr />
    <p>© 2025 Platto. All rights reserved.</p>
    </div>
  );
};

export default Footer;
