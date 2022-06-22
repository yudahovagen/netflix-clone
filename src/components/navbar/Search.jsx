import React, { useState, useRef, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  SearchBox,
  SearchButton,
  SearchInput,
} from "../styledComponents/Navbar.styled";
import ClearIcon from "@mui/icons-material/Clear";

const Search = ({ bgColor }) => {
  const [text, setText] = useState("");
  const [visability, setVisability] = useState(false);
  const [clearText, setClearText] = useState("hidden");

  const refInput = useRef(null);

  const handleClick = () => {
    //here we need to add the search interation
    if (text.length > 0) return;
    setVisability((prevState) => !prevState);
    setTimeout(() => {
      refInput.current.focus();
    }, 0);
  };

  useEffect(() => {
    text.length > 0 ? setClearText("visible") : setClearText("hidden");
  }, [text]);
  const handleChange = (e) => {
    if (!visability) return;
    setText(e.target.value);
  };

  return (
    <SearchBox visability={visability} backgroundColor={bgColor}>
      <SearchButton onClick={handleClick}>
        <SearchIcon sx={{ color: "#fff" }} fontSize="large" />
      </SearchButton>
      <SearchInput
        ref={refInput}
        visability={visability}
        placeholder="Titles,people,genres"
        value={text}
        type="text"
        onChange={handleChange}
      />
      <ClearIcon
        onClick={() => setText("")}
        sx={{
          color: "#ffffff",
          margin: "auto",
          visibility: `${clearText}`,
        }}
      />
    </SearchBox>
  );
};

export default Search;
