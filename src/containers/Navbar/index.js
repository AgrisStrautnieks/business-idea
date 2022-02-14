import React from "react";
import { Nav, NavLink, Bars, Times, NavMenu } from "./NavbarElements";
import logo from "../../assets/test_img.png";
import "./navbar.css";

class ToggleMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        {this.state.isToggleOn ? <Bars /> : <Times />}
      </div>
    );
  }
}

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={logo} alt="logo" className="navbar-mario"></img>
        </NavLink>
        <ToggleMenu />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            Par Mums
          </NavLink>
          <NavLink to="/services" activeStyle>
            Produkti
          </NavLink>
          <NavLink to="/contacts" activeStyle>
            Kontakti
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
export default Navbar;
