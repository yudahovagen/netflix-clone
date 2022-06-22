import React, { useState, useEffect } from "react";
import axios from "axios";
import ProgressBar from "./ProgressBar";
import ItemCard from "./ItemCard";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  WheelWrapper,
  styledArrow,
  Title,
  WheelContainer,
  WheelItems,
  Handle,
  Header,
} from "../styledComponents/ContentWheel.styled";
import { API_KEY } from "../../api/key";

const SLIDER_MAX = 0;
const SLIDER_MIN = -300;
const OPTS = {
  width: "100%",
  height: "400",
  playerVars: {
    autoplay: 1,
  },
};

const ContentWheel = ({ data }) => {
  const [items, setItems] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [sliderPosition, setSliderPosition] = useState(0);
  //we want to pass to our transcaleX a precentage value so we use the helper for that
  const [helper, setHelper] = useState("0%");
  //we want to make sure that the user cant click on the handle while it already in effect
  const [disableHandle, setDisableHandle] = useState(false);
  
  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await axios.get(`${data.url}${API_KEY}`);
        setItems([...response.data.results]);
      } catch (err) {
        console.log(err);
      }
    };
    getItems(data.url);
  }, [data.url]);
  const sliderScrollLeft = () => {
    let currentValue = sliderPosition;
    currentValue === SLIDER_MAX
      ? setSliderPosition(SLIDER_MIN)
      : setSliderPosition(currentValue + 100);
  };
  const sliderScrollRight = () => {
    let currentValue = sliderPosition;
    currentValue === SLIDER_MIN
      ? setSliderPosition(SLIDER_MAX)
      : setSliderPosition(currentValue - 100);
  };
  useEffect(() => {
    setHelper(sliderPosition.toString() + "%");
    setDisableHandle((c) => !c);
    setTimeout(() => {
      setDisableHandle((c) => !c);
    }, 1000);
  }, [sliderPosition]);

  const handleClick = (movie) => {
    let name;
    movie.name ? (name = movie.name) : (name = movie.original_title);
    trailerUrl
      ? setTrailerUrl("")
      : movieTrailer(name || "")
          .then((url) => {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
          })
          .catch((err) => console.log(err));
  };

  return (
    <>
      <WheelWrapper>
        <Header>
          <Title>{data.title}</Title>
          <ProgressBar sliderPosition={sliderPosition} />
        </Header>
        <WheelContainer>
          <Handle onClick={disableHandle ? null : sliderScrollLeft}>
            <ArrowBackIosIcon sx={styledArrow} />
          </Handle>
          <WheelItems position={helper}>
            {items.length > 0 ? (
              items.map((i) => (
                <ItemCard handleClick={handleClick} key={i.id} item={i} />
              ))
            ) : (
              <></>
            )}
          </WheelItems>
          <Handle onClick={disableHandle ? null : sliderScrollRight}>
            <ArrowForwardIosIcon sx={styledArrow} />
          </Handle>
        </WheelContainer>
      </WheelWrapper>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={OPTS} />}
    </>
  );
};

export default ContentWheel;
