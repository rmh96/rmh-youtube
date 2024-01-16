import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/globalAppSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_SUGGESTIONS_API } from "../utils/contants";
//import { trimSearchResults } from "../utils/trimSearchResults";
import { cacheSearchQuery } from "../utils/searchSlice";

const Header = () => {
  //  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  const [suggestionList, setSuggestionList] = useState([]);
  const [showDropDown, setShowDropDown] = useState(false);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const getSearchSuggestionList = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API + searchQuery);
      const json = await data.json();
      const filteredSuggestion = json.items.map((item) => {
        return item.title;
      });
      setSuggestionList(filteredSuggestion);
      dispatch(
        cacheSearchQuery({
          [searchQuery]: filteredSuggestion,
        })
      );
    } catch {
      dispatch(
        cacheSearchQuery({
          [searchQuery]: suggestionList,
        })
      );
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestionList(searchCache[searchQuery]);
      } else {
        searchQuery.length > 0 && getSearchSuggestionList();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <div className="grid grid-flow-col p-2">
      <div className="flex col-span-1">
        <img
          className="h-12 cursor-pointer"
          alt="menu-icon"
          src="https://www.svgrepo.com/download/312300/hamburger-menu.svg"
          onClick={() => toggleMenuHandler()}
        />
        <a href="/">
          <img
            className="h-12 mx-2"
            alt="logo"
            src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
          />
        </a>
      </div>
      <div className="col-span-10 flex justify-center pt-1">
        <div className="w-1/2 overflow-hidden flex">
          <div className="flex w-full">
            <input
              className="w-full border rounded-l-full h-10 pl-4"
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowDropDown(true)}
              onBlur={() => setShowDropDown(false)}
            />
            {showDropDown && searchQuery.length ? (
              <ul className="bg-white w-[615px] absolute top-14 z-20 flex flex-col shadow-xl rounded-xl border py-3 px-3">
                {suggestionList.map((item, index) => {
                  return (
                    <li
                      className="shadow-sm hover:bg-gray-300 py-1.5 cursor-pointer"
                      key={index}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </div>
          <Link
            to={
              searchQuery.length > 0
                ? "/results?search_query=" + searchQuery
                : "/"
            }
          >
            <button className="h-10 bg-gray-200 rounded-r-full">
              <img
                className="h-full w-full px-5 py-3"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png"
                alt="search-icon"
              />
            </button>
          </Link>
        </div>
      </div>
      <div className="col-span-1 flex justify-end pt-2">
        <img
          className="h-7"
          src="https://cdn-icons-png.flaticon.com/512/61/61205.png"
          alt="acc-icon"
        />
      </div>
    </div>
  );
};

export default Header;
