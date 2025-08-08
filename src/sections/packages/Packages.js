import PackageCard from "../../components/package-card/PackageCard";
import AddOn from "../../components/add-on/AddOn";
import Section from "../Section";
import PackageCalculator from "../../components/package-calculator/PackageCalculator";

import { packages, addOns } from "../../global";
import "./Packages.css";

function Packages(props) {
  return (
    <Section {...props}>
      {/* <div></div> */}
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
