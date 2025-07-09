import "./ExpandableBox.css";

import React, { useState } from "react";

function ExpandableBox({ text, maxHeight = 100 }) {
  const [expanded, setExpanded] = useState(false);

  const toggle = () => setExpanded((prev) => !prev);

  return (
    <div
      className="expandable-box"
      style={{ maxHeight: expanded ? "1000px" : `${maxHeight}px` }}
    >
      {!expanded && <div />}

      <div className="content">
        {expanded ? (
          text.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)
        ) : (
          <p>{text[0]}</p>
        )}
      </div>

      <button onClick={toggle}>{expanded ? "Read less" : "Read more"}</button>
    </div>
  );
}

export default ExpandableBox;
