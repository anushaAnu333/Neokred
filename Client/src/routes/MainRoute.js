import React from "react";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

function MainRoute() {
  const token = localStorage.getItem("token");
  return <div>{token ? <PrivateRoute /> : <PublicRoute />}</div>;
}

export default MainRoute;
