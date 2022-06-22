import React from "react";
import { NetflixLogo } from "../styledComponents/Navbar.styled";
import mainLogo from "../../images/netflix-logo-0.png";

const NetflixHeader = () => {
  return (
    // <NetflixButton aria-label="Netflix" href="/browse">
    //   Netflix
    // </NetflixButton>
    <NetflixLogo a="" src={mainLogo} />
  );
};

export default NetflixHeader;
