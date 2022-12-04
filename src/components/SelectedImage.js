import React, { useContext, useEffect } from "react";
import { ReducerContext } from "./App";
import Image from "./Image";

const SelectedImage = () => {
  const { state, dispatch } = useContext(ReducerContext);

  const handleUnselectImage = () => {
    dispatch({ type: "selectedImage", payload: null });
  };

  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.code === "Escape") {
        handleUnselectImage();
      }
    }

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, []);

  return (
    <div
      className="selected-image-container image-container"
      onClick={handleUnselectImage}
    >
      <Image img={state.selectedImage} url={state.selectedImage.urls.small} />
      <div className="selected-image-btn-container">
        <button onClick={handleUnselectImage}>Close</button>
      </div>
    </div>
  );
};

export default SelectedImage;
