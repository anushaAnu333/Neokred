import React from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "../pages/Profile";
import Login from "../pages/Login";

function PrivateRoute() {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default PrivateRoute;
