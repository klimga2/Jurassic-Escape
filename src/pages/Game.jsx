import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import imgDinosaurio from "../assets/Dinosaurio.png";
import imgEvento from "../assets/Evento.png";
import imgObjeto from "../assets/Objeto.png";
import imgRecurso from "../assets/Recurso.png";
const Game = () => {
  const players = useSelector((state) => state.Players.Players);
  const data = useSelector((state) => state.Datas); // cartas del slice

  const [turnIndex, setTurnIndex] = useState(0);
  const [turnOrder, setTurnOrder] = useState([]);
  const [currentCard, setCurrentCard] = useState(null);
  const [remainingCards, setRemainingCards] = useState({
    Eventos: [],
    objetos: [],
    Recursos: [],
    Dinosaurios: [],
  });

  // Crear orden intercalado al inicio
  useEffect(() => {
    const rojo = players.filter((p) => p.equipo === "Rojo");
    const azul = players.filter((p) => p.equipo === "Azul");
    const max = Math.max(rojo.length, azul.length);

    let orden = [];
    for (let i = 0; i < max; i++) {
      if (rojo[i]) orden.push(rojo[i]);
      if (azul[i]) orden.push(azul[i]);
    }
    setTurnOrder(orden);

    // copiar cartas iniciales
    setRemainingCards({
      Eventos: [...data.Eventos],
      objetos: [...data.Objetos],
      Recursos: [...data.Recursos],
      Dinosaurios: [...data.Dinosaurios],
    });
  }, [players, data]);

  const jugadorActual = turnOrder[turnIndex % turnOrder.length];

  const getRandomCard = (type) => {
    let cards = remainingCards[type];
    if (cards.length === 0) {
      alert("Ya no quedan cartas de este tipo");
      return null;
    }
    const randomIndex = Math.floor(Math.random() * cards.length);
    const selected = cards[randomIndex];

    // quitar carta usada
    const newCards = [...cards];
    newCards.splice(randomIndex, 1);
    setRemainingCards((prev) => ({ ...prev, [type]: newCards }));

    return selected;
  };

  const handleCardClick = (type) => {
    const card = getRandomCard(type);
    if (card) {
      setCurrentCard(card);
    }
  };

  const siguienteTurno = () => {
    setCurrentCard(null);
    setTurnIndex(turnIndex + 1);
  };
  const buttonstyle = {
    background: "#c9c9c9ff",
  };
  return (
    <div
      style={{
        backgroundColor:
          jugadorActual?.equipo === "Rojo" ? "#d35656ff" : "#5b83dfff",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h2>
        Es turno de <b>{jugadorActual?.nombre}</b> ({jugadorActual?.equipo})
      </h2>
      <p>
        {" "}
        Usa los botones para revelar cartas de eventos, objetos, recursos o
        encuentros con dinosaurios.
      </p>

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => handleCardClick("Eventos")} style={buttonstyle}>
          <img src={imgEvento} alt="" />
        </button>
        <button
          onClick={() => handleCardClick("Dinosaurios")}
          style={buttonstyle}
        >
          {" "}
          <img src={imgDinosaurio} alt="" />
        </button>
        <button onClick={() => handleCardClick("objetos")} style={buttonstyle}>
          {" "}
          <img src={imgObjeto} alt="" />
        </button>
        <button onClick={() => handleCardClick("Recursos")} style={buttonstyle}>
          {" "}
          <img src={imgRecurso} alt="" />
        </button>
      </div>

      {/* Pop-up de carta */}
      {currentCard && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "#6a8d76ff",
              padding: "20px",
              borderRadius: "10px",
              width: "80%",
              maxWidth: "400px",
              color: "black",
            }}
          >
            {/* Título */}
            <h3>{currentCard?.nombre}</h3>

            <img
              src={currentCard.img}
              alt=""
              style={{
                width: "200px",
              }}
            />

            {/* Tipo (si existe) */}
            {currentCard?.tipo && (
              <p>
                <b>Tipo:</b> {currentCard.tipo}
              </p>
            )}

            {/* Nivel de poder (para enemigos) */}
            {currentCard?.nivelPoder && (
              <p>
                <b>{currentCard.nivelPoder}</b>
              </p>
            )}

            {/* Descripción */}
            <p>{currentCard?.descripcion}</p>

            {/* Efecto */}
            {currentCard?.efecto && (
              <p>
                <b>Efecto:</b> {currentCard.efecto}
              </p>
            )}

            {/* Casos especiales (eventos/enemigos) */}
            {currentCard?.caso1 && (
              <div>
                <p>
                  <b>Resultado:</b>
                </p>
                <ul>
                  {currentCard?.caso1 && <li>{currentCard.caso1}</li>}
                  {currentCard?.caso2 && <li>{currentCard.caso2}</li>}
                  {currentCard?.caso3 && <li>{currentCard.caso3}</li>}
                </ul>
              </div>
            )}

            {/* Recordatorio (solo enemigos o cartas específicas) */}
            {currentCard?.recordatorio && (
              <p style={{ fontStyle: "italic", fontSize: "0.9em" }}>
                ⚠️ {currentCard.recordatorio}
              </p>
            )}

            {/* Botón siguiente turno */}
            <button
              onClick={siguienteTurno}
              style={{
                marginTop: "15px",
                padding: "8px 12px",
                borderRadius: "5px",
                border: "none",
                background: "#2d4739",
                color: "white",
                cursor: "pointer",
              }}
            >
              Siguiente Turno
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
