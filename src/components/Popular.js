import React, { useContext, useEffect, useState } from "react";
import { ReducerContext } from "./App";
import Buttons from "./Buttons";
import Image from "./Image";
import Spinner from "./Spinner";

export default function Popular() {
  const { state, dispatch } = useContext(ReducerContext);
  document.title = "Popular | Photography";
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getPopularImages = async () => {
      const res = await fetch(
        `https://api.unsplash.com/photos?order_by=popular&page=${page}&client_id=${
          process.env.REACT_APP_ACCESS_KEY
        }`
      );
      const json = await res.json();
      dispatch({ type: "popularImages", payload: json });
    };

    getPopularImages();
  }, [dispatch, page]);

  return (
    <div>
      <h3 className="text-center">Popular Images</h3>

      <ul className="image-container">
        {state.popular ? (
          state.popular.map(img => <Image img={img} key={img.id} />)
        ) : (
          <Spinner />
        )}
      </ul>

      <Buttons set={setPage} page={page} />
    </div>
  );
}
