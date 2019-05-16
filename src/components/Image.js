import React from "react";

export default function Image({ img }) {
  return (
    <li>
      <img src={img.urls.thumb} alt="img" />

      <span>
        By:
        <a href={img.user.links.html} target="_blank">
          {" "}
          {img.user.username}
        </a>
      </span>
    </li>
  );
}
