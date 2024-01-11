import React, { useEffect } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/contants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addMainVideoList } from "../utils/globalAppSlice";

const VideoContainer = () => {
  const mainVideoList = useSelector((store) => store.app.mainVideoList);
  const dispatch = useDispatch();

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    dispatch(addMainVideoList(json.items));
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="ml-3 mt-2 flex flex-wrap">
      {mainVideoList &&
        mainVideoList.map((item) => (
          <Link key={item.id} to={"/watch?v=" + item.id}>
            <VideoCard info={item} key={item.id} />
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
