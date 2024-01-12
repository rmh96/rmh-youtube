import React, { useState } from "react";

const WatchVideoDescription = ({ info }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  console.log("Info", info);
  if (info.length === 0) {
    return <div className="font-semibold">Loading...</div>;
  }
  const { snippet, statistics } = info;
  const { title, channelTitle, description, publishedAt, tags, thumbnails } =
    snippet;
  const { viewCount, likeCount } = statistics;

  return (
    <div className="w-[98%] flex flex-col py-2">
      <div className="text-xl font-bold">{title}</div>
      <div className="w-full py-2">
        <div className="flex items-center relative">
          <img
            className=" rounded-full h-9 w-9 mr-3"
            src={thumbnails.medium.url}
            alt="channel-logo"
          />

          <div className="flex flex-col">
            <span className="font-bold">{channelTitle}</span>{" "}
            <span className="text-sm">76k Subscribers</span>
          </div>
          <button className="text-white bg-black rounded-3xl py-2 px-3 text-ls mx-5 font-semibold">
            Subscriber
          </button>
          <div className="absolute right-2 flex cursor-pointer">
            <div className="border border-gray-300 bg-gray-200 rounded-l-full px-4 py-2 hover:bg-gray-300">{`👍🏻   ${(
              viewCount + ""
            ).slice(0, 3)}K`}</div>
            <div className="border border-gray-300 bg-gray-200 rounded-r-full px-4 py-2 hover:bg-gray-300">
              👎🏻
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-full py-4 px-5 bg-gray-300 mt-4 rounded-xl space-y-4 text-sm cursor-pointer ${
          isExpanded ? " h-auto" : "h-[120px] overflow-hidden"
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="font-semibold">{`${Number(
          viewCount
        ).toLocaleString()} views`}</span>
        {isExpanded && (
          <div>
            {tags.map((element) => {
              return (
                <span key={element} className="text-blue-600 px-1">
                  #{element}
                </span>
              );
            })}
          </div>
        )}
        <div>{isExpanded ? description : description.substr(0, 200)}</div>
        <div className="inline font-bold">
          {isExpanded ? "show less" : "..more"}
        </div>
      </div>
    </div>
  );
};

export default WatchVideoDescription;
