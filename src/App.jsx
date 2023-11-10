import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./Dashboard";
import Login from "./Registration/Login";
import SignUp from "./Registration/SignUp";
import './App.css'
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
function App() {
  const [user, setUser] = useState(null);
console.log("user---",user)

  return (
    <Router>
        <Navbar/>
      <Routes>
        <Route path="/login" element={<Login setUser={setUser}/>} />
        <Route path="/dashboard" element={
        <PrivateRoute user={user} setUser={setUser}>
         <Dashboard user={user} setUser={setUser} />
        </PrivateRoute>
        }
        />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
