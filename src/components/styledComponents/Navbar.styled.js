import styled from "styled-components";

/* !!!-------------------MAIN------------------------!!!*/
export const NavContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  z-index: 25;
  width: 100%;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  transition: 1s;
`;
export const NavLeft = styled.div`
  padding: 0.1em;
  margin: 0;
  display: inline-flexbox;
`;
export const NavRight = styled.div`
  padding: 0.1em;
  margin-left: 1em;
  display: inline-flexbox;
`;
export const NetflixLogo = styled.img`
  display: inline-block;  
  height: 5vh;
  cursor: pointer;
  margin: 0.5em 0.5em 0.5em 3em;
`;
export const NavButtonContainer = styled.ul`
  display: flex;
  flex-direction: ${(props) => props.direction};
  padding: 0;
  @media (max-width: 926px) {
    display: ${(props) => (props.media ? "flex" : "none")};
  }
  @media (min-width: 926px) {
    display: ${(props) => (props.media ? "none" : "flex")};
  }
`;
export const NavButtonList = styled.li`
  display: flex;
  margin: 0 1em;
`;
export const NavButton = styled.a`
  color: #fff;
  background-color: transparent;
  cursor: pointer;
  font-weight: ${(props) => (props.selected ? "bold" : "normal")};
  &:hover {
    opacity: ${(props) => (!props.selected ? 0.7 : 1)};
    transition: opacity 0.3s ease;
  }
`;
/* !!!-------------------COLLAPSED------------------------!!!*/
export const CollapsedMenuContainer = styled.div`
  z-index: 200;
  position: absolute;
  background-color: transparent;
  left: 115px;
  display: block;
  width: 260px;
  height: 307px;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;
export const CollapsedMenuButton = styled.a`
  color: #fff;
  font-weight: bold;
`;
export const CollapsedBar = styled.div`
  background-color: #fff;
  height: 2px;
  width: 260px;
`;
export const CollapsedButtonList = styled.li`
  background-color: rgba(12, 9, 7, 0.5);
  display: flex;
  height: 56.125px;
  align-items: center;
  flex-direction: column;
  &:hover {
    opacity: 0.5;
    transition: opacity 0.3s ease;
  }
`;
export const CollapsedItem = styled.a`
  text-decoration: none;
  width: max-content;
  color: ${(props) => (props.selected ? "#FFFFFF" : "#B3B3B3")};
  margin: auto;
`;
/*!!!------------------SEARCH----------------- */
export const SearchBox = styled.div`
  margin: 5px;
  background-color: inherit;
  display: flex;
  border: ${(props) =>
    props.visability ? "solid 1px rgba(255, 255, 255, 0.85)" : "none"};
  transition: width 0.5s linear,background-color 1s;
  
  @media (max-width: 575px) {
    display: ${(props) => (props.media ? "flex" : "none")};
  }
`;
export const SearchButton = styled.button`
  background-color: inherit;
  border-width: 0;
`;
export const SearchInput = styled.input`
  color: #ffffff;
  background-color: inherit;
  border: 0px solid;
  outline: none;
  width: ${(props) => (props.visability ? "162.4px" : "0px")};
  opacity: ${(props) => (props.visability ? "1" : "0")};
  transition: visibility 0s linear 0.5s, opacity 0.5s linear;
`;
