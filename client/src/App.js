import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from './Login'
import NewUser from './NewUser'
// import Home from './Home'
import Navbar from './Navbar'
import ResortsTrailsCollection from "./ResortsTrailsCollection";
// import TrailCollection from "./TrailCollection";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [resorts, setResorts] = useState([])


  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  
  useEffect(() => {
    fetch("/resorts").then((r) => {
      if (r.ok) {
        r.json().then((resorts) => setResorts(resorts));
      }
    });
  }, []);



  console.log(user)


 

  return (
    <div>
      <Navbar user={user}/>
      <Routes>
        <Route exact path="/" element={ <Login setIsLoggedIn={setIsLoggedIn} />}>
        </Route>
        <Route path="/NewUser" element={<NewUser />}>
        </Route>
        <Route path={`/users/${user.id}`} element={ <ResortsTrailsCollection resorts={resorts} user={user} />} >
        </Route>
      </Routes>
      <Navbar/>
    </div>
  );
}

export default App;