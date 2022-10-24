import React from "react";
import Section from "./Section";


export default function Skills(props) {
  function skillsContent() {
    return <p className="skills-content">{ props.info }</p>;
  }
  
  return <Section
    sectionName='Skills'
    sectionContent={skillsContent()}
  /> 

}

