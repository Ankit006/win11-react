import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StartMenuSlice {
  showStartMenu: boolean;
}

const initialState: StartMenuSlice = {
  showStartMenu: false,
};

const startMenuSlice = createSlice({
  name: "startMenu",
  initialState,
  reducers: {
    setStartMenuVisible: (state, action: PayloadAction<boolean>) => {
      state.showStartMenu = action.payload;
    },
  },
});

export default startMenuSlice.reducer;
export const { setStartMenuVisible } = startMenuSlice.actions;
