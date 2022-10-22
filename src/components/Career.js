import React from "react";
import Section from "./Section";
import SectionCard from "./SectionCard";

class Career extends React.Component {
  constructor(props) {
    super(props);
  }

  careerContent() {
    return (
      this.props.cards.map(
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

  render() {
    return <Section
      sectionName='Career'
      sectionContent={this.careerContent()}
    /> 
  }
}


export default Career;