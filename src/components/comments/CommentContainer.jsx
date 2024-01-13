import React from "react";

const commentData = [
  {
    name: "Harish RM",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, cupiditate!",
    replies: [],
  },
  {
    name: "Harish RM",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, cupiditate!",
    replies: [
      {
        name: "Harish RM",
        comment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, cupiditate!",
        replies: [],
      },
      {
        name: "Harish RM",
        comment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, cupiditate!",
        replies: [
          {
            name: "Harish RM",
            comment:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, cupiditate!",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Harish RM",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, cupiditate!",
    replies: [
      {
        name: "Harish RM",
        comment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, cupiditate!",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, comment } = data;
  return (
    <div className="flex py-3">
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
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => {
    return (
      <div key={index}>
        <Comment data={comment} />
        <div className="border-l-2 border-gray-300 ml-2 pl-6">
          <CommentList comments={comment.replies} />
        </div>
      </div>
    );
  });
};

const CommentContainer = () => {
  return (
    <div>
      <div className="my-6 text-xl font-bold">987 Comments:</div>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentContainer;
