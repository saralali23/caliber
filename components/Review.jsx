import React from "react";

export const Review = ({ name, review }) => {
  return (
    <div className="card w-full bg-base-200 shadow-xl">
      <div className="card-body">
        <h2 className="card-title capitalize">{name}</h2>
        <p>{review}</p>
      </div>
    </div>
  );
};
