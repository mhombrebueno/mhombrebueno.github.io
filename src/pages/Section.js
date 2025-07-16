import React from "react";

function Section({ title, id, children }) {
  return (
    <section id={id} className="section">
      {title && <h2 className="section-title">{title}</h2>}
      <div className="content">{children}</div>
    </section>
  );
}

export default Section;
