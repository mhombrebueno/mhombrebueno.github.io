import Section from "../Section";

import "../../global.css";
import "./Hero.css";

function Hero(props) {
  return (
    <Section {...props}>
      <div className="Hero-panel">
        <h1 className="Hero-welcome">Welcome to</h1>
        <h1 className="Hero-name">
          <span className="highlighted-text">Ignite</span> Fitness
        </h1>
      </div>
    </Section>
  );
}

export default Hero;
