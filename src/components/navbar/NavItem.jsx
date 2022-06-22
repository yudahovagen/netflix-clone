import React from "react";
import { NavButton, NavButtonList } from "../styledComponents/Navbar.styled";

const NavItem = (props) => {
  return (
    <NavButtonList>
      <NavButton
        selected={props.active === props.item.name ? true : false}
        onClick={() => props.setActive(props.item.name)}
      >
        {props.item.name}
      </NavButton>
    </NavButtonList>
  );
};

export default NavItem;
