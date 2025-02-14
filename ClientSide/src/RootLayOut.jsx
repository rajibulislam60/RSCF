import React from "react";
import { Outlet } from "react-router-dom";
import { NavbarSimple } from "./components/Navbar";

const RootLayOut = () => {
  return (
    <div>
      <NavbarSimple />
      <Outlet />
    </div>
  );
};

export default RootLayOut;
