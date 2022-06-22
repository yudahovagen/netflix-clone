import React, { useState, useEffect } from "react";
import { Bar, BarContainer } from "../styledComponents/ContentWheel.styled";

const ProgressBar = ({ sliderPosition }) => {
  const [active, setActive] = useState({
    0: true,
    1: false,
    2: false,
    3: false,
  });

  useEffect(() => {
    const handleActive = () => {
      switch (sliderPosition) {
        case 0:
          setActive({ 0: true, 1: false, 2: false, 3: false });
          break;
        case -100:
          setActive({ 0: false, 1: true, 2: false, 3: false });
          break;
        case -200:
          setActive({ 0: false, 1: false, 2: true, 3: false });
          break;
        case -300:
          setActive({ 0: false, 1: false, 2: false, 3: true });
          break;
        default:
          console.log("handleActive function error");
      }
    };
    handleActive();
  }, [sliderPosition]);  

  return (
    <BarContainer>
      <Bar current={active[0]} />
      <Bar current={active[1]} />
      <Bar current={active[2]} />
      <Bar current={active[3]} />
    </BarContainer>
  );
};

export default ProgressBar;
