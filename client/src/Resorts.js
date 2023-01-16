import React from 'react'
import { useState } from 'react'

function Resorts({ name, map, trails, user }) {
  const [showTrails, setShowTrails] = useState(false)
  const [selectedTrailId, setSelectedTrailId] = useState(null)

  // console.log(trails)

  const mapTrails = trails.map((trail) => {

    return <li 
      className="custom-bullet"
      key={trail.id}
      onClick={() => setSelectedTrailId(selectedTrailId === trail.id ? null : trail.id)}>
      {trail.name}
      {trail.difficulty}
      {selectedTrailId === trail.id ?
       <p> {trail.reviews.map((review) => review.comment)} </p> : null}
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
            <ul className="trails">
              {mapTrails}
            </ul>
            {/* <div>{mapReviews}</div> */}
          </div>
          : null
        }
      </div>
    </div>

  )
}

export default Resorts;