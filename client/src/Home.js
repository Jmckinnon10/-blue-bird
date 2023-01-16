// import React from 'react'
// import { useState, useEffect } from 'react';
// import ResortsCollection from './ResortsCollection';

// function Home() {

//  const [resorts, setResorts] = useState([])

//   useEffect(() => fetch("/resorts")
//   .then(response => response.json())
//   .then(resortData => {
//     setResorts(resortData)
//   })
//   .catch(error => {
//     console.error(error)
//   }),[]);



//   return (
//     <div>
//       <ResortsCollection resorts={resorts}/>
//     </div>
//   )
// }

// export default Home