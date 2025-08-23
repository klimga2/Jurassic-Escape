import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Players: ["Sin jugadores"],
};

export const PlayersSlice = createSlice({
  name: "Players",
  initialState,
  reducers: {
    setPlayers: (state, action) => {
      state.Players = action.payload;
      console.log(Players);
    },
  },
});
export const { setPlayers } = PlayersSlice.actions;
export default PlayersSlice.reducer;
