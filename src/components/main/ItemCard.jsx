import React, { memo } from "react";
import { ItemImg } from "../styledComponents/ContentWheel.styled";

const base_url = `https://image.tmdb.org/t/p/original/`;

const ItemCard = ({ item, handleClick }) => {
  const showTrailer = () => {    
    handleClick(item);
  };
  return (
    <ItemImg
      onClick={showTrailer}
      src={`${base_url}${item.poster_path}`}
      alt={item.name}
    />
  );
};

export default memo(ItemCard);
