import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Recursos: [
    // 🔧 Recursos
    {
      nombre: "Metal",
      tipo: "Recurso",
      descripcion:
        "Material resistente y maleable, esencial para construir y reparar piezas de la máquina.",
      efecto: "Usado en la máquina del tiempo",
    },
    {
      nombre: "Tornillos",
      tipo: "Recurso",
      descripcion:
        "Elementos pequeños de sujeción, necesarios para ensamblar las partes de la máquina.",
      efecto: "Usado en la máquina del tiempo",
    },
    {
      nombre: "Cables",
      tipo: "Recurso",
      descripcion:
        "Conductores eléctricos que permiten transmitir energía entre los componentes.",
      efecto: "Usado en la máquina del tiempo",
    },
    {
      nombre: "Madera",
      tipo: "Recurso",
      descripcion:
        "Material básico y versátil, útil como soporte o refuerzo improvisado en la máquina.",
      efecto: "Usado en la máquina del tiempo",
    },
    {
      nombre: "Cristal volcánico",
      tipo: "Recurso",
      descripcion:
        "Raro y poderoso, capaz de almacenar grandes cantidades de energía para activar la máquina.",
      efecto: "Usado en la máquina del tiempo",
    },

    // 🌿 Comida natural
    {
      nombre: "Bananos salvajes",
      tipo: "Comida natural",
      descripcion: "Fruta energética de la selva.",
      efecto: "Restaura 3 de hambre",
    },
    {
      nombre: "Bayas rojas",
      tipo: "Comida natural",
      descripcion: "Dulces pero arriesgadas: algunas nutren, otras envenenan.",
      efecto:
        "Restaura 4 de hambre o causa -1 de vida (se define al lanzar un dado)",
    },
    {
      nombre: "Pez fresco",
      tipo: "Comida natural",
      descripcion: "Rico en proteínas.",
      efecto: "Restaura 2 de hambre",
    },
    {
      nombre: "Coco silvestre",
      tipo: "Comida natural",
      descripcion: "Alimento completo, aporta agua y comida.",
      efecto: "Restaura 3 de hambre",
    },
    {
      nombre: "Panal de miel",
      tipo: "Comida natural",
      descripcion: "Fuente de energía rápida.",
      efecto: "Restaura 2 de vida y 2 de hambre",
    },

    // ⚡ Comida moderna
    {
      nombre: "Bebida energética",
      tipo: "Comida moderna",
      descripcion: "Restante de la nave. Da fuerza extra por un corto tiempo.",
      efecto: "+1 de fuerza durante 1 turno, pero aumenta el hambre después",
    },
    {
      nombre: "Barra de granola",
      tipo: "Comida moderna",
      descripcion: "Compacta y nutritiva.",
      efecto: "Restaura 4 de hambre sin efectos secundarios",
    },
    {
      nombre: "Botella de agua",
      tipo: "Comida moderna",
      descripcion: "Agua purificada y fresca.",
      efecto: "Restaura 2 de hambre y 1 de vida",
    },
    {
      nombre: "Ración empacada",
      tipo: "Comida moderna",
      descripcion: "Comida de emergencia militar.",
      efecto: "Restaura 5 de hambre. Muy escasa",
    },
  ],

  objetos: [
    // 🔹 Objetos
    {
      nombre: "Brújula",
      tipo: "Objeto",
      descripcion:
        "Te permite ver cuáles son los próximos 2 tiles en revelarse.",
      efecto: "Ver los próximos 2 tiles del mazo",
    },
    {
      nombre: "Binoculares",
      tipo: "Objeto",
      descripcion: "Permiten ver el siguiente tile del mapa.",
      efecto: "Revelar el siguiente tile",
    },
    {
      nombre: "Extintor",
      tipo: "Objeto",
      descripcion: "Espanta a los dinosaurios con humo.",
      efecto: "Evita un ataque en tu tile",
    },
    {
      nombre: "Vendas",
      tipo: "Objeto",
      descripcion: "Cura heridas leves.",
      efecto: "Recupera 3 puntos de vida",
    },
    {
      nombre: "Botiquín",
      tipo: "Objeto",
      descripcion: "Kit médico completo.",
      efecto: "Cura hasta 4 puntos de vida",
    },
    {
      nombre: "Mapa",
      tipo: "Objeto",
      descripcion: "Permite desplazarse con mayor rapidez.",
      efecto: "+2 puntos de movimiento adicionales a la tirada de dados",
    },
    {
      nombre: "Celular",
      tipo: "Objeto",
      descripcion: "Genera una alarma que atrae dinosaurios.",
      efecto: "Cualquier jugador o criatura en ese tile recibe 4 de daño",
    },
    {
      nombre: "Pistola Teletransportadora",
      tipo: "Objeto",
      descripcion:
        "Permite moverse entre tiles descubiertos en un rango limitado.",
      efecto: "Teletransportarse hasta 4 tiles de distancia",
    },
    {
      nombre: "Fósforos",
      tipo: "Objeto",
      descripcion: "Sirven para incendiar un tile.",
      efecto: "Tile en llamas durante 1 ciclo, quien lo cruce recibe 2 de daño",
    },
    {
      nombre: "Nitrógeno líquido",
      tipo: "Objeto",
      descripcion: "Congela un tile durante un ciclo.",
      efecto: "Quien cruce el tile le costara 2 movimiento hacerlo",
    },
    {
      nombre: "Kit para fogata",
      tipo: "Objeto",
      descripcion: "Permite cocinar alimentos para mejorar sus beneficios.",
      efecto:
        "El alimento consumido en el mismo turno restaura +2 hambre adicional",
    },
    {
      nombre: "Taser",
      tipo: "Objeto",
      descripcion: "Arma de energía de corto alcance.",
      efecto:
        "Hace 1 de daño y paraliza al enemigo por 1 turno (Los jugadores deben estar mismo tile)",
    },
    {
      nombre: "Drone",
      tipo: "Objeto",
      descripcion: "Dispositivo volador de apoyo.",
      efecto:
        "Transporta un objeto a otro jugador. El drone no puede ser atacado",
    },
    {
      nombre: "Creador universal de materiales",
      tipo: "Objeto",
      descripcion: "Herramienta avanzada de síntesis.",
      efecto: "Permite fabricar un recurso",
    },
    {
      nombre: "Moneda",
      tipo: "Objeto",
      descripcion: "Talismán de la suerte.",
      efecto: "Permite volver a lanzar los dados",
    },

    // 🔹 Armas
    {
      nombre: "Destornillador",
      tipo: "Arma",
      descripcion: "Herramienta improvisada usada como arma.",
      efecto: "+1 punto de fuerza",
    },
    {
      nombre: "Hacha",
      tipo: "Arma",
      descripcion: "Arma versátil de corto y mediano alcance.",
      efecto:
        "Suma +2 de daño al número obtenido en tu tirada de dados o 3 de daño fijo al lanzarla (maximo hasta 2 tiles y se pierde el Hacha)",
    },
    {
      nombre: "Cuchillo",
      tipo: "Arma",
      descripcion: "Arma ligera y rápida.",
      efecto: "Suma +1 de daño al número obtenido en tu tirada de dados",
    },
    {
      nombre: "Tubo de metal",
      tipo: "Arma",
      descripcion: "Arma improvisada pero contundente.",
      efecto: "Suma +2 de daño al número obtenido en tu tirada de dados",
    },
    {
      nombre: "Piedra filosa",
      tipo: "Arma",
      descripcion: "Piedra rudimentaria usada como arma.",
      efecto: "Suma +1 de daño al número obtenido en tu tirada de dados",
    },
  ],
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
