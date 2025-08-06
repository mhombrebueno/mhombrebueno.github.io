import Section from "../Section";

import { bioText } from "../../global";

import "./Bio.css";

function Bio(props) {
  return (
    <Section {...props}>
      <div>
        <img
          className="portrait"
          src="/imgs/miguel/portrait.jpg"
          alt="Portrait"
        />
        <div>
          <h2 className="portrait-subtitle">UBC Kinesiology</h2>
          <h2 className="portrait-subtitle">Personal Trainer</h2>
          <h2 className="portrait-subtitle">BCPA Powerlifter</h2>
        </div>
      </div>
      <div className="bio-text">
        <h1 className="bio-name">I'm Miguel Hombrebueno</h1>
        {bioText.map((paragraph, index) => (
          <p className="bio-paragraph" key={index}>
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}

export default Bio;
