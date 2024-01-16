import React from "react";
import ButtonFilterList from "./ButtonFilterList";
import { Outlet } from "react-router-dom";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="ml-5 z-10">
      <ButtonFilterList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
