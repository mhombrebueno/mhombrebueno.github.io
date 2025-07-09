import PackageCard from "./components/PackageCard";
import AddOn from "./components/AddOn";

import "./Packages.css";

function Packages() {
  return (
    <section id="packages">
      <h1>Packages</h1>
      <div className="content">
        <PackageCard
          title="gold"
          icon="/imgs/ranks/gold-rank.webp"
          rewards={["8 Week Program PDF", "Weight Loss PDF", "Muscle Gain PDF"]}
          payment="One Time Purchase"
          durations={["One Time Purchase"]}
          prices={[80]}
        />
        <PackageCard
          title="platinum"
          icon="/imgs/ranks/platinum-rank.webp"
          rewards={[
            "Online Consultation",
            "Online Training",
            "Trainerize Program",
            "Nutrition Plan",
            "Habit Tracking",
            "Weekly Check-ins",
          ]}
          payment="Paid in Full"
          durations={["1 Month", "2 Months"]}
          prices={[300, 550]}
        />
        <PackageCard
          title="diamond"
          icon="/imgs/ranks/diamond-rank.webp"
          rewards={[
            "Packaged Payments",
            "In-Person Consultation",
            "In-Person Training",
            "Trainerize Program",
            "Nutrition Plan",
            "Habit Tracking",
            "Weekly Check-ins",
          ]}
          payment="Paid in Full"
          durations={["6 Sessions", "12 Sessions", "24 Sessions"]}
          prices={[510, 960, 1800]}
        />
        <PackageCard
          title="master"
          icon="/imgs/ranks/master-rank.webp"
          rewards={[
            "Weekly Payments",
            "In-Person Consultation",
            "In-Person Training",
            "Trainerize Program",
            "Nutrition Plan",
            "Habit Tracking",
            "Weekly Check-ins",
          ]}
          payment="Weekly Payments"
          durations={[
            "1x per week",
            "2x per week",
            "3x per week",
            "4x per week",
          ]}
          prices={[90, 170, 240, 300]}
        />
      </div>

      <div id="add-ons">
        <h2>Add Ons</h2>
        <div className="content">
          <AddOn
            title="30 Minute Consultation"
            sessions={[1]}
            prices={["Free"]}
          />
          <AddOn
            title="30 Minute Assisted Stretching Session"
            sessions={[1, 4]}
            prices={["$30", "$100"]}
          />
          <AddOn
            title="30 Minute Nutrition Consultation"
            sessions={[1]}
            prices={["$25"]}
          />
        </div>
      </div>
    </section>
  );
}

export default Packages;
