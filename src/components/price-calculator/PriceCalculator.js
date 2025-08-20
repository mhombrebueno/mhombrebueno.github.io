import "./PriceCalculator.css";

import { PACKAGES, ADD_ONS } from "../../constants";

function PriceCalculator() {
  return (
    <div id="package-calculator">
      <div className="rank-buttons">
        {PACKAGES.map((pack, index) => (
          <div key={index} className="rank-button">
            {pack.title}
          </div>
        ))}
      </div>
      <div className="add-on-buttons">
        {ADD_ONS.map((addOn, index) => (
          <div key={index}>{addOn.title}</div>
        ))}
      </div>
    </div>
  );
}

export default PriceCalculator;
