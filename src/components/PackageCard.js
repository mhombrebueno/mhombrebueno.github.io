import { useState } from "react";

import "./PackageCard.css";

function PackageCard({ title, icon, rewards, payment, durations, prices }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      id={title}
      className={`package-card ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="front">
        <img alt={title} src={icon} />
        <h1>{title}</h1>
        <div className="items">
          <h2>Rewards</h2>
          <ul>
            {rewards.map((reward, index) => (
              <li key={index} className="reward">
                <span>+</span> {reward}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="back">
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
        </div>
      </div>
    </div>
  );
}

export default PackageCard;
