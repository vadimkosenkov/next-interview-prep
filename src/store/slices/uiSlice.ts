import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UiState {
  language: "ru" | "en";
}

const initialState: UiState = {
  language: "ru",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<"ru" | "en">) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = uiSlice.actions;
export default uiSlice.reducer;