import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="header-container">
      <div className="name-container">
        <h1 className="name">{ this.props.name }<br />{ this.props.surname }</h1>
      </div>
      <div className="contacts-container">
        <ul className="contacts">
          <li className="site">{ this.props.site }</li>
          <li className="tel">{ this.props.tel }</li>
          <li className="email">{ this.props.email }</li>
          <li className="geo">{ this.props.geo }</li>
        </ul>
      </div>
    </div>;
  }
}


export default Header;