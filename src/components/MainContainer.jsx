import React from "react";
import ButtonFilterList from "./ButtonFilterList";
import { Outlet } from "react-router-dom";

const MainContainer = () => {
  return (
    <div className="ml-5 z-10">
      <ButtonFilterList />
      <Outlet />
    </div>
  );
};

export default MainContainer;