import React from "react";
import Section from "./Section";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  aboutContent() {
    return <p className="about-content">{ this.props.info }</p>;
  }

  render() {
    return <Section
      sectionName='About'
      sectionContent={this.aboutContent()}
    /> 
  }
}

export default About;