import { createSlice } from "@reduxjs/toolkit";
import Dinosauriogrande from "../../assets/Dinosaurio grande.png";
import Eventogrande from "../../assets/Evento grande.png";
import Objetogrande from "../../assets/Objeto grande.png";
import Recursogrande from "../../assets/Recurso grande.png";
const initialState = {
  Recursos: [
    // 🔧 Recursos
    {
      nombre: "Metal",
      tipo: "Recurso",
      descripcion:
        "Material resistente y maleable, esencial para construir y reparar piezas de la máquina.",
      img: Recursogrande,
    },
    {
      nombre: "Metal",
      tipo: "Recurso",
      descripcion:
        "Material resistente y maleable, esencial para construir y reparar piezas de la máquina.",
      img: Recursogrande,
    },
    {
      nombre: "Tornillos",
      tipo: "Recurso",
      descripcion:
        "Elementos pequeños de sujeción, necesarios para ensamblar las partes de la máquina.",
      img: Recursogrande,
    },
    {
      nombre: "Tornillos",
      tipo: "Recurso",
      descripcion:
        "Elementos pequeños de sujeción, necesarios para ensamblar las partes de la máquina.",
      img: Recursogrande,
    },
    {
      nombre: "Cables",
      tipo: "Recurso",
      descripcion:
        "Conductores eléctricos que permiten transmitir energía entre los componentes.",
      img: Recursogrande,
    },
    {
      nombre: "Cables",
      tipo: "Recurso",
      descripcion:
        "Conductores eléctricos que permiten transmitir energía entre los componentes.",
      img: Recursogrande,
    },
    {
      nombre: "Madera",
      tipo: "Recurso",
      descripcion:
        "Material básico y versátil, útil como soporte o refuerzo improvisado en la máquina.",
      img: Recursogrande,
    },
    {
      nombre: "Madera",
      tipo: "Recurso",
      descripcion:
        "Material básico y versátil, útil como soporte o refuerzo improvisado en la máquina.",
      img: Recursogrande,
    },
    {
      nombre: "Cristal volcánico",
      tipo: "Recurso",
      descripcion:
        "Raro y poderoso, capaz de almacenar grandes cantidades de energía para activar la máquina.",
      img: Recursogrande,
    },

    // 🌿 Comida natural
    {
      nombre: "Bananos salvajes",
      tipo: "Comida natural",
      descripcion: "Fruta energética de la selva.",
      efecto: "Restaura 3 de hambre",
      img: Recursogrande,
    },
    {
      nombre: "Bayas rojas",
      tipo: "Comida natural",
      descripcion: "Dulces pero arriesgadas: algunas nutren, otras envenenan.",
      efecto:
        "Restaura 4 de hambre o causa -1 de vida (se define al lanzar un dado)",
      img: Recursogrande,
    },
    {
      nombre: "Pez fresco",
      tipo: "Comida natural",
      descripcion: "Rico en proteínas.",
      efecto: "Restaura 2 de hambre",
      img: Recursogrande,
    },
    {
      nombre: "Coco silvestre",
      tipo: "Comida natural",
      descripcion: "Alimento completo, aporta agua y comida.",
      efecto: "Restaura 3 de hambre",
      img: Recursogrande,
    },
    {
      nombre: "Panal de miel",
      tipo: "Comida natural",
      descripcion: "Fuente de energía rápida.",
      efecto: "Restaura 2 de vida y 2 de hambre",
      img: Recursogrande,
    },

    // ⚡ Comida moderna
    {
      nombre: "Bebida energética",
      tipo: "Comida moderna",
      descripcion: "Restante de la nave. Da fuerza extra por un corto tiempo.",
      efecto: "+1 de fuerza durante 1 turno, pero aumenta el hambre después",
      img: Recursogrande,
    },
    {
      nombre: "Barra de granola",
      tipo: "Comida moderna",
      descripcion: "Compacta y nutritiva.",
      efecto: "Restaura 4 de hambre sin efectos secundarios",
      img: Recursogrande,
    },
    {
      nombre: "Botella de agua",
      tipo: "Comida moderna",
      descripcion: "Agua purificada y fresca.",
      efecto: "Restaura 2 de hambre y 1 de vida",
      img: Recursogrande,
    },
    {
      nombre: "Ración empacada",
      tipo: "Comida moderna",
      descripcion: "Comida de emergencia militar.",
      efecto: "Restaura 5 de hambre",
      img: Recursogrande,
    },
  ],

  Objetos: [
    // 🔹 Objetos
    {
      nombre: "Brújula",
      tipo: "Objeto",
      descripcion:
        "Te permite ver cuáles son los próximos 2 tiles en revelarse.",
      efecto: "Ver los próximos 2 tiles del mazo",
      img: Objetogrande,
    },
    {
      nombre: "Binoculares",
      tipo: "Objeto",
      descripcion: "Permiten ver el siguiente tile del mapa.",
      efecto: "Revelar el siguiente tile del mazo",
      img: Objetogrande,
    },
    {
      nombre: "Extintor",
      tipo: "Objeto",
      descripcion: "Espanta a los dinosaurios con humo.",
      efecto: "Evita un ataque de dinosaurio",
      img: Objetogrande,
    },
    {
      nombre: "Vendas",
      tipo: "Objeto",
      descripcion: "Cura heridas leves.",
      efecto: "Recupera 3 puntos de vida",
      img: Objetogrande,
    },
    {
      nombre: "Botiquín",
      tipo: "Objeto",
      descripcion: "Kit médico completo.",
      efecto: "Cura hasta 4 puntos de vida",
      img: Objetogrande,
    },
    {
      nombre: "Mapa",
      tipo: "Objeto",
      descripcion: "Permite desplazarse con mayor rapidez.",
      efecto: "+2 puntos de movimiento adicionales a la tirada de dados",
      img: Objetogrande,
    },
    {
      nombre: "Celular",
      tipo: "Objeto",
      descripcion: "Genera una alarma que atrae dinosaurios.",
      efecto:
        "Lanza o deja el obejto en un tile y cualquier jugador en ese tile recibe 4 de daño al finalizar tu turno",
      img: Objetogrande,
    },
    {
      nombre: "Pistola Teletransportadora",
      tipo: "Objeto",
      descripcion:
        "Permite moverse entre tiles descubiertos en un rango limitado.",
      efecto: "Teletransportarse hasta 4 tiles de distancia",
      img: Objetogrande,
    },
    {
      nombre: "Fósforos",
      tipo: "Objeto",
      descripcion: "Sirven para incendiar un tile.",
      efecto:
        "Lanza o deja el obejto en un tile, este entrara en llamas durante 1 ciclo de turnos, quien lo cruce recibe 2 de daño",
      img: Objetogrande,
    },
    {
      nombre: "Nitrógeno líquido",
      tipo: "Objeto",
      descripcion: "Congela un tile durante un ciclo.",
      efecto:
        "Lanza o deja el obejto en un tile, este se congelara, quien cruce el tile le costara 2 movimiento hacerlo",
      img: Objetogrande,
    },
    {
      nombre: "Kit para fogata",
      tipo: "Objeto",
      descripcion: "Permite cocinar alimentos para mejorar sus beneficios.",
      efecto:
        "El alimento restaura +2 hambre adicional, pero se debe consumir en el mismo turno",
      img: Objetogrande,
    },
    {
      nombre: "Taser",
      tipo: "Objeto",
      descripcion: "Arma de energía de corto alcance.",
      efecto:
        "Hace 1 de daño y paraliza al enemigo por 1 turno (Los jugadores deben estar mismo tile)",
      img: Objetogrande,
    },
    {
      nombre: "Drone",
      tipo: "Objeto",
      descripcion: "Dispositivo volador de apoyo.",
      efecto:
        "Transporta un objeto a otro jugador. El drone no puede ser atacado",
      img: Objetogrande,
    },
    {
      nombre: "Creador universal de materiales",
      tipo: "Objeto",
      descripcion: "Herramienta avanzada de síntesis.",
      efecto: "Permite fabricar un recurso de la maquina del tiempo",
      img: Objetogrande,
    },
    {
      nombre: "Moneda",
      tipo: "Objeto",
      descripcion: "Talismán de la suerte.",
      efecto: "Permite volver a lanzar los dados",
      img: Objetogrande,
    },

    // 🔹 Armas
    {
      nombre: "Destornillador",
      tipo: "Arma",
      descripcion: "Herramienta improvisada usada como arma.",
      efecto: "+1 punto de fuerza",
      img: Objetogrande,
    },
    {
      nombre: "Hacha",
      tipo: "Arma",
      descripcion: "Arma versátil de corto y mediano alcance.",
      efecto:
        "Suma +2 de daño al número obtenido en tu tirada de dados o 3 de daño fijo al lanzarla (maximo hasta 2 tiles y se pierde el Hacha)",
      img: Objetogrande,
    },
    {
      nombre: "Cuchillo",
      tipo: "Arma",
      descripcion: "Arma ligera y rápida.",
      efecto: "Suma +1 de daño al número obtenido en tu tirada de dados",
      img: Objetogrande,
    },
    {
      nombre: "Tubo de metal",
      tipo: "Arma",
      descripcion: "Arma improvisada pero contundente.",
      efecto: "Suma +2 de daño al número obtenido en tu tirada de dados",
      img: Objetogrande,
    },
    {
      nombre: "Piedra filosa",
      tipo: "Arma",
      descripcion: "Piedra rudimentaria usada como arma.",
      efecto: "Suma +1 de daño al número obtenido en tu tirada de dados",
      img: Objetogrande,
    },
  ],

  Eventos: [
    {
      id: 1,
      nombre: "Huellas Misteriosas",
      descripcion: "Sigues unas huellas enormes que desaparecen en el barro.",
      efecto: "Lanza 1 dado por cada punto de Fuerza:",
      caso1: "0-1: Un depredador te sorprende, pierdes -1 Vida.",
      caso2: "2-3: No encuentras nada.",
      caso3:
        "4+: Logras seguir el rastro y descubres un refugio seguro, ganas +1 Vida.",
      img: Eventogrande,
    },
    {
      id: 2,
      nombre: "Restos Frescos",
      descripcion:
        "Trozo de carne abandonado… pero no sabes por qué. si escoges comerla, activa el efecto. de lo contrario, no ocurre nada.",
      efecto: "Lanza 1 dado por cada punto de Fuerza:",
      caso1: "0-2: ew! es carne podrida, pierdes -1 Vida.",
      caso2:
        "3+: es una deliciosa carne que afortunadamente es comible. +1 de comida.",
      img: Eventogrande,
    },
    {
      id: 3,
      nombre: "Mordida Venenosa",
      descripcion: "Pasas por unos arbustos y escuchas un tenebroso zzzz.",
      efecto: "Lanza 1 dado por cada punto de Fuerza:",
      caso1:
        "0-2: Recibes una mordida directa! -1 Vida y -1 de fuerza. (si tu fuerza ya está en 1, se queda igual).",
      caso2:
        "3: La titanoboa apenas te roza! pero el susto hace que se te caiga algo de la maleta (no puedes tirar recursos de la máquina).",
      caso3: "4+: Corres y escapas sin problemas.",
      img: Eventogrande,
    },
    {
      id: 4,
      nombre: "Flor gigante",
      descripcion:
        "Te encuentras con una planta gigante que se asemeja a una flor.",
      efecto: "¿Deseas acercarte?",
      caso1:
        "Si: El olor de la flor es tan llamativo que te abre el apetito. -1 hambre.",
      caso2: "No: Te alejas de manera segura.",
      img: Eventogrande,
    },
    {
      id: 5,
      nombre: "Arbusto de bayas moradas",
      descripcion: "Mientras caminas encuentras un arbusto de bayas moradas.",
      efecto: "¿Deseas probar 1?",
      caso1: "Si: Las bayas saben estupendo! +1 de fuerza, +1 de hambre.",
      caso2: "No: Podrían ser venenosas! decides no comer ninguna baya.",
      img: Eventogrande,
    },
    {
      id: 6,
      nombre: "Lago misterioso",
      descripcion:
        "Te encuentras con un lago, parece que hay cosas moviéndose dentro.",
      efecto: "Lanza 1 dado por cada punto de Fuerza:",
      caso1:
        "0-1: Te resbalas y caes al lago. se te cae algo de la maleta (no puedes tirar recursos de la máquina).",
      caso2: "2-3: Pasas todo el día pero no pescas nada.",
      caso3: "4+: Logras pescar 1 pescado! +1 de fuerza.",
      img: Eventogrande,
    },
    {
      id: 7,
      nombre: "Derrumbe de Rocas",
      descripcion:
        "Escuchas un sonido extraño y sientes un temblor. El terreno cede bajo tus pies!",
      efecto: "Lanza 1 dado por cada punto de Fuerza:",
      caso1: "0-2: Quedas atrapado, pierdes -2 Vida.",
      caso2: "3-4: Sales herido, pierdes -1 Vida.",
      caso3: "5+: Escapas sin daño.",
      img: Eventogrande,
    },
    {
      id: 8,
      nombre: "Esqueleto de dinosaurio",
      descripcion:
        "Encuentras un esqueleto de un dinosaurio gigante, probablemente un braquiosaurio.",
      efecto: "Lanza 1 dado según tus puntos de fuerza:",
      caso1:
        "0-3: Un dinosaurio estaba comiendo de los restos! el dinosaurio te ataca. -2 de vida.",
      caso2: "4+: Parece que no hay nada interesante aquí.",
      img: Eventogrande,
    },
    {
      id: 9,
      nombre: "Lluvia terrenal",
      descripcion: "Empieza a caer una lluvia fuerte en todo el tablero!",
      efecto:
        "Todos los jugadores deben hacer una tirada según sus puntos de fuerza:",
      caso1:
        "0-2: La lluvia los hace buscar refugio apresuradamente, pero no son lo suficiente rápidos. Les cae un rayo. -2 de vida.",
      caso2:
        "3-4: Encuentran una cueva en la que esperan hasta que la lluvia pase. -1 de hambre.",
      caso3: "4+: El cielo les sonríe y no tienen ningún percance.",
      img: Eventogrande,
    },
    {
      id: 10,
      nombre: "El fantasma de la niebla",
      descripcion:
        "Llevan tanto tiempo en este mundo jurásico que empiezan a alucinar. de lejos ven a una persona? deciden acercarse y averiguar que es.",
      efecto: "Lanza 1 dado según tus puntos de fuerza:",
      caso1:
        "0-3: Era un oviraptor! se abalanza sobre ti y te roba un trozo de comida.",
      caso2: "4+: Eran palmas con bananos saludables. +2 de vida.",
      img: Eventogrande,
    },
    {
      id: 11,
      nombre: "Corriente Traicionera",
      descripcion: "Intentando recolectar agua, te resbalas y caes en un río!",
      efecto: "Lanza 1 dado según tus puntos de fuerza:",
      caso1:
        "0-3: La corriente te arrastra. mueve tu personaje al otro lado del mapa.",
      caso2: "4+: Logras agarrarte de una rama y sales del río seguro.",
      img: Eventogrande,
    },
    {
      id: 12,
      nombre: "Noche Tranquila",
      descripcion:
        "Después de todo este viaje, decides tomarte un tiempo para descansar bajo las estrellas.",
      efecto: "Recupera +2 Vida y +1 fuerza.",
      img: Eventogrande,
    },
    {
      id: 13,
      nombre: "Reflejo en las nubes",
      descripcion:
        "Miras hacia arriba al cielo y en las nubes ves formas que te recuerdan a tus seres queridos.",
      efecto: "Te llenas de vitalidad por recordarlos. +1 de vida.",
      img: Eventogrande,
    },
    {
      id: 14,
      nombre: "Fruta arcoiris",
      descripcion:
        "Encuentras una fruta de varios colores que no puedes evitar comer.",
      efecto: "Lanza 1 dado según tus puntos de fuerza:",
      caso1: "0-1: La fruta sabe horrible y te hace vomitar -1 de hambre.",
      caso2: "2-3: La fruta es algo viscosa pero comible +1 de hambre.",
      caso3: "4-5: Refrescante y efectiva +1 de vida +1 de fuerza.",
      caso4:
        "6+: Es un milagro del universo! +2 de vida +1 de hambre +1 de fuerza.",
      img: Eventogrande,
    },
    {
      id: 15,
      nombre: "Meteorito",
      descripcion:
        "Cuando miran al cielo ven que viene un meteorito. busque refugio rápido!",
      efecto: "Todos los jugadores lanzan 1 dado según sus puntos de fuerza:",
      caso1:
        "0-4: Te tiras al suelo sin saber qué hacer y la onda explosiva te hace daño -4 de vida.",
      caso2:
        "4+: Te escondes en una cueva profunda y logras no salir muy herido -2 de vida.",
      img: Eventogrande,
    },
    {
      id: 16,
      nombre: "Terremoto",
      descripcion:
        "El piso tiembla y las cosas empiezan a caer. busque refugio rápido!",
      efecto: "Todos los jugadores lanzan 1 dado según sus puntos de fuerza:",
      caso1: "0-3: Una roca de una montaña cae sobre tu pie -3 de vida.",
      caso2:
        "4+: El terremoto te hace perder el equilibrio y te mueve 3 tiles de espacio hacia alguna dirección.",
      img: Eventogrande,
    },
  ],

  Dinosaurios: [
    {
      id: 1,
      nombre: "T-Rex",
      nivelPoder: "Nivel poder 5",
      descripcion:
        "¡Te has cruzado con el depredador más temido de la era jurásica!",
      efecto:
        "Lanza 1 dado por cada punto de Fuerza que tengas y suma los resultados.",
      caso1: "Si tu total es 6 o más, logras escapar ileso.",
      caso2:
        "Si tu total es menor a 6, recibes daño igual a la diferencia entre el poder del T-Rex y tu tirada.",
      recordatorio:
        "Si tienes un objeto con la habilidad de Defensa, puedes usarlo para ayudarte, pero solo uno.",
      img: Dinosauriogrande,
    },
    {
      id: 2,
      nombre: "Raptor",
      nivelPoder: "Nivel poder 4",
      descripcion:
        "Rápido, astuto y letal en manada. Este depredador no te dará respiro.",
      efecto:
        "Lanza 1 dado por cada punto de Fuerza que tengas y suma los resultados.",
      caso1: "Si tu total es 4 o más, logras esquivar su ataque.",
      caso2:
        "Si tu total es menor a 4, recibes daño igual a la diferencia entre el poder del Raptor y tu tirada.",
      recordatorio:
        "Si tienes un objeto con la habilidad de Defensa, puedes usarlo para ayudarte, pero solo uno.",
      img: Dinosauriogrande,
    },
    {
      id: 3,
      nombre: "Pteranodonte",
      nivelPoder: "Nivel poder 3",
      descripcion: "Surca el cielo y se lanza en picada. ¡No lo subestimes!",
      efecto:
        "Lanza 1 dado por cada punto de Fuerza que tengas y suma los resultados.",
      caso1: "Si tu total es 3 o más, evitas su embestida aérea.",
      caso2:
        "Si tu total es menor a 3, recibes daño igual a la diferencia entre el poder del Pteranodonte y tu tirada.",
      recordatorio:
        "Si tienes un objeto con la habilidad de Defensa, puedes usarlo para ayudarte, pero solo uno.",
      img: Dinosauriogrande,
    },
    {
      id: 4,
      nombre: "Allosaurio",
      nivelPoder: "Nivel poder 5",
      descripcion:
        "Un cazador implacable, más ágil que el T-Rex e igual de feroz.",
      efecto:
        "Lanza 1 dado por cada punto de Fuerza que tengas y suma los resultados.",
      caso1: "Si tu total es 5 o más, logras escapar.",
      caso2:
        "Si tu total es menor a 5, recibes daño igual a la diferencia entre el poder del Allosaurio y tu tirada.",
      recordatorio:
        "Si tienes un objeto con la habilidad de Defensa, puedes usarlo para ayudarte, pero solo uno.",
      img: Dinosauriogrande,
    },
    {
      id: 5,
      nombre: "Braquiosaurio",
      nivelPoder: "Nivel poder 3",
      descripcion:
        "Gigante y pacífico, pero un mal paso puede dejarte aplastado.",
      efecto:
        "Lanza 1 dado por cada punto de Fuerza que tengas y suma los resultados.",
      caso1: "Si tu total es 2 o más, te apartas a tiempo.",
      caso2:
        "Si tu total es menor a 2, recibes daño igual a la diferencia entre el poder del Braquiosaurio y tu tirada.",
      recordatorio:
        "Si tienes un objeto con la habilidad de Defensa, puedes usarlo para ayudarte, pero solo uno.",
      img: Dinosauriogrande,
    },
    {
      id: 6,
      nombre: "Parasaurio",
      nivelPoder: "Nivel poder 2",
      descripcion:
        "Generalmente inofensivo, pero en estampida puede ser peligroso.",
      efecto:
        "Lanza 1 dado por cada punto de Fuerza que tengas y suma los resultados.",
      caso1: "Si tu total es 2 o más, te pones a salvo.",
      caso2:
        "Si tu total es menor a 2, recibes daño igual a la diferencia entre el poder del Parasaurio y tu tirada.",
      recordatorio:
        "Si tienes un objeto con la habilidad de Defensa, puedes usarlo para ayudarte, pero solo uno.",
      img: Dinosauriogrande,
    },
    {
      id: 7,
      nombre: "Espinosaurio",
      nivelPoder: "Nivel poder 5",
      descripcion:
        "Un depredador colosal, igual de temible en tierra que en el agua.",
      efecto:
        "Lanza 1 dado por cada punto de Fuerza que tengas y suma los resultados.",
      caso1: "Si tu total es 6 o más, logras escapar.",
      caso2:
        "Si tu total es menor a 6, recibes daño igual a la diferencia entre el poder del Espinosaurio y tu tirada.",
      recordatorio:
        "Si tienes un objeto con la habilidad de Defensa, puedes usarlo para ayudarte, pero solo uno.",
      img: Dinosauriogrande,
    },
    {
      id: 8,
      nombre: "Argentavis",
      nivelPoder: "Nivel poder 4",
      descripcion:
        "El ave más grande que haya surcado los cielos, capaz de levantarte del suelo.",
      efecto:
        "Lanza 1 dado por cada punto de Fuerza que tengas y suma los resultados.",
      caso1: "Si tu total es 3 o más, evitas sus garras.",
      caso2:
        "Si tu total es menor a 3, recibes daño igual a la diferencia entre el poder del Argentavis y tu tirada.",
      recordatorio:
        "Si tienes un objeto con la habilidad de Defensa, puedes usarlo para ayudarte, pero solo uno.",
      img: Dinosauriogrande,
    },
    {
      id: 9,
      nombre: "Triceratops",
      nivelPoder: "Nivel poder 4",
      descripcion: "Su enorme cuerno y su carga son casi imparables.",
      efecto:
        "Lanza 1 dado por cada punto de Fuerza que tengas y suma los resultados.",
      caso1: "Si tu total es 4 o más, esquivas su embestida.",
      caso2:
        "Si tu total es menor a 4, recibes daño igual a la diferencia entre el poder del Triceratops y tu tirada.",
      recordatorio:
        "Si tienes un objeto con la habilidad de Defensa, puedes usarlo para ayudarte, pero solo uno.",
      img: Dinosauriogrande,
    },
    {
      id: 10,
      nombre: "Carnotauro",
      nivelPoder: "Nivel poder 4",
      descripcion:
        "Un depredador rápido y brutal, experto en sorprender a su presa.",
      efecto:
        "Lanza 1 dado por cada punto de Fuerza que tengas y suma los resultados.",
      caso1: "Si tu total es 5 o más, logras escapar.",
      caso2:
        "Si tu total es menor a 5, recibes daño igual a la diferencia entre el poder del Carnotauro y tu tirada.",
      recordatorio:
        "Si tienes un objeto con la habilidad de Defensa, puedes usarlo para ayudarte, pero solo uno.",
      img: Dinosauriogrande,
    },
  ],
};

export const DatasSlice = createSlice({
  name: "Datas",
  initialState,
  reducers: {},
});

export const {} = DatasSlice.actions;
export default DatasSlice.reducer;
