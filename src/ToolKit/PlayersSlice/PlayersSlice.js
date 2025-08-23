import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Players: [],
};

export const PlayersSlice = createSlice({
  name: "Players",
  initialState,
  reducers: {},
});
