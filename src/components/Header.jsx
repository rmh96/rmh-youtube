import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu, addMainVideoList } from "../utils/globalAppSlice";
import { YOUTUBE_SEARCH_API } from "../utils/contants";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  //  const getSearchSuggestionList = () => {}

  // useEffect(() => {
  //   const timer = setTimeout(() => getSearchSuggestionList(), 200);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [searchQuery]);

  return (
    <div className="grid grid-flow-col p-2">
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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Link
            to={
              searchQuery.length > 0
                ? "/results?search_query=" + searchQuery
                : "/"
            }
          >
            <button className="h-11 bg-gray-200 rounded-r-full">
              <img
                className="h-full w-full px-5 py-3"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png"
                alt="search-icon"
              />
            </button>
          </Link>
        </div>
      </div>
      <div className="col-span-1 flex justify-end pt-1">
        <img
          className="h-8"
          src="https://cdn-icons-png.flaticon.com/512/61/61205.png"
          alt="acc-icon"
        />
      </div>
    </div>
  );
};

export default Header;
