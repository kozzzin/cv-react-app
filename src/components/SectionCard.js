import React from "react";

class SectionCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="section-card-container">
        <div className="section-card-header-container">
          <div className="section-card-header-heading">
            <h4>{ this.props.cardHeading }</h4>
          </div>
          <div className="section-card-header-dates">
            <span>{ this.props.cardStartDate }</span>&nbsp; - &nbsp;<span>{ this.props.cardEndDate }</span>
          </div>
        </div>
        <div className="section-card-subheading-container">
          <h5>{ this.props.cardSubHeading }</h5>
        </div>
        <div className="section-card-list-container">
          <p>{ this.props.info }</p>
        </div>
      </div>
    );
  }
}

export default SectionCard;