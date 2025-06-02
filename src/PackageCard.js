function PackageCard({ title, symbol, rewards, bonus }) {
  return (
    <div id={title} class="package">
      <img alt={title} src={symbol} />
      <h1>{title}</h1>
      <div className="rewards">
        <p>Rewards</p>
        <ul>
          {rewards.map((reward, index) => (
            <li key={index} className="reward">
              {reward}
            </li>
          ))}
        </ul>
        <p>{bonus}</p>
      </div>
    </div>
  );
}

export default PackageCard;
