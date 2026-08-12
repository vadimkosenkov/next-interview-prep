import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Lang } from "@/lib/i18n";

interface UiState {
  language: Lang;
}

const initialState: UiState = {
  language: "en",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Lang>) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = uiSlice.actions;
export default uiSlice.reducer;