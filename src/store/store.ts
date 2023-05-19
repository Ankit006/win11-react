import { configureStore } from "@reduxjs/toolkit";
import startMenuReducer from "./states/StartMenuState";

export const store = configureStore({
  reducer: {
    startMenu: startMenuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
