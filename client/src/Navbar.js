import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ user, setIsLoggedIn }) {
  const navigate = useNavigate();

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    });
    console.log("User logged out");
    navigate("/");
    setIsLoggedIn(false);
  }

  return (
    <div className="navbar">
      {user ? (
        <Link className="nav-link" to={`/users/${user.id}`}>
          Home
        </Link>
      ) : null}
      <Link className="nav-link" to="/FavoriteResort">
        Favorite Resort
      </Link>
      <Link className="nav-link" to="/FollowTheSnow">
        Follow The Snow
      </Link>
      <Link to="/" onClick={handleLogout} className="nav-link">
        {" "}
        Log Out
      </Link>
    </div>
  );
}

export default Navbar;
