import React from 'react'
import { useState } from 'react'

function ReviewTrail({user, reviewTrail, handleChange, trails}) {
   const [createReview, setCreateReview] = useState("")

 const mapTrails = trails.map((trail) => trail.id)


  const handleSubmitReview = e => {
    e.preventDefault()

    const configReview = {
      comment: createReview,
      user_id: user.id,
      trail_id: mapTrails
    }

    console.log(configReview)
  }



  return (
    <div>
    {reviewTrail ?
      <form onSubmit={handleSubmitReview}>
        <textarea 
        placeholder="Leave a review"
        value={createReview}
        onChange={handleChange}
        ></textarea>
        <br />
        <button type="submit">POST</button>
      </form>
      : null}
    </div>
  )
}

export default ReviewTrail