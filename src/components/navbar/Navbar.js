import "./Navbar.css";
import { BUSINESS_NAME, SECTIONS } from "../../constants";

function Navbar() {
  return (
    <div id="navbar">
      <h1 className="business-name">{BUSINESS_NAME}</h1>

      <div className="buttons">
        {SECTIONS.map((section) => (
          <a href={`#${section.id}`}>{section.title}</a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
