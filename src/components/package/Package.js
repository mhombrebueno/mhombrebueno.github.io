import { useState } from "react";

import "./Package.css";

function Package({
  id,
  title,
  icon,
  deliverables,
  num_months_duration,
  prices,
}) {
  const Icon_Title = (
    <div className="Package-icon-container">
      <img className="Package-icon" alt={title} src={icon} />
      <h1 className="Package-title">{title}</h1>
    </div>
  );

  const Deliverables = (
    <div className="Package-items">
      <h2 className="Package-header">Deliverables</h2>
      <ul className="Package-deliverables">
        {deliverables.map((deliverable, index) => (
          <li key={index} className="Package-deliverable">
            {deliverable}
          </li>
        ))}
      </ul>
    </div>
  );

  const Prices = (
    <div className="Package-items">
      <h2 className="Package-header">Prices</h2>
      <div className="Package-prices">
        {prices.map((price, index) => (
          <div className="Package-price">
            <div className="Package-price-value">${price.price} CAD</div>
            {price.payments === 1 ? (
              <div>paid in full</div>
            ) : (
              <div>
                ${Math.trunc(price.price / price.payments)} x {price.payments}{" "}
                payments
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const Duration = (
    <div>
      <div className="Package-items">
        <h2 className="Package-header">Duration</h2>
        <div className="Package-duration">{num_months_duration} months</div>
      </div>
    </div>
  );

  return (
    <div className="Package-container">
      <div id={id} className="Package">
        {Icon_Title}
        {Duration}
        {Deliverables}
      </div>
    </div>
  );
}

export default Package;
