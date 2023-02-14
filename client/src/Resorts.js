import React from "react";
import { useState } from "react";
import ReviewTrail from "./ReviewTrail";
import ClickForFavorite from "./ClickForFavorite";
function Resorts({ name, map, trails, user, setNewFavorite, setNewReview }) {
  const [showTrails, setShowTrails] = useState(false);
  const [selectedTrailId, setSelectedTrailId] = useState(null);
  const [favoriteClicked, setFavoriteClicked] = useState(null);

  const mapTrails = trails.map((trail) => {
    return (
      <a
        style={{ cursor: "pointer" }}
        className="custom-bullet"
        key={trail.id}
        onClick={() =>
          setSelectedTrailId(selectedTrailId === trail.id ? null : trail.id)
        }
      >
        <div className="trail-info">
          {trail.name}
          {trail.difficulty}
        </div>
        <ClickForFavorite
          setNewFavorite={setNewFavorite}
          user={user}
          trail={trail}
          setFavoriteClicked={setFavoriteClicked}
          favoriteClicked={favoriteClicked}
        />
        <br />
        {selectedTrailId === trail.id ? (
          trail.reviews.length ? (
            <div>
              {trail.reviews.map((review) => (
                <div className="review-box" key={review.id}>
                  <p className="review-tag">
                    {review.review_name}:
                    <br />
                    <br />
                    {review.comment
                      ? review.comment
                      : "No Reviews for this Trail yet"}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-reviews">Trail has not been reviewed</p>
          )
        ) : null}
      </a>
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
          <ReviewTrail
            mapTrails={mapTrails}
            user={user}
            trails={trails}
            setNewReview={setNewReview}
          />
        ) : null}
      </div>
    </div>
  );
}

export default Resorts;
