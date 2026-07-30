import { configureStore, combineReducers } from "@reduxjs/toolkit";
import uiSlice from "@/store/slices/uiSlice";
import progressSlice from "@/store/slices/progressSlice";
import historySlice from "@/store/slices/historySlice";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

// key: localStorage key name; whitelist: which slices to persist (use blacklist for exclusions instead).
const persistConfig = {
  key: "prep-root",
  storage,
  whitelist: ["ui", "progress", "history"]
};

// Combined explicitly (rather than left to configureStore) so the result can be wrapped by persistReducer.
const rootReducer = combineReducers({
  ui: uiSlice,
  progress: progressSlice,
  history: historySlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // redux-persist dispatches actions with non-serializable payloads; ignore them to avoid RTK warnings.
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;