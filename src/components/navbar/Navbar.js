import "./Navbar.css";
import { BUSINESS_NAME } from "../../global";

function Navbar() {
  return (
    <div id="navbar">
      <div className="business-info">
        <h1>{BUSINESS_NAME}</h1>

        <img
          className="social-link"
          src="/icons/instagram.svg"
          alt="Instagram"
        />
        <img className="social-link" src="/icons/tiktok.svg" alt="TikTok" />
      </div>

      <div className="buttons">
        <a href="#bio">Bio</a>
        <a href="#packages">Packages</a>
        <a href="#contacts">Contacts</a>
        <a href="#reviews">Reviews</a>
        <a href="#certifications">Certifications</a>
      </div>
    </div>
  );
}

export default Navbar;
