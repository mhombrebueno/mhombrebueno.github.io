import PackageCard from "../components/PackageCard";
import AddOn from "../components/AddOn";
import Section from "./Section";
import PackageCalculator from "../PackageCalculator";

import { packages, addOns } from "../PackageData";
import "./Packages.css";
import "../components/PackageCard.css";

function Packages(props) {
  return (
    <Section {...props}>
      {packages.map((pack) => (
        <PackageCard key={pack.id} {...pack} />
      ))}

      <div id="add-ons">
        <h2 className="add-ons-title">Add Ons</h2>
        <div className="add-on-list">
          {addOns.map((addOn) => (
            <AddOn key={addOn.id} {...addOn} />
          ))}
        </div>
      </div>
      <PackageCalculator />
    </Section>
  );
}

export default Packages;
