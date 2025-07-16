import "./AddOn.css";
function AddOn({ title, sessions, prices }) {
  return (
    <div className="add-on">
      <h3 className="add-on-title">{title}</h3>
      {prices.map((price, index) => (
        <div className="add-on-price">
          <span>
            {sessions[index]} {sessions[index] === 1 ? "Session" : "Sessions"}
          </span>
          {price}
        </div>
      ))}
    </div>
  );
}

export default AddOn;
