import { useState } from "react";

import "./Package.css";

function Package({ id, title, icon, rewards, payment, durations, prices }) {
  const [flipped, setFlipped] = useState(false);

  const Icon = (
    <div className="package-icon-container">
      <img className="package-icon" alt={title} src={icon} />
    </div>
  );

  const Title = <h1 className="package-title">{title}</h1>;

  const Rewards = (
    <div className="package-items">
      <h2 className="package-header">Rewards</h2>
      <ul>
        {rewards.map((reward, index) => (
          <li key={index} className="package-item">
            <span className="bullet-point">+</span> {reward}
          </li>
        ))}
      </ul>
    </div>
  );

  const Prices = (
    <div id="prices" className="package-items">
      <div className="payment">{payment}</div>
      <h2 className="package-header">Prices</h2>
      <ul>
        {durations.map((duration, index) => (
          <li key={index} className="package-item">
            <div>{duration}</div>
            <div>${prices[index]}</div>
          </li>
        ))}
      </ul>
    </div>
  );

  const TapToView = (
    <span className="package-small-text">{`${
      flipped ? "Tap to view Rewards" : "Tap to view Prices"
    }`}</span>
  );

  return (
    <div className="package-container">
      <div
        id={id}
        className={`package ${flipped ? "flipped" : ""}`}
        onClick={() => setFlipped(!flipped)}
      >
        <div className="package-front">
          {Icon}
          {Title}
          {Rewards}
          {TapToView}
        </div>
        <div className="package-back">
          {Icon}
          {Title}
          {Prices}
          {TapToView}
        </div>
      </div>
    </div>
  );
}

export default Package;
