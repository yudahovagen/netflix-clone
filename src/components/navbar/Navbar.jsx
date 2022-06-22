import React, { useState, useEffect } from "react";
import NavItem from "./NavItem";
import Collapse from "./Collapse";
import NAVBARITEMS from "./navbaritems";
import Search from "./Search";
import NetflixHeader from "./NetflixHeader";
import {
  NavContainer,
  NavLeft,
  NavRight,
  NavButtonContainer,
} from "../styledComponents/Navbar.styled";

const BACKGROUND = { dark: "rgba(0,0,0,1)", light: "rgba(0,0,0,0.1)" };
const Navbar = () => {
  const [bgColor, setbgColor] = useState(BACKGROUND.light);
  const [active, setActive] = useState(
    NAVBARITEMS.filter((e) => e.id === "1").map((e) => e.name)[0]
  );

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 1
        ? setbgColor(BACKGROUND.dark)
        : setbgColor(BACKGROUND.light);
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavContainer backgroundColor={bgColor}>
      <NavLeft>
        <NetflixHeader />
        <Collapse active={active} setActive={setActive} />
        <NavButtonContainer direction={"row"}>
          {NAVBARITEMS.map((item) => {
            return (
              <NavItem
                key={item.id}
                active={active}
                setActive={setActive}
                item={item}
              />
            );
          })}
        </NavButtonContainer>
      </NavLeft>
      <NavRight>
        <Search bgColor={bgColor}/>
      </NavRight>
    </NavContainer>
  );
};

export default Navbar;
