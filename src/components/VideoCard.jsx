import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  return (
    <div className="h-80 w-96 z-0 mx-1 my-3 hover:tranform hover:scale-105 transition-transform">
      <img
        className="rounded-xl p-1 w-full"
        src={thumbnails.medium.url}
        alt="thumbnail"
      />
      <div className="grid grid-flow-col pt-3 pl-2">
        <div className="h-9 w-9">
          <img
            className="h-full w-full border rounded-full"
            src={thumbnails.medium.url}
            alt="channel-logo"
          />
        </div>
        <div className="flex flex-col items-start justify-between pl-2">
          <div className="font-semibold text-ellipsis">
            {title.length > 60 ? title.slice(0, 60) + "..." : title}
          </div>
          <div className="text-sm">{channelTitle}</div>
          <div className="text-sm flex">
            <div>{statistics && statistics.viewCount}</div>
            <div>{publishedAt}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
