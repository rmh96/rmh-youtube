import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //Early return
  if (!isMenuOpen) return null;

  return (
    <div className="p-6 shadow-xl w-56">
      <ul className="flex flex-col space-y-2 pt-2">
        <li>Home</li>
        <li>Shorts</li>
        <li>Water Later</li>
        <li>Subscriptions</li>
      </ul>
      <h1 className="font-bold pt-10">Subscriptions</h1>
      <ul className="flex flex-col space-y-2 pt-2">
        <li>Channel 1</li>
        <li>Channel 2</li>
        <li>Channel 3</li>
        <li>Channel 4</li>
      </ul>
      <h1 className="font-bold pt-10">Explore</h1>
      <ul className="flex flex-col space-y-2 pt-2">
        <li>Trending</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Music</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default SideBar;
