import React from "react";
import Resorts from "./Resorts";
import Navbar from "./Navbar";
function ResortsTrailsCollection({
  resorts,
  user,
  setNewFavorite,
  setNewReview,
  setUser,
  setIsLoggedIn,
}) {
  const mappedResorts = resorts.map((resort) => {
    //  console.log(resort.trails)
    // console.log(resort)
    return (
      <Resorts
        key={resort.id}
        name={resort.name}
        map={resort.map}
        resort={resort}
        trails={resort.trails}
        user={user}
        setNewFavorite={setNewFavorite}
        setNewReview={setNewReview}
      />
    );
  });

  return (
    <>
      {/* <Navbar setUser={setUser} user={user} setIsLoggedIn={setIsLoggedIn} /> */}
      <div className="top-div">{mappedResorts}</div>
    </>
  );
}

export default ResortsTrailsCollection;
