import React from "react";
import { useState } from "react";

function ClickForFavorite({
  user,
  trail,
  setFavoriteClicked,
  favoriteClicked,
  setNewFavorite,
}) {
  const [buttonColor, setButtonColor] = useState("white");

  // console.log(trail.id);
  const fav_obj = {
    favorited: favoriteClicked,
    user_id: user.id,
    trail_id: trail.id,
  };

  const handleClick = (e) => {
    e.stopPropagation(e);
    fetch("/favorite", {
      method: "POST",
      body: JSON.stringify(fav_obj),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((favData) => {
        setButtonColor(favData ? "yellow" : "white");
        setFavoriteClicked(favData);
        setNewFavorite(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container">
      <button
        onClick={handleClick}
        style={{ backgroundColor: buttonColor, cursor: "pointer" }}
      >
        ⭐
      </button>
    </div>
  );
}

export default ClickForFavorite;
