import React from 'react';
import '../styles/styles.css';
import Header from './Header';
import About from './About';
import Career from './Career';
import Education from './Education';
import Skills from './Skills';



export default function ReadyCV(props) {
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
    <div className="cv-container">
      <Header
        name = { name }
        surname = { surname }
        site = { site }
        email = { email }
        tel = { tel }
        geo = { geo }
        />
      <About
        info = { about }
      />
      <Career
        cards = { career }
      />
      <Education
        cards = { education }
      />
      <Skills
        info = { skills }
      />
    </div>
  );
}


