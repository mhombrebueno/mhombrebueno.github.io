import Section from "../Section";

import { BUSINESS_NAME } from "../../global";

import "./Hero.css";

function Hero(props) {
  return (
    <Section {...props}>
      <div className="hero-panel">
        <h1 className="hero-title">Welcome to {BUSINESS_NAME}</h1>
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
