import "./AddOn.css";

function AddOn({ title, sessions, prices }) {
  return (
    <div className="Add-on">
      <h3 className="Add-on-title">{title}</h3>
      {prices.map((price, index) => (
        <div key={index} className="Add-on-price">
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
