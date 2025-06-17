import "./Packages.css";
import PackageCard from "./PackageCard";
import AddOn from "./AddOn";

function Packages() {
  return (
    <section id="packages">
      <h1>Packages</h1>
      <div className="content">
        <PackageCard
          title="gold"
          symbol="/imgs/ranks/gold-rank.webp"
          rewards={[
            "8 Week Program Document",
            "Weight Loss Document",
            "Muscle Gain Document",
          ]}
        />
        <PackageCard
          title="platinum"
          symbol="/imgs/ranks/platinum-rank.webp"
          rewards={[
            "Online Consultation",
            "Online Personalized Training",
            "Trainerize Program",
            "Nutrition Plan",
            "Weekly Check-ins",
          ]}
        />
        <PackageCard
          title="diamond"
          symbol="/imgs/ranks/diamond-rank.webp"
          rewards={[
            "Platinum Rewards",
            "In Person Training",
            "Session Punchcard",
          ]}
        />
        <PackageCard
          title="master"
          symbol="/imgs/ranks/master-rank.webp"
          rewards={[
            "Platinum Rewards",
            "In Person Training",
            "Weekly Sessions",
          ]}
        />
      </div>
      <div id="add-ons">
        <h2>Add Ons</h2>
        <div className="content">
          <div className="add-on">
            <h3>30-Minute Consultation</h3>
            <p>
              <span>1 Session</span> Free
            </p>
          </div>

          <div className="add-on">
            <h3>30-Minute Assisted Stretching Session</h3>
            <p>
              1 Session <span>$30</span>
            </p>
            <p>
              4 Sessions <span>$100</span>
            </p>
          </div>

          <div className="add-on">
            <h3>30-Minute Nutrition Consultation</h3>
            <p>
              <span>1 Session</span> $25
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Packages;
