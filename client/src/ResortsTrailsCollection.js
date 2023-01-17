import React from 'react'
import Resorts from './Resorts'


function ResortsTrailsCollection({resorts, user}) {



  const mappedResorts = resorts.map((resort) => {
     console.log(resort.trails)
    // console.log(resort)
    
    
    return <Resorts key={resort.id} name={resort.name} map={resort.map} resort={resort} trails={resort.trails} user={user} />
  })

  return (
    <div className="please-work">
      {mappedResorts}
    </div>
  )
}

export default ResortsTrailsCollection;