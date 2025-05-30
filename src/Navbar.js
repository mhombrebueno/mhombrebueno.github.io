import "./Navbar.css";
import { BUSINESS_NAME } from "./Variables";

function Navbar() {
  return (
    <div id="navbar">
      <div>
        <h1>{BUSINESS_NAME}</h1>
      </div>

      <div id="nav-buttons">
        <a href="#profile">Profile</a>
        <a href="#reviews">Reviews</a>
        <a href="#packages">Packages</a>
        <a href="#contact">Contact</a>
        <a href="#certificates">Certification</a>
      </div>
    </div>
  );
}

export default Navbar;
