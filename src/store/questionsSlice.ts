import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from "../Data";
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

export const saveAnswer = createAsyncThunk<
  { authedUser: string; qid: string; answer: string },
  { authedUser: string; qid: string; answer: string },
  {}
>("question/answer", async (arg, thunkAPI) => {
  await _saveQuestionAnswer(arg);
  return arg;
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

    builder.addCase(saveAnswer.fulfilled, (state, action) => {
      const { authedUser, qid, answer } = action.payload;
      state.questions[qid][answer].votes.push(authedUser);
    });
  },
});

export const questionsAction = questionsSlice.actions;
export default questionsSlice;
