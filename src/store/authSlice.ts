import { createSlice, PayloadAction, AnyAction } from "@reduxjs/toolkit";

type AuthSlice = {
  user: string;
};

export const authSlice = createSlice({
  name: "auth",
  initialState: { user: "" } as AuthSlice,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
    },
    logout: (state, action: AnyAction) => {
      state.user = "";
    },
  },
});

export const authAction = authSlice.actions;
