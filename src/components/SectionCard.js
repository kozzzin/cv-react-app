import React from "react";

export default function SectionCard(props) {
    return (
      <div className="section-card-container">
        <div className="section-card-header-container">
          <div className="section-card-header-heading">
            <h4>{ props.cardHeading }</h4>
          </div>
          <div className="section-card-header-dates">
            <span>{ props.cardStartDate }</span>&nbsp; - &nbsp;<span>{ props.cardEndDate }</span>
          </div>
        </div>
        <div className="section-card-subheading-container">
          <h5>{ props.cardSubHeading }</h5>
        </div>
        <div className="section-card-list-container">
          <p>{ props.info }</p>
        </div>
      </div>
    );
}

