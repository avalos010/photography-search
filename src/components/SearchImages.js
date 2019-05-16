import React, { useContext, useState } from "react";
import SearchInput from "./SearchInput";
import { ReducerContext } from "./App";
import Buttons from "./Buttons";
import Image from "./Image";
import Spinner from "./Spinner";

export default function SearchImages() {
  const { state } = useContext(ReducerContext);
  const [page, setPage] = useState(1);
  document.title = "Search | Photography";

  return (
    <div>
      <SearchInput page={page} />
      <ul className="image-container">
        {state.images ? (
          state.images.map(img => <Image img={img} key={img.id} />)
        ) : (
          <Spinner />
        )}
      </ul>

      {!!state.images.length && <Buttons page={page} set={setPage} />}
    </div>
  );
}
