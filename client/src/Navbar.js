import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ user, setIsLoggedIn, setUser, isLoggedIn }) {
  const navigate = useNavigate();

  function handleLogout() {
    console.log("User logged out");
    fetch("/logout", {
      method: "DELETE",
    });
    navigate("/");
    setUser({});
    setIsLoggedIn(false);
  }

  return (
    <div>
      <div className="navbar">
        <Link className="nav-link" to={`/users/${user.id}`}>
          Home
        </Link>
        <Link className="nav-link" to="/FavoriteResort">
          Favorite Resort
        </Link>
        <Link className="nav-link" to="/FollowTheSnow">
          Follow The Snow
        </Link>
        <button onClick={handleLogout} className="nav-link">
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Navbar;
