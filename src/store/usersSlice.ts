import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { _getUsers } from "../Data";
import { addQuestion, saveAnswer } from "./questionsSlice";
import User from "../models/user";

type UsersMap = { [key: string]: User };

type UsersSlice = {
  users: UsersMap;
};

export const fetchUsers = createAsyncThunk<UsersMap, void, {}>(
  "users/requestUsers",
  async (arg, thunkAPI) => {
    const users = (await _getUsers()) as UsersMap;

    return users;
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState: {} as UsersSlice,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });

    builder.addCase(addQuestion.fulfilled, (state, action) => {
      state.users[action.payload.author].questions.push(action.payload.id);
    });

    builder.addCase(saveAnswer.fulfilled, (state, action) => {
      const { authedUser, qid, answer } = action.payload;
      state.users[authedUser].answers[qid] = answer;
    });
  },
});

export const usersAction = usersSlice.actions;
