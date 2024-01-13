import React, { useId, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../utils/commentSlice";

const commentData = [
  {
    id: 1,
    name: "Harish RM",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, cupiditate!",
    replies: [],
  },
  {
    id: 2,
    name: "Harish RM",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, cupiditate!",
    replies: [
      {
        id: 3,
        name: "Harish RM",
        comment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, cupiditate!",
        replies: [],
      },
      {
        id: 4,
        name: "Harish RM",
        comment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, cupiditate!",
        replies: [
          {
            id: 5,
            name: "Harish RM",
            comment:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, cupiditate!",
            replies: [
              {
                id: 6,
                name: "Harish RM",
                comment:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, cupiditate!",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Harish RM",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, cupiditate!",
    replies: [
      {
        id: 7,
        name: "Harish RM",
        comment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, cupiditate!",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const dispatch = useDispatch();
  const [replyComment, setReplyComment] = useState("");
  const { name, comment, commentId } = data;

  const addReplyComment = () => {
    const id = "_" + Math.random().toString(36).substr(2, 6);
    replyComment &&
      dispatch(
        addComment({
          parentId: commentId,
          commentId: id,
          name: "Arun",
          comment: replyComment,
        })
      );
    setReplyComment("");
  };
  return (
    <div className="flex flex-col py-3">
      <div className="flex">
        <img
          className="w-6 h-6 mt-1"
          src="https://cdn-icons-png.flaticon.com/512/61/61205.png"
          alt="user-icon"
        />
        <div className="pl-4">
          <p className="font-bold">{name}</p>
          <p>{comment}</p>
        </div>
      </div>
      <div className="pl-10 flex space-x-2">
        <input
          type="text"
          placeholder="reply for this comment"
          className="border-b-2 w-1/6 outline-none"
          value={replyComment}
          onChange={(e) => setReplyComment(e.target.value)}
        />
        <div className="cursor-pointer" onClick={() => addReplyComment()}>
          ✔️
        </div>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment) => {
    return (
      <div key={comment.commentId}>
        <Comment data={comment} />
        {comment.replies && (
          <div className="border-l-2 border-gray-300 ml-2 pl-6">
            <CommentList comments={comment.replies} />
          </div>
        )}
      </div>
    );
  });
};

const CommentContainer = () => {
  const commentList = useSelector((store) => store.comment.commentList);
  const dispatch = useDispatch();
  const [initialComment, setInitialComment] = useState("");
  const addInitialComment = () => {
    const id = "_" + Math.random().toString(36).substr(2, 9);

    initialComment &&
      dispatch(
        addComment({
          parentId: "initial",
          commentId: id,
          name: "Harish",
          comment: initialComment,
        })
      );
    setInitialComment("");
  };

  return (
    <div className="pb-10">
      <div className="my-6 text-xl font-bold">987 Comments:</div>
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Add a comment"
          className="border-b-2 w-1/2 outline-none"
          value={initialComment}
          onChange={(e) => setInitialComment(e.target.value)}
        />
        <div className="cursor-pointer" onClick={() => addInitialComment()}>
          ✔️
        </div>
      </div>
      <CommentList comments={commentList} />
    </div>
  );
};

export default CommentContainer;
