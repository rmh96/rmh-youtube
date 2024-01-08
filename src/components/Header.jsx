import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/globalAppSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 ">
      <div className="flex col-span-1">
        <img
          className="h-14 cursor-pointer"
          alt="menu-icon"
          src="https://www.svgrepo.com/download/312300/hamburger-menu.svg"
          onClick={() => toggleMenuHandler()}
        />
        <a href="/">
          <img
            className="h-14 mx-2"
            alt="logo"
            src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
          />
        </a>
      </div>
      <div className="col-span-10 flex justify-center">
        <div className="w-1/2 overflow-hidden flex">
          <input
            className="w-full border rounded-l-full h-11 pl-4"
            type="text"
            placeholder="Search"
          />
          <button className="h-11 bg-gray-200 rounded-r-full">
            <img
              className="h-full w-full px-5 py-3"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png"
              alt="search-icon"
            />
          </button>
        </div>
      </div>
      <div className="col-span-1">
        <img
          className="h-10"
          src="https://cdn-icons-png.flaticon.com/512/61/61205.png"
          alt="acc-icon"
        />
      </div>
    </div>
  );
};

export default Header;
