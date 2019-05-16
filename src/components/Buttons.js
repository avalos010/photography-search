import React from "react";

export default function Buttons({ set, page }) {
  return (
    <div className="button-container">
      <button onClick={() => set(page - 1)} disabled={page === 1}>
        Prev
      </button>
      <button onClick={() => set(page + 1)}>Next</button>
    </div>
  );
}
