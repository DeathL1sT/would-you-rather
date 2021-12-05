import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { _getUsers } from "../Data.js";
import { addQuestion } from "./questionSlice.js";

export const fetchUsers = createAsyncThunk(
  "users/requestUsers",
  async (arg, thunkAPI) => {
    const users = await _getUsers();

    return users;
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });

    builder.addCase(fetchUsers.rejected, (state, action) => {});

    builder.addCase(addQuestion.fulfilled, (state, action) => {
      state.users[action.payload.author].questions.push(action.payload.id);
    });
  },
});

export const usersAction = usersSlice.actions;
