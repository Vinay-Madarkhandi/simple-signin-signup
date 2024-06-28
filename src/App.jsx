
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import User from "./components/User";
import './App.css';

const App = () => {
  const [token, setToken] = useState("");

  const handleSignin = (newToken) => {
    setToken(newToken);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/">User Info</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin onSignin={handleSignin} />} />
          <Route path="/" element={<User token={token} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
