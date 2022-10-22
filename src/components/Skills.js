import React from "react";
import Section from "./Section";

class Skills extends React.Component {
  constructor(props) {
    super(props);
  }

  skillsContent() {
    return <p className="skills-content">{ this.props.info }</p>;
  }

  render() {
    return <Section
      sectionName='Skills'
      sectionContent={this.skillsContent()}
    /> 
  }
}


export default Skills;