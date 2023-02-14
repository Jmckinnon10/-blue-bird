import React from "react";
import { useState } from "react";

function ReviewTrail({ user, changeTrail, trails, mapTrails, setNewReview }) {
  const [createReview, setCreateReview] = useState("");
  const [trailId, setTrailId] = useState(null);
  const [review, setReview] = useState({});

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (trailId) {
      const configReview = {
        comment: createReview,
        user_id: user.id,
        trail_id: trailId.id,
      };
      console.log(configReview);
      fetch("/review", {
        method: "POST",
        body: JSON.stringify(configReview),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((reviewData) => {
          console.log(reviewData)
          setReview(reviewData);
          // setNewReview(true)
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const changeReview = (e) => {
    setCreateReview(e.target.value);
  };

  const handleChange = (e) => {
    const selectedTrail = trails.find((trail) => trail.name === e.target.value);
    setTrailId(selectedTrail);
  };

  return (
    <div>
      <form onSubmit={handleSubmitReview}>
        <div>
          <p>Select Trail to leave a review</p>
          <br />
          <select onChange={handleChange}>
            {trails.map((trail) => (
              <option value={changeTrail} key={trail.id}>
                {trail.name}
              </option>
            ))}
          </select>
        </div>
        <br />
        <div>
          <textarea
            className="text-input"
            placeholder="Leave a trail review"
            value={createReview}
            onChange={changeReview}
          ></textarea>
          <br />
          <button
            style={{ cursor: "pointer" }}
            className="post-button"
            type="submit"
          >
            POST REVIEW
          </button>
          <br />
          <p>Click trail to see reviews</p>
          <p>Click ⭐ to favorite a trail</p>
        </div>
      </form>
      <ul className="trails">{mapTrails}</ul>
    </div>
  );
}

export default ReviewTrail;
