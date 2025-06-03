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
          description="Description"
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
          description="Description"
        />
        <PackageCard
          title="diamond"
          symbol="/imgs/ranks/diamond-rank.webp"
          rewards={["Platinum Rewards"]}
          description="Description"
        />
        <PackageCard
          title="master"
          symbol="/imgs/ranks/master-rank.webp"
          rewards={["Platinum Rewards"]}
          description="Description"
        />
      </div>
      <h2>Add Ons</h2>
    </section>
  );
}

export default Packages;
