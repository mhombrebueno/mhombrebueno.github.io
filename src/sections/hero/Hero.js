import Section from "../Section";

import "../../global.css";
import "./Hero.css";

function Hero(props) {
  return (
    <Section {...props}>
      <div className="hero-panel">
        <h1 className="hero-welcome">Welcome to</h1>
        <h1 className="hero-name">
          <span className="highlighted-text">Ignite</span>Fitness
        </h1>
        <div className="hero-subtitle">
          <h2>Personal Trainer.</h2>
          <h2>Nutrition Coach.</h2>
          <h2>Kinesiology Graduate.</h2>
        </div>
      </div>
    </Section>
  );
}

export default Hero;
