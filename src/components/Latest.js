import React, { useContext, useEffect, useState } from "react";
import { ReducerContext } from "./App";
import Image from "./Image";
import Buttons from "./Buttons";

export default function Latest() {
  const { state, dispatch } = useContext(ReducerContext);
  const [page, setPage] = useState(1);
  document.title = "Latest | Photography";

  useEffect(() => {
    const getLatestImages = async () => {
      const res = await fetch(
        `https://api.unsplash.com/photos?page=${page}&client_id=${
          process.env.REACT_APP_ACCESS_KEY
        }`
      );
      const json = await res.json();
      dispatch({ type: "latestImages", payload: json });
    };

    getLatestImages();
  }, [dispatch, page]);

  return (
    <div>
      <h3 className="text-center">Latest Images</h3>

      <ul className="image-container">
        {state.latest
          ? state.latest.map(img => <Image img={img} key={img.id} />)
          : null}
      </ul>

      <Buttons set={setPage} page={page} />
    </div>
  );
}
