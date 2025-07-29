import { useState } from "react";

import "./PackageCard.css";

function PackageCard({ title, icon, rewards, payment, durations, prices }) {
  const [flipped, setFlipped] = useState(false);

  const TitleAndIcon = (
    <div>
      <h1>{title}</h1>
      <img alt={title} src={icon} />
    </div>
  );

  const TapToView = (
    <div className="small-text">
      {flipped ? "Tap to view Rewards" : "Tap to view Prices"}
    </div>
  );

  return (
    <div
      id={title.toLowerCase()}
      className={`package-card ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="front">
        {TitleAndIcon}

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
        {TapToView}
      </div>

      <div className="back">
        {TitleAndIcon}
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
        {TapToView}
      </div>
    </div>
  );
}

export default PackageCard;
