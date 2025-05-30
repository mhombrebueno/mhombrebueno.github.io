function PackageCard({ title, symbol }) {
  return (
    <div id={title} class="rate-card">
      <h1 class="rate-title">{title}</h1>
      <img alt="Rank Logo" src={symbol} />
    </div>
  );
}

export default PackageCard;
