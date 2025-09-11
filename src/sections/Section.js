function Section({ title, id, children }) {
  return (
    <section id={id} className={id}>
      {title && <h2 className="Section-title">{title}</h2>}
      <div className="Section-content">{children}</div>
    </section>
  );
}

export default Section;
