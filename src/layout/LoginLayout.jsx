import React from "react";
import DragonNav from "../pages/Shared/DragonNav/DragonNav";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <div>
      <DragonNav></DragonNav>
      <Outlet></Outlet>
    </div>
  );
};

export default LoginLayout;
