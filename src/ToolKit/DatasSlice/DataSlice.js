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

  Eventos: [
    {
      id: 1,
      nombre: "Huellas Misteriosas",
      descripcion: "Sigues unas huellas enormes que desaparecen en el barro.",
      efecto: `Lanza 1 dado por cada punto de Fuerza:
0-1: Un depredador te sorprende, pierdes -1 Vida.
2-3: No encuentras nada.
4+: Logras seguir el rastro y descubres un refugio seguro, ganas +1 Vida.`,
    },
    {
      id: 2,
      nombre: "Restos Frescos",
      descripcion:
        "Trozo de carne abandonado… pero no sabes por qué. si escoges comerla, activa el efecto. de lo contrario, no ocurre nada.",
      efecto: `Lanza 1 dado por cada punto de Fuerza:
0-2: ew! es carne podrida, pierdes -1 Vida.
3+: es una deliciosa carne que afortunadamente es comible. +1 de comida`,
    },
    {
      id: 3,
      nombre: "Mordida Venenosa",
      descripcion: "pasas por unos arbustos y escuchas un tenebroso zzzz.",
      efecto: `Lanza 1 dado por cada punto de Fuerza:
0-2: recibes una mordida directa! -1 Vida y -1 de fuerza. (si tu fuerza ya está en 1, se queda igual)
3: la titanoboa apenas te roza! pero el susto hace que se te se te caiga algo de la maleta (no puedes tirar recursos de la máquina).
4+: corres y escapas sin problemas`,
    },
    {
      id: 4,
      nombre: "Flor gigante",
      descripcion:
        "te encuentras con una planta gigante que se asemeja a una flor.",
      efecto: `deseas acercarte?
si: el olor de la flor es tan llamativo que te abre el apetito. -1 hambre
no: te alejas de manera segura.`,
    },
    {
      id: 5,
      nombre: "Arbusto de bayas moradas",
      descripcion: "mientras caminas encuentras un arbusto de bayas moradas.",
      efecto: `¿Deseas probar 1?
si: las bayas saben estupendo! +1 de fuerza, +1 de hambre
no: podrían ser venenosas! decides no comer ninguna baya..`,
    },
    {
      id: 6,
      nombre: "Lago misterioso",
      descripcion:
        "te encuentras con un lago, parece que hay cosas moviéndose dentro.",
      efecto: `Lanza 1 dado por cada punto de Fuerza:
0-1: te resbalas y caes al lago. se te cae algo de la maleta (no puedes tirar recursos de la máquina)
2-3: pasas todo el día pero no pescas nada.
4+: logras pescar 1 pescado! +1 de fuerza`,
    },
    {
      id: 7,
      nombre: "Derrumbe de Rocas",
      descripcion:
        "escuchas un sonido extraño y sientes un temblor. El terreno cede bajo tus pies!",
      efecto: `Lanza 1 dado por cada punto de Fuerza:
0-2: Quedas atrapado, pierdes -2 Vida.
3-4: Sales herido, pierdes -1 Vida.
5+: Escapas sin daño.`,
    },
    {
      id: 8,
      nombre: "Esqueleto de dinosaurio",
      descripcion:
        "encuentras un esqueleto de un dinosaurio gigante, probablemente un braquiosaurio.",
      efecto: `Lanza 1 dado segun tus puntos de fuerza:
0-3: un dinosaurio estaba comiendo de los restos! el dinosaurio te ataca. -2 de vida.
4+: parece que no hay nada interesante aqui.`,
    },
    {
      id: 9,
      nombre: "Lluvia terrenal",
      descripcion: "empieza a caer una lluvia fuerte en todo el tablero!",
      efecto: `todos los jugadores deben hacer una tirada según sus puntos de fuerza
0-2: la lluvia los hace buscar refugio apresuradamente, pero no son lo suficiente rápidos. les cae un rayo. -2 de vida.
3-4: encuentran una cueva en la que esperan hasta que la lluvia pase. -1 de hambre
4+: el cielo les sonríe y no tienen ningún percance.`,
    },
    {
      id: 10,
      nombre: "El fantasma de la niebla",
      descripcion:
        "llevan tanto tiempo en este mundo jurásico que empiezan a alucinar. de lejos ven a una persona? deciden acercarse y averiguar que es.",
      efecto: `Lanza 1 dado según tus puntos de fuerza:
0-3: era un oviraptor! se abalanza sobre ti y te roba un trozo de comida..
4+: eran palmas con bananos saludables. +2 de vida.`,
    },
    {
      id: 11,
      nombre: "Corriente Traicionera",
      descripcion: "intentando recolectar agua, te resbalas y caes en un rio!",
      efecto: `Lanza 1 dado según tus puntos de fuerza:
0-3: la corriente te arrastra. mueve tu personaje al otro lado del mapa
4+: logras agarrarte de una rama y sales del río seguro.`,
    },
    {
      id: 12,
      nombre: "Noche Tranquila",
      descripcion:
        "Después de todo este viaje, decides tomarte un tiempo para descansar bajo las estrellas.",
      efecto: "Recupera +2 Vida y +1 fuerza.",
    },
    {
      id: 13,
      nombre: "Reflejo en las nubes",
      descripcion:
        "miras hacia arriba al cielo y en las nubes ves formas que te recuerdan a tus seres queridos",
      efecto: "te llenas de vitalidad por recordarlos. +1 de vida.",
    },
    {
      id: 14,
      nombre: "Fruta arcoiris",
      descripcion:
        "encuentras una fruta de varios colores que no puedes evitar comer.",
      efecto: `Lanza 1 dado según tus puntos de fuerza:
0-1: la fruta sabe horrible y te hace vomitar -1 de hambre
2-3: la fruta es algo viscosa pero comible +1 de hambre
4-5: refrescante y efectiva +1 de vida +1 de fuerza
6+: es un milagro del universo! +2 de vida +1 de hambre +1 de fuerza`,
    },
    {
      id: 15,
      nombre: "Meteorito",
      descripcion:
        "cuando miran al cielo ven que viene un meteorito. busque refugio rápido!",
      efecto: `todos los jugadores lanzan 1 dado según tus puntos de fuerza:
0-4: te tiras al suelo sin saber que hacer y la onda explosiva te hace daño -4 de vida
4+: te escondes en una cueva profunda y logras no salir muy herido -2 de vida`,
    },
    {
      id: 16,
      nombre: "Terremoto",
      descripcion:
        "el piso tiembla y las cosas empiezan a caer. busque refugio rápido!",
      efecto: `todos los jugadores lanzan 1 dado según tus puntos de fuerza:
0-3: una roca de una montaña cae sobre tu pie -3 de vida
4+: el terremoto te hace perder el equilibrio y te mueve 3 tiles de espacio hacia alguna dirección.`,
    },
  ],
  Dinosaurios: [
    {
      id: 1,
      nombre: "T-Rex",
      nivelPoder: 5,
      descripcion:
        "¡Te has cruzado con el depredador más temido de la era jurásica!",
      instrucciones: [
        "Lanza 1 dado por cada punto de Fuerza que tengas.",
        "Suma los resultados.",
        "Si tu total es 6 o más, logras escapar ileso.",
        "Si tu total es menor a 6, recibes daño igual a la diferencia entre el poder del T-Rex y tu tirada.",
        "Si tienes un objeto con la habilidad de Defensa, puedes usarlo para ayudarte, pero solo uno.",
      ],
    },
    {
      id: 2,
      nombre: "Raptor",
      nivelPoder: 4,
      descripcion:
        "Rápido, astuto y letal en manada. Este depredador no te dará respiro.",
      instrucciones: [
        "Lanza 1 dado por cada punto de Fuerza que tengas.",
        "Suma los resultados.",
        "Si tu total es 4 o más, logras esquivar su ataque.",
        "Si tu total es menor a 4, recibes daño igual a la diferencia entre el poder del Raptor y tu tirada.",
        "Si tienes un objeto con la habilidad de Defensa, puedes usarlo para ayudarte, pero solo uno.",
      ],
    },
    {
      id: 3,
      nombre: "Pteranodonte",
      nivelPoder: 3,
      descripcion: "Surca el cielo y se lanza en picada. ¡No lo subestimes!",
      instrucciones: [
        "Lanza 1 dado por cada punto de Fuerza que tengas.",
        "Suma los resultados.",
        "Si tu total es 3 o más, evitas su embestida aérea.",
        "Si tu total es menor a 3, recibes daño igual a la diferencia entre el poder del Pteranodonte y tu tirada.",
        "Si tienes un objeto con la habilidad de Defensa, puedes usarlo para ayudarte, pero solo uno.",
      ],
    },
    {
      id: 4,
      nombre: "Allosaurio",
      nivelPoder: 5,
      descripcion:
        "Un cazador implacable, más ágil que el T-Rex e igual de feroz.",
      instrucciones: [
        "Lanza 1 dado por cada punto de Fuerza que tengas.",
        "Suma los resultados.",
        "Si tu total es 5 o más, logras escapar.",
        "Si tu total es menor a 5, recibes daño igual a la diferencia entre el poder del Allosaurio y tu tirada.",
        "Si tienes un objeto con la habilidad de Defensa, puedes usarlo para ayudarte, pero solo uno.",
      ],
    },
    {
      id: 5,
      nombre: "Braquiosaurio",
      nivelPoder: 3,
      descripcion:
        "Gigante y pacífico, pero un mal paso puede dejarte aplastado.",
      instrucciones: [
        "Lanza 1 dado por cada punto de Fuerza que tengas.",
        "Suma los resultados.",
        "Si tu total es 2 o más, te apartas a tiempo.",
        "Si tu total es menor a 2, recibes daño igual a la diferencia entre el poder del Braquiosaurio y tu tirada.",
        "Si tienes un objeto con la habilidad de Defensa, puedes usarlo para ayudarte, pero solo uno.",
      ],
    },
    {
      id: 6,
      nombre: "Parasaurio",
      nivelPoder: 2,
      descripcion:
        "Generalmente inofensivo, pero en estampida puede ser peligroso.",
      instrucciones: [
        "Lanza 1 dado por cada punto de Fuerza que tengas.",
        "Suma los resultados.",
        "Si tu total es 2 o más, te pones a salvo.",
        "Si tu total es menor a 2, recibes daño igual a la diferencia entre el poder del Parasaurio y tu tirada.",
        "Si tienes un objeto con la habilidad de Defensa, puedes usarlo para ayudarte, pero solo uno.",
      ],
    },
    {
      id: 7,
      nombre: "Espinosaurio",
      nivelPoder: 5,
      descripcion:
        "Un depredador colosal, igual de temible en tierra que en el agua.",
      instrucciones: [
        "Lanza 1 dado por cada punto de Fuerza que tengas.",
        "Suma los resultados.",
        "Si tu total es 6 o más, logras escapar.",
        "Si tu total es menor a 6, recibes daño igual a la diferencia entre el poder del Espinosaurio y tu tirada.",
        "Si tienes un objeto con la habilidad de Defensa, puedes usarlo para ayudarte, pero solo uno.",
      ],
    },
    {
      id: 8,
      nombre: "Argentavis",
      nivelPoder: 4,
      descripcion:
        "El ave más grande que haya surcado los cielos, capaz de levantarte del suelo.",
      instrucciones: [
        "Lanza 1 dado por cada punto de Fuerza que tengas.",
        "Suma los resultados.",
        "Si tu total es 3 o más, evitas sus garras.",
        "Si tu total es menor a 3, recibes daño igual a la diferencia entre el poder del Argentavis y tu tirada.",
        "Si tienes un objeto con la habilidad de Defensa, puedes usarlo para ayudarte, pero solo uno.",
      ],
    },
    {
      id: 9,
      nombre: "Triceratops",
      nivelPoder: 4,
      descripcion: "Su enorme cuerno y su carga son casi imparables.",
      instrucciones: [
        "Lanza 1 dado por cada punto de Fuerza que tengas.",
        "Suma los resultados.",
        "Si tu total es 4 o más, esquivas su embestida.",
        "Si tu total es menor a 4, recibes daño igual a la diferencia entre el poder del Triceratops y tu tirada.",
        "Si tienes un objeto con la habilidad de Defensa, puedes usarlo para ayudarte, pero solo uno.",
      ],
    },
    {
      id: 10,
      nombre: "Carnotauro",
      nivelPoder: 4,
      descripcion:
        "Un depredador rápido y brutal, experto en sorprender a su presa.",
      instrucciones: [
        "Lanza 1 dado por cada punto de Fuerza que tengas.",
        "Suma los resultados.",
        "Si tu total es 5 o más, logras escapar.",
        "Si tu total es menor a 5, recibes daño igual a la diferencia entre el poder del Carnotauro y tu tirada.",
        "Si tienes un objeto con la habilidad de Defensa, puedes usarlo para ayudarte, pero solo uno.",
      ],
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
