import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProgressState {
  topics: Record<string, TopicProgress>;
}

interface TopicProgress {
  answered: number;
  correct: number;
  total: number;
}

interface UpdateTopicProgressPayload {
  blockId: string;
  topicId: string;
  answered: number;
  correct: number;
  total: number;
}

const progressSlice = createSlice({
  name: "progress",
  initialState: {
    topics: {},
  } as ProgressState,
  reducers: {
    updateTopicProgress: (state, action: PayloadAction<UpdateTopicProgressPayload>) => {
      const key = `${action.payload.blockId}_${action.payload.topicId}`;
      const existing = state.topics[key] ?? { answered: 0, correct: 0, total: 0 };

      state.topics[key] = {
        answered: existing.answered + action.payload.answered,
        correct: existing.correct + action.payload.correct,
        total: action.payload.total,
      };
    },
    resetProgress: (state) => {
      state.topics = {};
    }
  },
});

export const { updateTopicProgress, resetProgress } = progressSlice.actions;
export default progressSlice.reducer;