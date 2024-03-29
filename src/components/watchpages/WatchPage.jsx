import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../utils/globalAppSlice";
//import { YOUTUBE_SPECIFIC_VIDEO_API } from "../utils/contants";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_SPECIFIC_VIDEO_API } from "../../utils/contants";
import WatchVideoDescription from "./WatchVideoDescription";
import CommentContainer from "../comments/CommentContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [videoSpecificInfo, setvideoSpecificInfo] = useState([]);
  const [liveChatToggle, setLiveChatToggle] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
    getVideoDetails();
  }, []);

  const getVideoDetails = async () => {
    const data = await fetch(
      YOUTUBE_SPECIFIC_VIDEO_API + searchParams.get("v")
    );
    const json = await data.json();
    setvideoSpecificInfo(json.items[0]);
  };

  return (
    <div className="h-full w-full flex">
      <div className="w-[72%] flex flex-col pl-12">
        <iframe
          width="98%"
          className="py-2 rounded-3xl"
          height="600"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
          allowFullScreen
        ></iframe>
        <WatchVideoDescription info={videoSpecificInfo} />
        <CommentContainer />
      </div>
      <div className="w-[28%]">
        <div
          onClick={() => setLiveChatToggle(!liveChatToggle)}
          className="bg-slate-100 px-3 h-10 border rounded-full grid place-content-center text-sm font-semibold mb-2 cursor-pointer"
        >
          Open / Close Live Chat
        </div>
        {liveChatToggle ? <LiveChat /> : null}
      </div>
    </div>
  );
};

export default WatchPage;
