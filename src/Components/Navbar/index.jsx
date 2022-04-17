import React from "react";
import menuData from "../../Data/MenuData";
import {
  Nav,
  Logo,
  MenuBars,
  NavMenu,
  NavBtn,
  NavMenuLinks,
  Button,
} from "./NavBar.styled";

const NavBar = () => {
  return (
    <Nav>
      <Logo to="/">ELIXR</Logo>
      <MenuBars />
      <NavMenu>
        {menuData.map((item, index) => {
          return (
            <NavMenuLinks to={item.Link} key={index}>
              {item.title}
            </NavMenuLinks>
          );
        })}
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary="true">
          Contact Us
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default NavBar;
