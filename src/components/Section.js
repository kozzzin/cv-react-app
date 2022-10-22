import React from "react";

class Section extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="section-container">
        <h3 className="section-name">
          { this.props.sectionName }
        </h3>
        <div className="section-content">
          { this.props.sectionContent }
        </div>
      </div>
    );
  }
}

export default Section;