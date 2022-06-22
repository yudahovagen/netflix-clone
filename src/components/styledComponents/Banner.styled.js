import styled from "styled-components";

export const BannerBackground = styled.header`
  background-size: cover;
  padding: 0;
  margin: 0;
  z-index: -50;
  transition: 0.5 ease-in-out;
`;
export const BannerContent = styled.div`
  padding: 40vh 10vh 0 10vh;
  margin: 0;
  z-index: 0;
  height: 50vh;
  max-height: 50vh;
  min-height: 50vh;
`;
export const BannerTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.3rem ;
  user-select: none;
`;
export const BannerButton = styled.button`
  cursor: pointer;
  color: #fff;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 0.2vw;
  margin-right: 1rem;
  padding: 1vh 4vh;
  background-color: rgba(51, 51, 51, 0.5);
  &:hover {
    color: #000;
    background-color: #e6e6e6;
    transition: all 0.2s;
  }
`;
export const BannerDescription = styled.div`
  font-size: 1.25rem;
  user-select: none;
`;
export const BannerFadeBottom = styled.div`
  height: 10vh;
  z-index: -45;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #141414
  );
`;
