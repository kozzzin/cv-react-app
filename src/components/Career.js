import React from "react";
import Section from "./Section";
import SectionCard from "./SectionCard";

export default function Career(props) {

  function careerContent() {
    return (
      props.cards.map(
        (card, index) => {
          return (
            <SectionCard 
            key = { card.id }
            cardHeading = { card.companyName }
            cardStartDate = { card.startDate }
            cardEndDate = { card.endDate }
            cardSubHeading = { card.position }
            info = { card.info }
          />
          );
        }
      )
    );
  }


  return <Section
    sectionName='Career'
    sectionContent={careerContent()}
  /> 

}


