import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="p-2 flex items-center text-sm shadow-sm justify-start">
      <img
        className="h-7"
        src="https://cdn-icons-png.flaticon.com/512/61/61205.png"
        alt="acc-icon"
      />
      <span className="font-semibold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
