import React,{ useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import LogIn from './Pages/LogIn';
import Dashboard from './Pages/Dashboard';

import { AuthContext } from "./Context/AuthContext";

const App = () => {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    // console.log(children)
    return currentUser ? children : <Navigate to="/login" />;
  };

  console.log("Current User",currentUser)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
