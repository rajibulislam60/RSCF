import React from "react";
import { Outlet } from "react-router-dom";
import { NavbarSimple } from "./components/Navbar";
import Footer from "./components/Footer";

const RootLayOut = () => {
  return (
    <div>
      <NavbarSimple />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayOut;
