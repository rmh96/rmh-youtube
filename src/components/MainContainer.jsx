import React from "react";
import ButtonFilterList from "./ButtonFilterList";
import VideoContainer from "./VideoContainer";
import { Outlet } from "react-router-dom";

const MainContainer = () => {
  return (
    <div className="ml-5">
      <ButtonFilterList />
      <Outlet />
    </div>
  );
};

export default MainContainer;
