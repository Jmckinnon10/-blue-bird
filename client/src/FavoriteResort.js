import React from "react";
import Snowfall from "react-snowfall";

function FavoriteResort({ user }) {
  return (
    <>
      {user.favorite_resort ? (
        <div className="fav-card">
          <div className="favorite-resort">
            <img className="resort-name" src={user.favorite_resort.name} />
            <img className="resort-map" src={user.favorite_resort.map} />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default FavoriteResort;
