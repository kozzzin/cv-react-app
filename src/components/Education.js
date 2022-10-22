import React from "react";
import Section from "./Section";
import SectionCard from "./SectionCard";

class Education extends React.Component {
  constructor(props) {
    super(props);
  }

  educationContent() {
    return (
      this.props.cards.map(
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

  render() {
    return <Section
      sectionName='Education'
      sectionContent={this.educationContent()}
    /> 
  }
}


export default Education;