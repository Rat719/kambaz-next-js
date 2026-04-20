/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizzes: [] as any[],
  attempts: [] as any[],
};

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    setQuizzes(state, { payload: quizzes }) {
      state.quizzes = quizzes;
    },
    addQuiz(state, { payload: quiz }) {
      state.quizzes = [...state.quizzes, quiz];
    },
    updateQuiz(state, { payload: quiz }) {
      state.quizzes = state.quizzes.map((q: any) =>
        q._id === quiz._id ? quiz : q
      );
    },
    deleteQuiz(state, { payload: quizId }) {
      state.quizzes = state.quizzes.filter((q: any) => q._id !== quizId);
    },
    setAttempts(state, { payload: attempts }) {
      state.attempts = attempts;
    },
    addAttempt(state, { payload: attempt }) {
      state.attempts = [...state.attempts, attempt];
    },
  },
});

export const {
  setQuizzes,
  addQuiz,
  updateQuiz,
  deleteQuiz,
  setAttempts,
  addAttempt,
} = quizzesSlice.actions;
export default quizzesSlice.reducer;
