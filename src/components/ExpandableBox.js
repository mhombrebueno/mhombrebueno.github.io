import "./ExpandableBox.css";

import React, { useState } from "react";

function ExpandableBox({ text, maxHeight = 100 }) {
  const [expanded, setExpanded] = useState(false);

  const toggle = () => setExpanded((prev) => !prev);

  return (
    <div className="expandable-box">
      <div className="">
        {text.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>

      <button onClick={toggle}>{expanded ? "Read less" : "Read more"}</button>
    </div>
  );
}

export default ExpandableBox;
