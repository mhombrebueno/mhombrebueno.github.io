import Section from "../Section";

import { BUSINESS_NAME } from "../../global";

import "./Hero.css";

function Hero(props) {
  return (
    <Section {...props}>
      <div className="hero-panel">
        <h1 className="hero-title">Welcome to {BUSINESS_NAME}</h1>
        <h2 className="hero-subtitle">
          Personal Trainer | Nutrition Coach | Kinesiology Graduate
        </h2>
      </div>
    </Section>
  );
}

export default Hero;
