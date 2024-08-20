import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  likedItems: {},
};

const likeSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {
    toggleLike: (state, action) => {
      const itemId = action.payload;
      if (state.likedItems[itemId]) {
        state.count -= 1;
        delete state.likedItems[itemId];
      } else {
        state.count += 1;
        state.likedItems[itemId] = true;
      }
      if (state.count < 0) {
        state.count = 0;
      }
    },
  },
});

export const { toggleLike } = likeSlice.actions;
export default likeSlice.reducer;
