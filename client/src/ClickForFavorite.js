import React from "react";

function ClickForFavorite({
  user,
  trail,
  setFavoriteClicked,
  favoriteClicked,
  setNewFavorite,
}) {
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
        console.log("clicked");
        setFavoriteClicked(favData);
        setNewFavorite(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <button onClick={handleClick}>Favorite</button>
    </div>
  );
}

export default ClickForFavorite;
