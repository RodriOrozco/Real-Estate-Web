import React from "react";
import styled from "styled-components";
import menuData from "../../Data/MenuData";
import { Button } from "../Navbar/NavBar.styled";
import {
  Icon,
  CloseIcon,
  DropDownLink,
  DropDownMenu,
  DropDownWrapper,
  BtnWrap,
} from "./DropDown.styled";

export const DropDownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #cd853f;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const DropDown = ({ isOpen, toggle }) => {
  return (
    <DropDownContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropDownWrapper>
        <DropDownMenu>
          {menuData.map((item, index) => {
            return (
              <DropDownLink to={item.Link} key={index}>
                {item.title}
              </DropDownLink>
            );
          })}
        </DropDownMenu>
        <BtnWrap>
          <Button primary="true" round="true" big="true" to="/contact">
            Contact Us
          </Button>
        </BtnWrap>
      </DropDownWrapper>
    </DropDownContainer>
  );
};

export default DropDown;
