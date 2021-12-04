import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { _getQuestions } from "../Data";

export const fetchQuestion = createAsyncThunk(
  "question/requestquestion",
  async (arg, thunkAPI) => {
    const questions = await _getQuestions();

    return questions;
  }
);

const questionSlice = createSlice({
  name: "question",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchQuestion.fulfilled, (state, action) => {
      state.questions = action.payload;
    });

    builder.addCase(fetchQuestion.rejected, (state, action) => {});
  },
});

export const questionAction = questionSlice.actions;
export default questionSlice;
