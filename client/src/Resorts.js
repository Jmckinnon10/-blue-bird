import React from 'react'
import { useState } from 'react'

function Resorts({ name, map, reviews, trails, user }) {
  const [showTrails, setShowTrails] = useState(false)

  console.log(trails)

  const mapTrails = trails.map((trail) => {
    
    return <li key={trail.id}>{trail.name} {trail.difficulty} <p>{reviews.map((review) => review.comment)}</p> </li>
  })

  // const mapReviews = reviews.map((review) => {
  //   return <p key={review.id}>{review.comment}</p>
  // })




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