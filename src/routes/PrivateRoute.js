import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ element: Component }) => {
  const isAuthenticated = useSelector((state) => state.user.token);
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect them to the /signin page if not logged in
    return <Navigate to="/signin" state={{ from: location }} />;
  }

  return Component;
};

export default PrivateRoute;
