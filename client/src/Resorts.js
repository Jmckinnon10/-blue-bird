import React from 'react'
import { useState } from 'react'

function Resorts({ name, map, trails, user }) {
  const [showTrails, setShowTrails] = useState(false)

  console.log(trails)

  const mapTrails = trails.map((trail) => {
    
    console.log(trail.reviews)

    return <li key={trail.id}>{trail.name} {trail.difficulty} <p>{trail.reviews.map((review) => review.comment)} </p> </li>
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