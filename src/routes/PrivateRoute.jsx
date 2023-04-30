import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;

/**
 * Steps:
 *
 * 1. Check if the user is logged in
 * 2. If user is logged in, allow the user to  visit the route
 * 3. Else redirect the user to login page
 * 4. Setup the private router
 */
