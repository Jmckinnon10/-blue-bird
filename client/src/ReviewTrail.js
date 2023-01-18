import React from 'react'
import { useState } from 'react'

function ReviewTrail({ user, changeTrail, trails, mapTrails }) {
  const [createReview, setCreateReview] = useState("")
  const [trailId, setTrailId] = useState(null);
  const [review, setReview] = useState({})

  const handleSubmitReview = e => {
    e.preventDefault()
    if (trailId) {
      const configReview = {
        comment: createReview,
        user_id: user.id,
        trail_id: trailId.id
      }
      console.log(configReview)
      fetch("/review", {
        method: "POST",
        body: JSON.stringify(configReview),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(reviewData => {
          setReview(reviewData)
        })
        .catch(error => {
          console.error(error)
        })
    }
  }

  const changeReview = (e) => {
    setCreateReview(e.target.value)
  }

  const handleChange = (e) => {
    const selectedTrail = trails.find((trail) => trail.name === e.target.value);
    setTrailId(selectedTrail);
  }

  return (
    <div>
      <form onSubmit={handleSubmitReview}>
        <div>
          <p>Select Trail to leave a review</p>
          <br />
          <select onChange={handleChange} >
            {trails.map((trail) => (
              <option
                value={changeTrail}
                key={trail.id}
              >{trail.name}</option>
            ))}
          </select>
        </div>
        <br />
        <div>
          <textarea
            placeholder="Leave a trail review"
            value={createReview}
            onChange={changeReview}
          ></textarea>
          <br />
          <button type="submit">POST</button>
        </div>
      </form>
      <ul className="trails">
        {mapTrails}
      </ul>
    </div>
  )
}

export default ReviewTrail