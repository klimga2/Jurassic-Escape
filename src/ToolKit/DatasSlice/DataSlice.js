import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Players: [],


};

export const PlayersSlice = createSlice({
  name: "Players",
  initialState,
  reducers: {
    // Agregar un nuevo jugador
    addPlayer: (state, action) => {
      const { nombre, equipo } = action.payload;
      state.Players.push({ nombre, equipo });
    },

    // Cambiar el equipo de un jugador
    setTeam: (state, action) => {
      const { nombre, equipo } = action.payload;
      const jugador = state.Players.find((p) => p.nombre === nombre);
      if (jugador) {
        jugador.equipo = equipo;
      }
    },
  },
});

export const { addPlayer, setTeam } = PlayersSlice.actions;
export default PlayersSlice.reducer;
