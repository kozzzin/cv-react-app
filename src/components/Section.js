import React from "react";

export default function Section(props) {
  return (
    <div className="section-container">
      <h3 className="section-name">
        { props.sectionName }
      </h3>
      <div className="section-content">
        { props.sectionContent }
      </div>
    </div>
  );
}

