import Section from "../Section";

import { bioText } from "../../global";

import "./Bio.css";

function Bio(props) {
  return (
    <Section {...props}>
      <div className="bio-content">
        <div className="portrait-card">
          <img
            className="portrait"
            src="/imgs/miguel/portrait.jpg"
            alt="Portrait"
          />

          <h2>Certified:</h2>
          <h2 className="portrait-subtitle">UBC Kinesiology</h2>
          <h2 className="portrait-subtitle">Personal Trainer</h2>
          <h2 className="portrait-subtitle">BCPA Powerlifter</h2>
        </div>

        <div className="bio-text">
          {bioText.map((paragraph, index) => (
            <p className="bio-paragraph" key={index}>
              {paragraph}
            </p>
          ))}
          <div className="signiature">Miguel</div>
        </div>
      </div>
    </Section>
  );
}

export default Bio;
