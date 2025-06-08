function AddOn({ title, prices }) {
  return (
    <div className="add-on">
      <h3>{title}</h3>
      <ul>
        {prices.map((price, index) => (
          <li key={index} className="reward">
            {price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddOn;
