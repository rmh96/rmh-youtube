import React from "react";

const SearchVideoCard = ({ info }) => {
  const { snippet } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  return (
    <div className=" h-72 w-full z-10 mx-1 my-3 flex">
      <img
        className="rounded-xl p-1 w-[35%]"
        src={thumbnails.medium.url}
        alt="thumbnail"
      />
      <div className="pt-3 pl-2 flex flex-col">
        <div className="font-semibold text-ellipsis">{title}</div>

        <div className="h-14 flex items-center space-x-2">
          <img
            className="h-9 w-9 border rounded-full"
            src={thumbnails.medium.url}
            alt="channel-logo"
          />
          <div className="text-sm">{channelTitle}</div>
        </div>
        <div className="flex flex-col items-start pl-2">
          <div className="text-sm flex">
            <div>{publishedAt}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchVideoCard;
