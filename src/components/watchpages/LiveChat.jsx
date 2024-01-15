import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../utils/chatSlice";
import {
  randomNameGenerator,
  randomSentenceGenerator,
} from "../../utils/helper";

const LiveChat = () => {
  const messages = useSelector((store) => store.chat.messages);
  const dispatch = useDispatch();
  const [typedChat, setTypedChat] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: randomNameGenerator(),
          message: randomSentenceGenerator(),
        })
      );
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full h-[545px] border bg-white flex flex-col justify-center rounded-2xl shadow-lg">
      <div className=" h-[90%] overflow-y-auto flex flex-col-reverse">
        {messages &&
          messages.map((message) => (
            <ChatMessage name={message.name} message={message.message} />
          ))}
      </div>
      <div className="border mx-10 h-[8%] rounded-full pl-3 flex items-center justify-between">
        <input
          type="text"
          className="h-full w-4/5 outline-none"
          placeholder="Chat..."
          value={typedChat}
          onChange={(e) => setTypedChat(e.target.value)}
        />
        <div
          className="pr-8 cursor-pointer"
          onClick={() => {
            dispatch(
              addMessage({
                name: "You",
                message: typedChat,
              })
            );
            setTypedChat("");
          }}
        >
          ✔️
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
