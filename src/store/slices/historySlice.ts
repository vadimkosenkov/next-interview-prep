import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QuizSession {
  date: string;        // new Date().toLocaleDateString()
  blockId: string;
  topicId: string | null;  // null if all block topics were run
  correct: number;
  total: number;
  pct: number;         // Math.round((correct / total) * 100)
}

interface HistoryState {
  sessions: QuizSession[];
}

const historySlice = createSlice({
  name: "history",
  initialState: {
    sessions: [],
  } as HistoryState,
  reducers: {
    addSession: (state, action: PayloadAction<QuizSession>) => {
      // We add it to the beginning of the array so that new sessions are first.
      state.sessions.unshift(action.payload);

      // We limit the history to 50 entries as in the prototype
      if (state.sessions.length > 50) {
        state.sessions = state.sessions.slice(0, 50);
      }
    },
    clearHistory: (state) => {
      state.sessions = [];
    },
  },
});

export const { addSession, clearHistory } = historySlice.actions;
export default historySlice.reducer;