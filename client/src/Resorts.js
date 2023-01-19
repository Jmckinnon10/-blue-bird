import React from "react";
import { useState } from "react";
import ReviewTrail from "./ReviewTrail";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);

function Resorts({ name, map, trails, user }) {
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
        <button
          className={`favorite-button ${favoriteClicked ? "selected" : ""}`}
          onClick={() => setFavoriteClicked(!favoriteClicked)}
        >
          <FontAwesomeIcon icon={faStar} />
        </button>
        {trail.name}
        {trail.difficulty}
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
