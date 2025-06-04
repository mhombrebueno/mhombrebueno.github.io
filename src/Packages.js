import "./Packages.css";
import PackageCard from "./PackageCard";

function Packages() {
  return (
    <section id="packages">
      <h1>Packages</h1>
      <div className="content">
        <PackageCard
          title="gold"
          symbol="/imgs/ranks/gold-rank.webp"
          rewards={["8 Week Program PDF file", "Weight Loss", "Muscle Gain"]}
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
          rewards={["Platinum Rewards"]}
        />
        <PackageCard
          title="master"
          symbol="/imgs/ranks/master-rank.webp"
          rewards={["Platinum Rewards"]}
        />
      </div>
      <h2>Add Ons</h2>
      <span>thing</span>
      <span>thing</span>
      <span>thing</span>
    </section>
  );
}

export default Packages;
