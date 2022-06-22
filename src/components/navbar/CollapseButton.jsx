import React from "react";
import {
  CollapsedButtonList,
  CollapsedItem,
} from "../styledComponents/Navbar.styled";

const CollapseButton = ({ item, active, setActive }) => {
  return (
    <CollapsedButtonList key={item.id} onClick={() => setActive(item.name)}>
      <CollapsedItem selected={active === item.name ? true : false}>
        {item.name}
      </CollapsedItem>
    </CollapsedButtonList>
  );
};

export default CollapseButton;
