import { configureStore } from "@reduxjs/toolkit";
import PlayersSlice from "./PlayersSlice/PlayersSlice";
export const store = configureStore({
  reducer: { Players: PlayersSlice },
});
