function PackageCard({ title, symbol, rewards, description }) {
  return (
    <div id={title} className="package">
      <img alt={title} src={symbol} />
      <h1>{title}</h1>
      <div className="rewards">
        <h2>Rewards</h2>
        <ul>
          {rewards.map((reward, index) => (
            <li key={index} className="reward">
              {reward}
            </li>
          ))}
        </ul>
        <h2>{description}</h2>
      </div>
    </div>
  );
}

export default PackageCard;
