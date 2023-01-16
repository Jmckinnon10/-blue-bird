import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from './Login'
import NewUser from './NewUser'
import Home from './Home'




function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

 

  return (
    <div>
      <Routes>
        <Route exact path="/" element={ <Login setIsLoggedIn={setIsLoggedIn} />}>
        </Route>
        <Route path="/NewUser" element={<NewUser />}>
        </Route>
        <Route path={`/users/${user.id}`} element={ <Home user={user} setUser={setUser} isLoggedIn={isLoggedIn} />} >
        </Route>
      </Routes>
    </div>
  );
}

export default App;