import React from "react";
import { useState } from "react";
import ReviewTrail from "./ReviewTrail";
import ClickForFavorite from "./ClickForFavorite";
function Resorts({ name, map, trails, user, setNewFavorite }) {
  const [showTrails, setShowTrails] = useState(false);
  const [selectedTrailId, setSelectedTrailId] = useState(null);
  const [favoriteClicked, setFavoriteClicked] = useState(null);

  const mapTrails = trails.map((trail) => {
    return (
      <li
        style={{ cursor: "pointer" }}
        className="custom-bullet"
        key={trail.id}
        onClick={() =>
          setSelectedTrailId(selectedTrailId === trail.id ? null : trail.id)
        }
      >
        {trail.name}
        {trail.difficulty}
        <span>
          <ClickForFavorite
            setNewFavorite={setNewFavorite}
            user={user}
            trail={trail}
            setFavoriteClicked={setFavoriteClicked}
            favoriteClicked={favoriteClicked}
          />
        </span>
        {selectedTrailId === trail.id ? (
          <div>
            {trail.reviews.map((review) => (
              <div className="review-box" key={review.id}>
                <p>
                  {review.review_name}:
                  <br />
                  <br />
                  {review.comment}
                </p>
              </div>
            ))}
          </div>
        ) : null}
      </li>
    );
  });

  return (
    <div className="resort-cards">
      <div className="map-images">
        <img className="image-title" src={name} />
        <p> Click map to view Trails</p>
        <img
          style={{ cursor: "pointer" }}
          src={map}
          className="image"
          onClick={() => setShowTrails(!showTrails)}
        />
        {showTrails ? (
          <ReviewTrail mapTrails={mapTrails} user={user} trails={trails} />
        ) : null}
      </div>
    </div>
  );
}

export default Resorts;
