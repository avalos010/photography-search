import React from "react";
import { PacmanLoader } from "react-spinners";

export default function Spinner() {
  return (
    <div className="spinner-container">
      <PacmanLoader size={100} color={"#2c2c2c"} />
    </div>
  );
}
