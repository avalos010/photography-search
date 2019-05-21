import React, { useContext } from "react";
import { ReducerContext } from "./App";
import Image from "./Image";

const SelectedImage = () => {
  const { state, dispatch } = useContext(ReducerContext);

  const handleUnselectImage = () => {
    dispatch({ type: "selectedImage", payload: null });
  };
  console.log(state.selectedImage);
  return (
    <div className="selected-image-container image-container">
      <Image img={state.selectedImage} url={state.selectedImage.urls.small} />
      <div className="selected-image-btn-container">
        <button onClick={handleUnselectImage}>Close</button>
      </div>
    </div>
  );
};

export default SelectedImage;
