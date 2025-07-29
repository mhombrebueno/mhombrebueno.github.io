import "./Certificate.css";
import { useRef, useState } from "react";

function Certificate({ title, img }) {
  const [showFullView, setShowFullView] = useState(false);

  const openFullView = () => {
    setShowFullView(true);
  };

  const closeFullView = () => {
    setShowFullView(false);
  };

  return (
    <div className="certificate">
      <div className="certificate-frame">
        <img className="certificate-img" alt={title} src={img} />
        <button className="view-button" onClick={openFullView}>
          <img
            className="full-screen-icon"
            src="./icons/full-screen.png"
            alt="Full Screen"
          />
        </button>
      </div>
      <h1 className="certificate-title">{title}</h1>

      {showFullView && (
        <div className="fullscreen-overlay">
          <div className="fullscreen-content">
            <img className="fullscreen-img" src={img} alt={title} />
            <button className="close-button" onClick={closeFullView}>
              <img src="./icons/close.png" alt="close" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Certificate;
