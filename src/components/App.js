import React, { createContext, useState, useReducer, useEffect } from "react";
import reducer from "../reducer/reducer";

import Popular from "./Popular";
import Navigation from "./Navigation";
import { Switch, Route } from "react-router-dom";
import "../styles.css";
import SearchImages from "./SearchImages";
import Latest from "./Latest";
import Intro from "./Intro";

export const ReducerContext = createContext();
export default function App() {
  const [state, dispatch] = useReducer(reducer, {
    images: [],
    faves: [],
    popular: []
  });

  document.title = "Photography";
  return (
    <div>
      <Navigation />
      <ReducerContext.Provider value={{ state, dispatch }}>
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route exact path="/popular" component={Popular} />
          <Route exact path="/search" component={SearchImages} />
          <Route exact path="/latest" component={Latest} />
        </Switch>
      </ReducerContext.Provider>
    </div>
  );
}
