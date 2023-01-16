// import React from "react";
// import { Link, useNavigate } from "react-router-dom";

// function Navbar({ user, setIsLoggedIn }) {
//   const navigate = useNavigate();

//   function handleLogout() {
//     fetch("/logout", {
//       method: "DELETE",
//     })
//     console.log("User logged out")
//     navigate.push("/");
//     setIsLoggedIn(false);
//   }

//   return (
//     <div className="navbar">
//       <Link
//         to="/"
//         onClick={handleLogout}
//         className="nav-link"
//       > Log Out
//       </Link>
//     </div>
//   );
// }

// export default Navbar;