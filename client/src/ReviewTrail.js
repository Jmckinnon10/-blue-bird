import React from 'react'
import { useState } from 'react'

function ReviewTrail({ user, changeTrail, trails, handleChange, mapTrails }) {
  const [createReview, setCreateReview] = useState("")




  const handleSubmitReview = e => {
    e.preventDefault()

    const configReview = {
      comment: createReview,
      user_id: user.id,
      trail_id: mapTrails
    }

    console.log(configReview)
  }

  const changeReview = (e) => {
    setCreateReview(e.target.value)
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
                placeholder="select resort"
                value={changeTrail}
                key={trail.id}
              >{trail.name}</option>
            ))}
          </select>
        </div>
          <br/>
        <div>
          <textarea
            placeholder="Leave a review"
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