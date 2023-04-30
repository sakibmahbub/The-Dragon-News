import React from "react";

const PrivateRoute = () => {
  return <div></div>;
};

export default PrivateRoute;

/**
 * Steps:
 * 
 * 1. Check if the user is logged in
 * 2. If user is logged in, allow the user to  visit the route
 * 3. Else redirect the user to login page
 */