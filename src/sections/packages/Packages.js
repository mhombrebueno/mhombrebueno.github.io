import Section from "../Section";
import Package from "../../components/package/Package";
import AddOn from "../../components/add-on/AddOn";
import PriceCalculator from "../../components/price-calculator/PriceCalculator";

import { PACKAGES, ADD_ONS } from "../../constants";
import "./Packages.css";

function Packages(props) {
  return (
    <Section {...props}>
      <div className="Package-ranks">
        {PACKAGES.map((pack) => (
          <Package key={pack.id} {...pack} />
        ))}
      </div>

      <div className="Add-ons">
        <h2 className="Add-ons-title">Add Ons</h2>
        <div className="Add-ons-list">
          {ADD_ONS.map((addOn) => (
            <AddOn key={addOn.id} {...addOn} />
          ))}
        </div>
      </div>
      <PriceCalculator />
    </Section>
  );
}

export default Packages;
