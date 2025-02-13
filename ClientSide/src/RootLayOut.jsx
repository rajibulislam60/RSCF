import React from "react";
import { Outlet } from "react-router-dom";

const RootLayOut = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default RootLayOut;
