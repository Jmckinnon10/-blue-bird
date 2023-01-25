import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import NewUser from "./NewUser";
import Navbar from "./Navbar";
import ResortsTrailsCollection from "./ResortsTrailsCollection";
import FavoriteResort from "./FavoriteResort";
import Snow from "./Snowfall";
import FollowTheSnow from "./FollowTheSnow";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [resorts, setResorts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newFavorite, setNewFavorite] = useState(false);
  const [dataFetched, setDataFetched] = useState(false);
  const [newReview, setNewReview] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    if (newFavorite || !dataFetched || newReview) {
      fetch("/me").then((r) => {
        if (r.ok) {
          r.json().then((userData) => setUser(userData));
          setIsLoading(false);
          setNewFavorite(false);
          setNewReview(false);
        }
      });
    }
  }, [newFavorite, setNewFavorite, newReview, setNewReview]);

  useEffect(() => {
    fetch("/resorts").then((r) => {
      if (r.ok) {
        r.json().then((resortsData) => setResorts(resortsData));
      }
    });
  }, []);

  return (
    <div>
      <img className="blue-bird" src="https://i.imgur.com/eZM5DX4.png" />
      <Snow />

      <Navbar
        setUser={setUser}
        user={user}
        setIsLoggedIn={setIsLoggedIn}
        isLoggedIn={isLoggedIn}
      />

      <Routes>
        <Route
          exact
          path="/"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        ></Route>
        <Route path="/NewUser" element={<NewUser />}></Route>
        <Route
          path={`/users/${user.id}`}
          element={
            <ResortsTrailsCollection
              resorts={resorts}
              user={user}
              setNewFavorite={setNewFavorite}
              setNewReview={setNewReview}
              setIsLoading={setIsLoading}
              setUser={setUser}
            />
          }
        ></Route>
        <Route
          path={"/FavoriteResort"}
          element={<FavoriteResort user={user} />}
        ></Route>
        <Route
          path={"/FollowTheSnow"}
          element={<FollowTheSnow user={user} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
