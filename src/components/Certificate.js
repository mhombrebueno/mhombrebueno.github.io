import "./Certificate.css";

function Certificate({ title, img }) {
  return (
    <div className="certificate">
      <div className="certificate-frame">
        <img className="certificate-img" alt={title} src={img} />
        <button className="view-button">View</button>
      </div>
      <h1 className="certificate-title">{title}</h1>
    </div>
  );
}

export default Certificate;
