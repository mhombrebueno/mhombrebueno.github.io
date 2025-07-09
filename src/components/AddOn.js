import "./AddOn.css";
function AddOn({ title, sessions, prices }) {
  return (
    <div className="add-on">
      <h3>{title}</h3>
      {prices.map((price, index) => (
        <p className="price">
          <div>
            {sessions[index]} {sessions[index] === 1 ? "Session" : "Sessions"}
          </div>
          {price}
        </p>
      ))}
    </div>
  );
}

export default AddOn;
