import React, { createContext, useReducer } from "react";
import reducer from "../reducer/reducer";
import Popular from "./Popular";
import Navigation from "./Navigation";
import { Route, Routes } from "react-router-dom";
import "../styles.css";
import SearchImages from "./SearchImages";
import Latest from "./Latest";
import Intro from "./Intro";
import SelectedImage from "./SelectedImage";

export const ReducerContext = createContext();
export default function App() {
  const [state, dispatch] = useReducer(reducer, {
    images: [],
    faves: [],
    popular: [],
    selectedImage: null,
  });

  document.title = "Photography";
  return (
    <div>
      <Navigation />
      <ReducerContext.Provider value={{ state, dispatch }}>
        {state.selectedImage && <SelectedImage />}
        <Routes>
          <Route exact path="/" element={<Intro />} />
          <Route exact path="/popular" element={<Popular />} />
          <Route exact path="/search" element={<SearchImages />} />
          <Route exact path="/latest" element={<Latest />} />
        </Routes>
      </ReducerContext.Provider>
    </div>
  );
}
