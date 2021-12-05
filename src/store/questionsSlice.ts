import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { _getQuestions, _saveQuestion } from "../Data";
import Question from "../models/question";

type QuestionsMap = { [key: string]: Question };

type QuestionsSlice = {
  questions: QuestionsMap;
};

export const fetchQuestion = createAsyncThunk<QuestionsMap, void, {}>(
  "question/requestquestion",
  async (arg, thunkAPI) => {
    const questions = (await _getQuestions()) as QuestionsMap;

    return questions;
  }
);

export const addQuestion = createAsyncThunk<
  Question,
  { author: string; optionOneText: string; optionTwoText: string },
  {}
>("question/add", async (arg, thunkAPI) => {
  return (await _saveQuestion(arg)) as Question;
});

const questionsSlice = createSlice({
  name: "question",
  initialState: {} as QuestionsSlice,
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

export const questionsAction = questionsSlice.actions;
export default questionsSlice;
