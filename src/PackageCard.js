function PackageCard({ title, symbol }) {
  return (
    <div id={title} class="package">
      <img alt={title} src={symbol} />
      <h1>{title}</h1>
    </div>
  );
}

export default PackageCard;
