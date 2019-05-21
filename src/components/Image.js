import React, { useContext } from "react";
import { ReducerContext } from "./App";

export default function Image({ img, url }) {
  const { dispatch } = useContext(ReducerContext);
  return (
    <li>
      <img
        onClick={() => dispatch({ type: "selectedImage", payload: img })}
        src={url || img.urls.thumb}
        alt="img"
      />

      <span>
        By:
        <a href={img.user.links.html} target="_blank">
          {img.user.username}
        </a>
      </span>
    </li>
  );
}
