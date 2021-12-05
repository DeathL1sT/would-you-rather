import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { _getQuestions, _saveQuestion } from "../Data";

export const fetchQuestion = createAsyncThunk(
  "question/requestquestion",
  async (arg, thunkAPI) => {
    const questions = await _getQuestions();

    return questions;
  }
);

export const addQuestion = createAsyncThunk(
  "question/add",
  async (arg, thunkAPI) => {
    return await _saveQuestion(arg);
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

    builder.addCase(addQuestion.fulfilled, (state, action) => {
      state.questions[action.payload.id] = action.payload;
    });
  },
});

export const questionAction = questionSlice.actions;
export default questionSlice;
