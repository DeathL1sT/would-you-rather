import { configureStore } from "@reduxjs/toolkit";

import { usersSlice } from "./usersSlice";
import { authSlice } from "./authSlice";
import questionSlice from "./questionSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    auth: authSlice.reducer,
    question: questionSlice.reducer,
  },
});

export default store;
