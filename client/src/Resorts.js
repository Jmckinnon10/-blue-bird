import React from 'react'
import { useState } from 'react'

function Resorts({ name, map, trails, user }) {
  const [showTrails, setShowTrails] = useState(false)
  const [selectedTrailId, setSelectedTrailId] = useState(null)
  const [reviewTrail, setReviewTrail] = useState(null)

  // console.log(user)

  const handleChange = (e) => {
    e.preventDefault()
    setReviewTrail(e.target.value)
  }

  const mapTrails = trails.map((trail) => {

    return <li
      className="custom-bullet"
      key={trail.id}
      onClick={() => setSelectedTrailId(selectedTrailId === trail.id ? null : trail.id)}>
      {trail.name}
      {trail.difficulty}
      {selectedTrailId === trail.id ?
        <div>
          {trail.reviews.map((review) =>
            <div className="review-box" key={review.id}>
              <p> 
                <br />
                {review.comment} </p>
            </div>
          )}
        </div>
        : null}
    </li>
  })


  return (
    <div className="resort-cards">

      <div className="map-images">
        <h2>
          {name}
        </h2>
        <p> Click map to view Trails</p>
        <img src={map} className="image" onClick={() => setShowTrails(!showTrails)} />
        {showTrails ?
          <div>
            <h3>Trails:</h3>
            <div>
                <p>Select Trail to leave a review</p>
              <select onChange={handleChange}>
           
            
                {trails.map((trail) => (
                  <option value={trail.id} key={trail.id}>{trail.name}</option>
                ))}
              </select>
              <br/>
              {reviewTrail ?
                <form>
                  <textarea placeholder="Leave a review"></textarea>
                  <br/>
                  <button type="submit">POST</button>
                </form>
                : null}
            </div>
            <ul className="trails">
              {mapTrails}
            </ul>
          </div>
          : null
        }
      </div>
    </div>

  )
}

export default Resorts;