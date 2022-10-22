import React from "react";
import Section from "./Section";

class FormCV extends React.Component {
  constructor(props) {
    super(props);
  }

  formContent() {
    console.log(this.props);
    return <p className="skills-content">Eat no meat, drink water without sparkles, speaking 5 languages, being honest</p>;
  }

  getDeleteButton() {
    return (
      <button className="add" name='career' onClick = { this.props.add }>
        Add one more
      </button>
    );  
}

  getCareerCards(career) {
    return career.map(
      (card, index) => {
         return (
          <fieldset id = { card.id } key = { card.id } name="career">
              <legend>Company { index + 1 }</legend>
              <input type="text" name="companyName" onChange={ this.props.changer } value = { card.companyName }placeholder="CompanyName Inc." />
              <input type="text" name="position" onChange={ this.props.changer } value = { card.position } placeholder="Chairman Ceo" />
              <input type="text" name="startDate" onChange={ this.props.changer } value = { card.startDate } placeholder="From: 2021" />
              <input type="text" name="endDate" onChange={ this.props.changer } value = { card.endDate } placeholder="To: 2022 or present" />
              <textarea name="info" onChange={ this.props.changer } value = { card.info }></textarea>
              <button className="delete" onClick={ this.props.delete }>Delete this</button>
            </fieldset>
        );
      }
    )
    .concat(
      [
        this.getDeleteButton(),
      ]
    );
  }

  getEducationCards(education) {
    return education.map(
      (card, index) => {
         return (
          <fieldset id = { card.id } key = { card.id } name="education">
            <legend>Study { index + 1 }</legend>
            <input type="text" value = { card.degree } onChange={ this.props.changer }  name="degree" placeholder="Degree" />
            <input type="text" value = { card.institution } onChange={ this.props.changer } name="institution" placeholder="Institution" />
            <input type="text" value = { card.startDate } onChange={ this.props.changer } name="startDate" placeholder="From: 2021" />
            <input type="text" value = { card.endDate } onChange={ this.props.changer } name="endDate" placeholder="To: 2022 or present" />
            <textarea value = { card.info } onChange={ this.props.changer } name="info"></textarea>
            <button className="delete" onClick={ this.props.delete }>Delete this</button>
          </fieldset>
        );
      }
    )
    .concat(
      [
        this.getDeleteButton(),
      ]
    );
  }

  render() {
    const {
      name,
      surname,
      tel,
      site,
      geo,
      email,
      about,
      career,
      education,
      skills
    } = this.props.data;
    


    return (
      <form>
        <fieldset>
          <legend>Your name</legend>
          <input type="text" name="name" onChange={ this.props.changer } value={ name } placeholder="name" />
          <input type="text" name="surname" onChange={ this.props.changer } value={ surname } placeholder="surname" />
        </fieldset>

        <fieldset>
          <legend>Contacts</legend>
          <input type="url" name="site" onChange={ this.props.changer }  value={ site } placeholder="www.domain.com" />
          <input type="tel" name="tel" onChange={ this.props.changer }  value = { tel } placeholder="+390 456-56-78" />
          <input type="email" name="email" onChange={ this.props.changer }  value = { email } placeholder="name@domain.com" />
          <input type="text"name="geo" onChange={ this.props.changer }  value = { geo } placeholder="New York, USA" />
          
        </fieldset>

        <fieldset>
          <legend>About</legend>
          <textarea value = { about } onChange={ this.props.changer }  name="about"></textarea>
        </fieldset>

        <fieldset>
          <legend>Career</legend>
          { this.getCareerCards(career) }
        </fieldset>

        <fieldset>
          <legend>Education</legend>
          { this.getEducationCards(education) }
        </fieldset>

        <fieldset>
          <legend>Skills</legend>
          <textarea value={ skills } onChange={ this.props.changer }  name="skills"></textarea>
        </fieldset>
        <button className="print" onClick = { this.props.save }>SAVE</button>&nbsp;
        <button className="print" onClick = { this.props.print }>PRINT</button>
      </form>
    );
  }
}


export default FormCV;