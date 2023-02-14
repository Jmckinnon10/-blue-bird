import React from "react";

function FavoriteResort({ user }) {
  return (
    <>
      {user.favorite_resort ? (
        <div className="fav-card">
          <h1 className="liked-text">
            Based on the trails you've ⭐, your favorite resort is...
          </h1>
          <img className="resort-name" src={user.favorite_resort.name} />
        </div>
      ) : (
        <div className="no-favorite">
          <h1 className="first-favorite">
            ⭐ your favorite trails to show your favorite resort...
          </h1>
        </div>
      )}
    </>
  );
}

export default FavoriteResort;
