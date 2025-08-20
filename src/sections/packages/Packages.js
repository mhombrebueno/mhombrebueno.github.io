import Section from "../Section";
import Package from "../../components/package/Package";
import AddOn from "../../components/add-on/AddOn";
import PriceCalculator from "../../components/price-calculator/PriceCalculator";

import { PACKAGES, ADD_ONS } from "../../constants";
import "./Packages.css";

function Packages(props) {
  return (
    <Section {...props}>
      <div id="package-ranks">
        {PACKAGES.map((pack) => (
          <Package key={pack.id} {...pack} />
        ))}
      </div>

      <div id="add-ons">
        <h2 className="title">Add Ons</h2>
        <div className="list">
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
