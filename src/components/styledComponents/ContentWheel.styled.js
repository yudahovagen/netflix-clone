import styled from "styled-components";

export const WheelWrapper = styled.div`
  padding: 1rem 0;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const Title = styled.h1`
  color: #e5e5e5;
  margin: 0 1rem;
  padding: 0;
  font-size: 1.5vw;
`;
export const BarContainer = styled.div`
  display: flex;
  visibility: visible;
  gap: 0.1rem;
  margin: 1.5rem 3rem 0 3rem;
`;
export const Bar = styled.div`
  flex: 0 0 1.5rem;
  width: 1rem;
  height: 0.2rem;
  background-color: ${(props) =>
    props.current ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.5)"};
`;
export const WheelContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
`;
export const Handle = styled.div`
  width: 2rem;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: 0.5;
  z-index: 10;
  height: auto;
  margin: 0 0;
  &:hover {
    opacity: 1;
  }
`;
export const styledArrow = {
  height: "100%",
  width: "calc(100%-0.3rem)",
  margin: "0 0.3rem",
  "&:hover": {
    transform: "scale(1.2)",
  },
};
export const WheelItems = styled.div`
  display: flex;
  background-color: #333;
  width: calc(100% - 4rem);
  transform: translateX(${(props) => props.position});
  white-space: nowrap;
  transition: 0.75s linear;
`;
export const ItemImg = styled.img`
  flex-grow: 0 0 calc(100% / 5);
  max-width: calc(100% / 5);
  min-width: calc(100% / 5);
  aspect-ratio: 3/3.5;
  padding-right: 0;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    z-index: 50;
  }
`;

// action: discover/movie?api&with_genres=28
// comedy: /trending/all/week?api&language=en-US
// horror: /trending/all/week?api&language=en-US
// romantic: /trending/all/week?api&language=en-US
// documentaries: /trending/all/week?api&language=en-US
