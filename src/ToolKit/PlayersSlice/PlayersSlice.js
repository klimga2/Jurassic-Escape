import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Players: [],
};

export const PlayersSlice = createSlice({
  name: "Players",
  initialState,
  reducers: {
    setPlayers: (state, action) => {},
  },
});
export const { setPlayers } = PlayersSlice.actions;
export default PlayersSlice.reducer;
