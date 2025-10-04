import Section from "../Section";
import { useState } from "react";

import "./Bio.css";

function Bio(props) {
  const [faded, setFaded] = useState(false);
  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    if (visible) {
      setFaded(true);
      setTimeout(() => setVisible(false), 1000);
    }

    if (!visible) {
      setVisible(true);
      setFaded(false);
    }
  };

  return (
    <Section {...props}>
      <div className="Bio-profile">
        <img
          className="Bio-portrait"
          src="/imgs/miguel/portrait.jpg"
          alt="Portrait"
        />
        <div>
          <h1 className="Bio-name">
            <span className="highlighted-text">Miguel</span>Hombrebueno
          </h1>
          <h2 className="Bio-subtitle">UBC Bachelor of Kinesiology</h2>
          <h2 className="Bio-subtitle">NASM Certified Personal Trainer</h2>
          <h2 className="Bio-subtitle">BCPA Powerlifter</h2>
        </div>
      </div>

      <div className="Bio-text">
        {visible && (
          <div className={`Bio-cover ${faded ? "fade-out" : "fade-in"}`}>
            <p className="Bio-teaser">
              I am a UBC Kinesiology Graduate, Certified Personal Trainer,
              Competetive Powerlifter and Calisthenics Athlete. But I didn’t
              start here...
            </p>
            <button className="Bio-read-more-button" onClick={handleClick}>
              Read More
            </button>
          </div>
        )}
        <div>
          <p className="Bio-paragraph">
            I am a UBC Kinesiology Graduate, Certified Personal Trainer,
            Competetive Powerlifter and Calisthenics Athlete. But I didn’t start
            here...
          </p>
          <p className="Bio-paragraph">
            As one of the shortest guys in the room, I struggled with confidence
            growing up. An injury left me feeling disconnected from my body and
            unsure of myself. That's when I found the gym.
          </p>
          <p className="Bio-paragraph">
            What started as rehab turned into a lifelong passion. Along with
            physical strength, lifting also helped me rebuild my mindset and
            redefine what it meant to feel powerful. I found confidence,
            resilience, and a community that thrives on progress over
            perfection.
          </p>
        </div>

        <div>
          <p className="Bio-paragraph">
            Now I coach with that same mindset: help others overcome self-doubt,
            bounce back from injury, build lasting strength-physicaly and
            mentally
          </p>
          <p className="Bio-paragraph">
            Whether you are just starting or chasing your next PR, I’ll help you
            train with purpose, backed by science and real experience. No matter
            your size, background, or starting point, everyone deserves to feel
            strong in their own body.
          </p>
        </div>
        <button className="Bio-read-more-button" onClick={handleClick}>
          Read Less
        </button>
      </div>
    </Section>
  );
}

export default Bio;
