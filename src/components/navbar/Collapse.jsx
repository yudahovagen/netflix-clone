import React, { useState } from "react";
import NAVBARITEMS from "./navbaritems";
import CollapseButton from "./CollapseButton";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  NavButtonList,
  NavButtonContainer,
  CollapsedMenuButton,
  CollapsedMenuContainer,
  CollapsedBar,
} from "../styledComponents/Navbar.styled";

const Collapse = (props) => {  
  const [visibility, setVisibility] = useState(false);  

  return (
    <NavButtonContainer direction={"row"} media={"true"}>
      <NavButtonList>
        <CollapsedMenuButton
          onMouseEnter={() => setVisibility(true)}
          onMouseLeave={() => setVisibility(false)}
        >
          Browse
          <ArrowDropDownIcon style={{ verticalAlign: "middle" }} />
          <CollapsedMenuContainer visible={visibility}>
            <ArrowDropUpIcon
              viewBox="0 0 17 11"
              style={{
                verticalAlign: "middle",
                textAlign: "center",
                padding: "0 118px 0 118px",
                margin: "0",
              }}
            />
            <CollapsedBar />
            <NavButtonContainer media={"true"} direction={"column"}>
              {NAVBARITEMS.map((item) => {
                return (
                  <CollapseButton
                    key={item.id}
                    active={props.active}
                    setActive={props.setActive}
                    item={item}
                  />
                );
              })}
            </NavButtonContainer>
          </CollapsedMenuContainer>
        </CollapsedMenuButton>
      </NavButtonList>
    </NavButtonContainer>
  );
};

export default Collapse;
