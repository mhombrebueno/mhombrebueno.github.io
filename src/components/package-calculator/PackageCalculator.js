import "./PackageCalculator.css";

import { packages, addOns } from "../../global";

function PackageCalculator() {
  return (
    <div id="package-calculator">
      <div className="rank-buttons">
        {packages.map((pack, index) => (
          <div key={index} className="rank-button">
            {pack.title}
          </div>
        ))}
      </div>
      <div className="add-on-buttons">
        {addOns.map((addOn, index) => (
          <div key={index}>{addOn.title}</div>
        ))}
      </div>
    </div>
  );
}

export default PackageCalculator;
