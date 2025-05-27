import { configureStore } from "@reduxjs/toolkit";
import  friendSlice  from "./featureSlice.js/FriendSlice.js";

export const store = configureStore({
  reducer: {
    friend: friendSlice,
  },
});
