import React from "react";
import Section from "./Section";
import SectionCard from "./SectionCard";

export default function Education(props) {

  function educationContent() {
    return (
      props.cards.map(
        (card, index) => {
          return (
            <SectionCard
            key = { card.id }
            cardHeading = { card.degree }
            cardStartDate = { card.startDate }
            cardEndDate = { card.endDate }
            cardSubHeading = { card.institution }
            info = { card.info }
          />
          );
        }
      )
    );
  }

  return <Section
    sectionName='Education'
    sectionContent={educationContent()}
  /> 

}