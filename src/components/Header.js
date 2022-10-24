import React from "react";

export default function Header(props) {
  return <div className="header-container">
    <div className="name-container">
      <h1 className="name">{ props.name }<br />{ props.surname }</h1>
    </div>
    <div className="contacts-container">
      <ul className="contacts">
        <li className="site">{ props.site }</li>
        <li className="tel">{ props.tel }</li>
        <li className="email">{ props.email }</li>
        <li className="geo">{ props.geo }</li>
      </ul>
    </div>
  </div>;

}


