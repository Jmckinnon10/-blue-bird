import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import NewUser from "./NewUser";
import Navbar from "./Navbar";
import ResortsTrailsCollection from "./ResortsTrailsCollection";
import FavoriteResort from "./FavoriteResort";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [resorts, setResorts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [favoriteResort, setFavoriteResort] = useState([]);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((userData) => setUser(userData));
        setIsLoading(false);
      }
    });
  }, []);

  useEffect(() => {
    fetch("/resorts").then((r) => {
      if (r.ok) {
        r.json().then((resortsData) => setResorts(resortsData));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/users").then((r) => {
      if (r.ok) {
        r.json().then((userFavorite) => console.log(userFavorite));
      }
    });
  }, []);

  return (
    <div>
      {isLoading ? <div>Loading...</div> : <Navbar user={user} />}
      <Routes>
        <Route
          exact
          path="/"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        ></Route>
        <Route path="/NewUser" element={<NewUser />}></Route>
        <Route
          path={`/users/${user.id}`}
          element={<ResortsTrailsCollection resorts={resorts} user={user} />}
        ></Route>
        <Route
          path={"/FavoriteMountain"}
          element={<FavoriteResort user={user} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
