import React from 'react'
import { useState } from 'react'
import ReviewTrail from './ReviewTrail'
function Resorts({ name, map, trails, user }) {
  const [showTrails, setShowTrails] = useState(false)
  const [selectedTrailId, setSelectedTrailId] = useState(null)
  const [changeTrail, setChangeTrail] = useState(null)



  const handleChange = (e) => {
    setChangeTrail(e.target.value)
  }

  const mapTrails = trails.map((trail) => {

    return <li 
      style={{cursor:"pointer"}}
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
                {review.review_name}: 
                <br/>
                <br/>
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
            <ReviewTrail  mapTrails={mapTrails} user={user} changeTrail={changeTrail} handleChange={handleChange} trails={trails} /> 
          : null
        }
      </div>
    </div>
  )
}

export default Resorts;