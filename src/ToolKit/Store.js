import { configureStore } from "@reduxjs/toolkit";
import PlayersSlice from "./PlayersSlice/PlayersSlice";
import DatasSlice from "./DatasSlice/DataSlice";
export const store = configureStore({
  reducer: { Players: PlayersSlice, Datas: DatasSlice },
});
