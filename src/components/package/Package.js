import { useState } from "react";

import "./Package.css";

function Package({ id, title, icon, rewards, payment, durations, prices }) {
  const [flipped, setFlipped] = useState(false);

  const Icon = (
    <div className="Package-icon-container">
      <img className="Package-icon" alt={title} src={icon} />
    </div>
  );

  const Title = <h1 className="Package-title">{title}</h1>;

  const Rewards = (
    <div className="Package-items">
      <h2 className="Package-header">Rewards</h2>
      <ul className="Package-item-list">
        {rewards.map((reward, index) => (
          <li key={index} className="Package-item">
            <span className="Package-bullet">+</span> {reward}
          </li>
        ))}
      </ul>
    </div>
  );

  const Prices = (
    <div className="Package-items">
      <div className="Package-payment">{payment}</div>
      <h2 className="Package-header">Prices</h2>
      <ul className="Package-item-list">
        {durations.map((duration, index) => (
          <li key={index} className="Package-price Package-item">
            <div>{duration}</div>
            <div>${prices[index]}</div>
          </li>
        ))}
      </ul>
    </div>
  );

  const TapToView = (
    <span className="Package-tap-to-view">{`${
      flipped ? "Tap to view Rewards" : "Tap to view Prices"
    }`}</span>
  );

  const PackageFront = (
    <div className="Package-front">
      {Icon}
      {Title}
      {Rewards}
      {TapToView}
    </div>
  );
  const PackageBack = (
    <div className="Package-back">
      {Icon}
      {Title}
      {Prices}
      {TapToView}
    </div>
  );
  return (
    <div className="Package-container">
      <div
        id={id}
        className={`Package ${flipped ? "flipped" : ""}`}
        onClick={() => setFlipped(!flipped)}
      >
        {PackageFront} {PackageBack}
      </div>
    </div>
  );
}

export default Package;
