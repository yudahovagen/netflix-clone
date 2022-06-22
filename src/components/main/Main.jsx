import React from "react";
import Banner from "./Banner";
import ContentWheel from "./ContentWheel";
import { MainContainer } from "../styledComponents/Main.styled";
import { data } from "./apiData";
const apiData = data;
const Main = () => {
  return (
    <MainContainer>
      <Banner />
      {apiData.map((item) => (
        <ContentWheel key={item.id} data={item} />
      ))}
    </MainContainer>
  );
};

export default Main;
