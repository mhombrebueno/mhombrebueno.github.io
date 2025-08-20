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

  const Front = (
    <div className="package-front">
      {Icon}
      {Title}
      <div className="items">
        <h2>Rewards</h2>
        <ul>
          {rewards.map((reward, index) => (
            <li key={index} className="reward">
              <span>+</span> {reward}
            </li>
          ))}
        </ul>
        <span className="package-small-text">Tap to View Prices</span>
      </div>
    </div>
  );
  const Back = (
    <div className="package-back">
      {Icon}
      {Title}
      <div className="items">
        <div className="payment">{payment}</div>
        <h2>Prices</h2>
        <ul>
          {durations.map((duration, index) => (
            <li key={index} className="price">
              <div>{duration}</div>
              <div>${prices[index]}</div>
            </li>
          ))}
        </ul>
        <span className="small-text">Tap to View Rewards</span>
      </div>
    </div>
  );

  return (
    <div
      id={id}
      className={`package ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      {Front}
      {Back}
    </div>
  );
}

export default Package;
