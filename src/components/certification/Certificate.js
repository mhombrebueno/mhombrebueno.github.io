import "./Certificate.css";

function Certificate({ title, img }) {
  return <img className="Certificate" alt={title} src={img}></img>;
}

export default Certificate;
