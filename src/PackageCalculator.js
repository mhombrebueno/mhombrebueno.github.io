import "./PackageCalculator.css";

import { packages, addOns } from "./PackageData";

function PackageCalculator() {
  return (
    <div id="package-calculator">
      <div className="rank-buttons">
        {packages.map((pack) => (
          <div className="rank-button">{pack.title}</div>
        ))}
      </div>
      <div className="add-on-buttons">
        {addOns.map((addOn) => (
          <div>{addOn.title}</div>
        ))}
      </div>
    </div>
  );
}

export default PackageCalculator;
