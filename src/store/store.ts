import { configureStore } from "@reduxjs/toolkit";

import { usersSlice } from "./usersSlice";
import { authSlice } from "./authSlice";
import questionsSlice from "./questionsSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    auth: authSlice.reducer,
    questions: questionsSlice.reducer,
  },
});

export type Store = ReturnType<typeof store.getState>;

export default store;
