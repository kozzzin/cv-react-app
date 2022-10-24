import React from "react";
import Section from "./Section";


export default function About(props) {

  function aboutContent() {
    return <p className="about-content">{ props.info }</p>;
  }

  return <Section
    sectionName='About'
    sectionContent={aboutContent()}
  /> 
}
