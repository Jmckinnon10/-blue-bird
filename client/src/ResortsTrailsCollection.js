import React from 'react'
import Resorts from './Resorts'


function ResortsTrailsCollection({resorts}) {



  const mappedResorts = resorts.map((resort) => {
    // console.log(resort.trails)
    // console.log(resort)
    // console.log(resort.reviews)
    
    return <Resorts key={resort.id} name={resort.name} map={resort.map} resort={resort} trails={resort.trails} reviews={resort.reviews} />
  })

  return (
    <div className="please-work">
      {mappedResorts}
    </div>
  )
}

export default ResortsTrailsCollection;