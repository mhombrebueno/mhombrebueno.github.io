import "./Packages.css";
import PackageCard from "./PackageCard";

function Packages() {
  return (
    <section id="packages">
      <h1 class="section-heading">Packages</h1>
      <div class="content">
        <PackageCard
          title="gold"
          symbol="/imgs/ranks/gold-rank.webp"
          rewards={["Item 1", "Item 2", "Item 3"]}
          bonus="Bonus Description"
        />
        <PackageCard
          title="platinum"
          symbol="/imgs/ranks/platinum-rank.webp"
          rewards={["Item 1", "Item 2", "Item 3"]}
          bonus="Bonus Description"
        />
        <PackageCard
          title="diamond"
          symbol="/imgs/ranks/diamond-rank.webp"
          rewards={["Item 1", "Item 2", "Item 3"]}
          bonus="Bonus Description"
        />
        <PackageCard
          title="master"
          symbol="/imgs/ranks/master-rank.webp"
          rewards={["Item 1", "Item 2", "Item 3"]}
          bonus="Bonus Description"
        />
      </div>
      <h2>Add Ons</h2>
    </section>
  );
}

export default Packages;
