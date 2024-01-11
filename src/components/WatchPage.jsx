import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/globalAppSlice";
//import { YOUTUBE_SPECIFIC_VIDEO_API } from "../utils/contants";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
    //getVideoDetails();
  });

  // const getVideoDetails = async () => {
  //   const data = await fetch(YOUTUBE_SPECIFIC_VIDEO_API);
  //   const json = await data.json();
  //   console.log(json);
  // };

  return (
    <div>
      WatchPage
      <iframe
        width="1200"
        height="620"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
