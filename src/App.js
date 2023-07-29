import React,{ useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { AuthContext } from "./Context/AuthContext";

import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import LogIn from './Pages/LogIn';
import Dashboard from './Pages/Dashboard';

const App = () => {

  //Check if the user is logged in or not
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  console.log("Current User details : ",currentUser)

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
