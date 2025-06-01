function Certificate({ title, img }) {
  return (
    <div className="certificate">
      <div className="frame">
        <div className="content">
          <img alt={title} src={img} />
        </div>
      </div>
      <h1>{title}</h1>
    </div>
  );
}

export default Certificate;
