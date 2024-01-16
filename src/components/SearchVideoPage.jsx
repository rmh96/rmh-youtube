import React, { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/contants";
import SearchVideoCard from "./SearchVideoCard";

const SearchVideoPage = () => {
  const [searchParams] = useSearchParams();
  const [searchResultVideos, setSearchResultVideos] = useState([]);

  const getVideoDetails = async () => {
    const data = await fetch(
      YOUTUBE_SEARCH_API + searchParams.get("search_query")
    );
    const json = await data.json();
    setSearchResultVideos(json.items);
  };

  useEffect(() => {
    getVideoDetails();
  }, []);

  return (
    <div className="ml-3 mt-2 flex flex-col w-full">
      {searchResultVideos &&
        searchResultVideos.map((item, index) => (
          <NavLink key={index} to={"/watch?v=" + item.id.videoId}>
            <SearchVideoCard info={item} key={index} />
          </NavLink>
        ))}
    </div>
  );
};

export default SearchVideoPage;
