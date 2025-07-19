import { useState } from "react";
import Section from "./Section";

import "./Profile.css";
import { heroText } from "../Variables";

function Profile(props) {
  const [expanded, setExpanded] = useState(false);

  const collapsedState = () => {
    const firstParagraph = heroText[0];
    return <p classname="paragraph">{firstParagraph}</p>;
  };

  const expandedState = () => {
    return heroText.map((paragraph, idx) => (
      <p className="paragraph">{paragraph}</p>
    ));
  };

  return (
    <Section {...props}>
      <div className="profile-hero">
        <h1 className="profile-title">Miguel Hombrebueno</h1>
        <span>
          <h2 className="profile-subtitle">
            UBC Kinesiology | Personal Trainer | BCPA Powerlifter
          </h2>
        </span>

        <div className="hero-text">
          {expanded ? expandedState() : collapsedState()}

          <button onClick={() => setExpanded(!expanded)}>
            {expanded ? "Read less" : "Read more"}
          </button>
        </div>
      </div>
    </Section>
  );
}

export default Profile;
