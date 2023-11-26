import React, { useState } from "react";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import PrivateRoute from "./Components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Login from "./Registration/Login";
import SignUp from "./Registration/SignUp";
import './App.css'
function App() {
  const [user, setUser] = useState(null);
   
console.log("user---",user)

  return (
    <Router>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/dashboard" element={
          <PrivateRoute user={user} setUser={setUser}>
          <Dashboard user={user} setUser={setUser} />
        </PrivateRoute>
        }
        />
        <Route path="/login" element={<Login setUser={setUser}/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </Router>
  );
}

export default App;
