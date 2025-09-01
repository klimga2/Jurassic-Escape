import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import imgDinosaurio from "../assets/Dinosaurio.png";
import imgEvento from "../assets/Evento.png";
import imgObjeto from "../assets/Objeto.png";
import imgRecurso from "../assets/Recurso.png";
import "./Game.css";

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
  console.log(jugadorActual);
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

  return (
    <div
      className="game-container"
      style={{
        backgroundColor:
          jugadorActual?.equipo === "Rojo" ? "#d35656ff" : "#5b83dfff",
      }}
    >
      <h1>EQUIPO: {jugadorActual?.equipo}</h1>
      <h2>Turno de: {jugadorActual?.nombre}</h2>
      <p>
        Usa los botones para revelar cartas de eventos, objetos, recursos o
        encuentros con dinosaurios.
      </p>

      <div className="action-buttons">
        <button
          onClick={() => handleCardClick("Eventos")}
          className="action-button"
        >
          Evento
          <img src={imgEvento} alt="" />
        </button>
        <button
          onClick={() => handleCardClick("Dinosaurios")}
          className="action-button"
        >
          Dinosaurio
          <img src={imgDinosaurio} alt="" />
        </button>
        <button
          onClick={() => handleCardClick("objetos")}
          className="action-button"
        >
          Objetos
          <img src={imgObjeto} alt="" />
        </button>
        <button
          onClick={() => handleCardClick("Recursos")}
          className="action-button"
        >
          Recursos
          <img src={imgRecurso} alt="" />
        </button>
      </div>

      {currentCard && (
        <div className="popup-overlay">
          <div className="popup-card">
            <h3>{currentCard?.nombre}</h3>
            <img src={currentCard.img} alt="" />

            {currentCard?.tipo && (
              <p>
                <b>Tipo:</b> {currentCard.tipo}
              </p>
            )}
            {currentCard?.nivelPoder && (
              <p>
                <b>{currentCard.nivelPoder}</b>
              </p>
            )}
            <p>{currentCard?.descripcion}</p>
            {currentCard?.efecto && (
              <p>
                <b>Efecto:</b> {currentCard.efecto}
              </p>
            )}

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

            {currentCard?.recordatorio && (
              <p style={{ fontStyle: "italic", fontSize: "0.9em" }}>
                ⚠️ {currentCard.recordatorio}
              </p>
            )}

            <button onClick={siguienteTurno} className="next-turn-btn">
              Siguiente Turno
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
