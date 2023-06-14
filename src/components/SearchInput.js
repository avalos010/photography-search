import React, { useContext, useState, useEffect } from "react";
import camera from "../img/camera.jpg";
import { ReducerContext } from "./App";

export default function SearchInput({ page }) {
  const { dispatch } = useContext(ReducerContext);
  const [query, setQuery] = useState("");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearch = async (e) => {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
    );
    const json = await res.json();
    dispatch({ type: "searchedImages", payload: json.results });
  };

  useEffect(() => {
    if (query) {
      handleSearch();
      window.scrollTo(0, 300);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  return (
    <div className="search-intro">
      {console.log(page)}
      <h2>Search for photography</h2>
      <img src={camera} alt="camera" className="camera-intro" />
      <div className="input-container">
        <input
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          className="search_input"
        />
        <input type="submit" className="search_btn" onClick={handleSearch} />
      </div>
    </div>
  );
}
