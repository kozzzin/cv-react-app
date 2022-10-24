import React from "react";
import Section from "./Section";

export default function FormCV(props) {
  function getAddButton(buttonName) {
    return (
      <button className="add" name={ buttonName } onClick = { props.add }>
        Add one more
      </button>
    );  
  }

  function getCareerCards(career) {
    return career.map(
      (card, index) => {
        return (
          <fieldset id = { card.id } key = { card.id } name="career">
              <legend>Company { index + 1 }</legend>
              <input type="text" name="companyName" onChange={ props.changer } value = { card.companyName }placeholder="CompanyName Inc." />
              <input type="text" name="position" onChange={ props.changer } value = { card.position } placeholder="Chairman Ceo" />
              <input type="text" name="startDate" onChange={ props.changer } value = { card.startDate } placeholder="From: 2021" />
              <input type="text" name="endDate" onChange={ props.changer } value = { card.endDate } placeholder="To: 2022 or present" />
              <textarea name="info" onChange={ props.changer } value = { card.info }></textarea>
              <button className="delete" onClick={ props.delete }>Delete this</button>
            </fieldset>
        );
      }
    )
    .concat(
      [
        getAddButton('career'),
      ]
    );
    }

  function getEducationCards(education) {
    return education.map(
      (card, index) => {
         return (
          <fieldset id = { card.id } key = { card.id } name="education">
            <legend>Study { index + 1 }</legend>
            <input type="text" value = { card.degree } onChange={ props.changer }  name="degree" placeholder="Degree" />
            <input type="text" value = { card.institution } onChange={ props.changer } name="institution" placeholder="Institution" />
            <input type="text" value = { card.startDate } onChange={ props.changer } name="startDate" placeholder="From: 2021" />
            <input type="text" value = { card.endDate } onChange={ props.changer } name="endDate" placeholder="To: 2022 or present" />
            <textarea value = { card.info } onChange={ props.changer } name="info"></textarea>
            <button className="delete" onClick={ props.delete }>Delete this</button>
          </fieldset>
        );
      }
    )
    .concat(
      [
        getAddButton('education'),
      ]
    );
  }


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
  } = props.data;
    


  return (
    <form>
      <fieldset>
        <legend>Your name</legend>
        <input type="text" name="name" onChange={ props.changer } value={ name } placeholder="name" />
        <input type="text" name="surname" onChange={ props.changer } value={ surname } placeholder="surname" />
      </fieldset>

      <fieldset>
        <legend>Contacts</legend>
        <input type="url" name="site" onChange={ props.changer }  value={ site } placeholder="www.domain.com" />
        <input type="tel" name="tel" onChange={ props.changer }  value = { tel } placeholder="+390 456-56-78" />
        <input type="email" name="email" onChange={ props.changer }  value = { email } placeholder="name@domain.com" />
        <input type="text"name="geo" onChange={ props.changer }  value = { geo } placeholder="New York, USA" />
        
      </fieldset>

      <fieldset>
        <legend>About</legend>
        <textarea value = { about } onChange={ props.changer }  name="about"></textarea>
      </fieldset>

      <fieldset>
        <legend>Career</legend>
        { getCareerCards(career) }
      </fieldset>

      <fieldset>
        <legend>Education</legend>
        { getEducationCards(education) }
      </fieldset>

      <fieldset>
        <legend>Skills</legend>
        <textarea value={ skills } onChange={ props.changer }  name="skills"></textarea>
      </fieldset>
      <button className="print" onClick = { props.save }>SAVE</button>&nbsp;
      <button className="print" onClick = { props.print }>PRINT</button>
    </form>
  );
}