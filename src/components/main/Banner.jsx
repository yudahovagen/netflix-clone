import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY } from "../../api/key";
import { fetchNetflixOrigin } from "./apiData";
import {
  BannerBackground,
  BannerContent,
  BannerTitle,
  BannerButton,
  BannerDescription,
  BannerFadeBottom,
} from "../styledComponents/Banner.styled";

const URL = "https://image.tmdb.org/t/p/original";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const requestRandomOriginMovie = async () => {
      try {
        const response = await axios.get(`${fetchNetflixOrigin.url}${API_KEY}`);
        const randomMovieIndex = Math.floor(Math.random() * 20);
        const currentMovie = [response.data.results[randomMovieIndex]][0];
        setMovie([currentMovie][0]);
      } catch (err) {
        console.error(err);
      }
    };
    requestRandomOriginMovie();
  }, []);

  function truncate(str, n) {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <BannerBackground
      style={{
        backgroundImage: `url(${URL}${movie.backdrop_path})`,
        backgroundPosition: "center center",
        height: "100vh",
      }}
    >
      <BannerContent>
        <BannerTitle>{movie.title}</BannerTitle>
        <BannerButton>Play</BannerButton>
        <BannerButton>My List</BannerButton>
        <BannerDescription>
          {movie.overview ? truncate(movie.overview, 250) : ""}
        </BannerDescription>
      </BannerContent>
      <BannerFadeBottom></BannerFadeBottom>
    </BannerBackground>
  );
};

export default Banner;
