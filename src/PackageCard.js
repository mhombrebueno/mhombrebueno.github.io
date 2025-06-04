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
              <span>+</span> {reward}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PackageCard;
