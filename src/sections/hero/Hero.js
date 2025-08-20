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
      </div>
    </Section>
  );
}

export default Hero;
