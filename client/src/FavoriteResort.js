import React from "react";
import Snowfall from "react-snowfall";

function FavoriteResort({ user }) {
  return (
    <>
      {user.favorite_resort ? (
        <div className="fav-card">
          <h1>Based on the trails you've liked your favorite resort is...</h1>
          <img className="resort-name" src={user.favorite_resort.name} />
        </div>
      ) : (
        <h1 className="first-favorite">
          Like your favorite trails to show your favorite resort
        </h1>
      )}
    </>
  );
}

export default FavoriteResort;
