import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
  name: "comment",
  initialState: {
    commentList: [],
  },
  reducers: {
    addComment: (state, action) => {
      const { parentId } = action.payload;
      const addItems = (arr) => {
        arr.forEach((data) => {
          if (data.commentId === parentId) {
            if (!data.replies) {
              data.replies = [];
            }
            data.replies.push(action.payload);
            return;
          }
          if (data.replies && data.replies.length > 0) {
            addItems(data.replies);
          }
        });
      };
      parentId === "initial"
        ? state.commentList.push(action.payload)
        : addItems(state.commentList);
    },
  },
});

export const { addComment } = commentSlice.actions;
export default commentSlice.reducer;

/**
 * name:ggg
 * comment: fff
 * id: 1
 *
 *
 */
