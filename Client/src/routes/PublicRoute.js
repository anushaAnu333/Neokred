import React from "react";
import { Route, Routes } from "react-router-dom";

import SignUp from "../pages/Signup";
import Login from "../pages/Login";

function PublicRoute() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default PublicRoute;
