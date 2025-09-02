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
  const [activePlayers, setActivePlayers] = useState([]); // jugadores activos (no eliminados)
  const [currentCard, setCurrentCard] = useState(null);
  const [showPlayerList, setShowPlayerList] = useState(false); // mostrar lista de jugadores
  const [finalCountdown, setFinalCountdown] = useState(null); // contador final cuando quedan 2 del mismo equipo
  const [gameOver, setGameOver] = useState(false);
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
    setActivePlayers(orden); // inicialmente todos están activos

    // copiar cartas iniciales
    setRemainingCards({
      Eventos: [...data.Eventos],
      objetos: [...data.Objetos],
      Recursos: [...data.Recursos],
      Dinosaurios: [...data.Dinosaurios],
    });
  }, [players, data]);

  // Verificar condición de final cuando solo quedan 2 jugadores del mismo equipo o 1 jugador
  useEffect(() => {
    if (activePlayers.length === 1) {
      // Solo queda 1 jugador
      if (finalCountdown === null) {
        setFinalCountdown(5); // iniciar contador de 5 turnos
      }
    } else if (activePlayers.length === 2) {
      const equipos = [...new Set(activePlayers.map((p) => p.equipo))];
      if (equipos.length === 1) {
        // Solo quedan 2 jugadores del mismo equipo
        if (finalCountdown === null) {
          setFinalCountdown(5); // iniciar contador de 5 turnos
        }
      }
    }
  }, [activePlayers, finalCountdown]);

  // Verificar game over
  useEffect(() => {
    if (finalCountdown === 0) {
      setGameOver(true);
    }
  }, [finalCountdown]);

  const jugadorActual = activePlayers[turnIndex % activePlayers.length];

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
    if (gameOver) return;

    const card = getRandomCard(type);
    if (card) {
      setCurrentCard(card);
    }
  };

  const siguienteTurno = () => {
    setCurrentCard(null);
    setTurnIndex(turnIndex + 1);

    // Decrementar contador final si está activo
    if (finalCountdown !== null && finalCountdown > 0) {
      setFinalCountdown(finalCountdown - 1);
    }
  };

  const eliminarJugador = (jugadorIndex) => {
    const nuevosJugadores = activePlayers.filter(
      (_, index) => index !== jugadorIndex
    );
    setActivePlayers(nuevosJugadores);

    // Ajustar el índice del turno si es necesario
    if (turnIndex >= nuevosJugadores.length) {
      setTurnIndex(0);
    }

    setShowPlayerList(false);
  };

  const reiniciarJuego = () => {
    setGameOver(false);
    setFinalCountdown(null);
    setTurnIndex(0);
    setActivePlayers(turnOrder);
    setCurrentCard(null);
    // Reiniciar cartas
    setRemainingCards({
      Eventos: [...data.Eventos],
      objetos: [...data.Objetos],
      Recursos: [...data.Recursos],
      Dinosaurios: [...data.Dinosaurios],
    });
  };

  if (gameOver) {
    return (
      <div className="game-container game-over">
        <h1>¡GAME OVER!</h1>
        <h2>Se agotaron los 5 turnos finales</h2>
        <p>Solo quedaban jugadores del mismo equipo</p>
        <button onClick={reiniciarJuego} className="restart-btn">
          Reiniciar Juego
        </button>
      </div>
    );
  }

  if (activePlayers.length === 0) {
    return (
      <div className="game-container">
        <h1>No quedan jugadores activos</h1>
        <button onClick={reiniciarJuego} className="restart-btn">
          Reiniciar Juego
        </button>
      </div>
    );
  }

  return (
    <div
      className="game-container"
      style={{
        backgroundColor:
          jugadorActual?.equipo === "Rojo" ? "#d35656ff" : "#5b83dfff",
      }}
    >
      {finalCountdown !== null && (
        <div className="final-countdown">
          <h2>⚠️ TURNOS RESTANTES: {finalCountdown} ⚠️</h2>
          <p>Solo quedan jugadores del mismo equipo</p>
        </div>
      )}

      <h1>EQUIPO: {jugadorActual?.equipo}</h1>
      <h2>Turno de: {jugadorActual?.nombre}</h2>
      <p>
        Usa los botones para revelar cartas de eventos, objetos, recursos o
        encuentros con dinosaurios.
      </p>

      {/* Botón para mostrar jugadores */}
      <button onClick={() => setShowPlayerList(true)} className="players-btn">
        Ver Jugadores ({activePlayers.length})
      </button>

      <div className="action-buttons">
        <button
          onClick={() => handleCardClick("Eventos")}
          className="action-button"
          disabled={gameOver}
        >
          Evento
          <img src={imgEvento} alt="" />
        </button>
        <button
          onClick={() => handleCardClick("Dinosaurios")}
          className="action-button"
          disabled={gameOver}
        >
          Dinosaurio
          <img src={imgDinosaurio} alt="" />
        </button>
        <button
          onClick={() => handleCardClick("objetos")}
          className="action-button"
          disabled={gameOver}
        >
          Objetos
          <img src={imgObjeto} alt="" />
        </button>
        <button
          onClick={() => handleCardClick("Recursos")}
          className="action-button"
          disabled={gameOver}
        >
          Recursos
          <img src={imgRecurso} alt="" />
        </button>
      </div>
      <div className="Cambiar-Turno">
        <button onClick={siguienteTurno} className="next-turn-btn">
          Siguiente Turno
        </button>
      </div>

      {/* Popup lista de jugadores */}
      {showPlayerList && (
        <div className="popup-overlay">
          <div className="popup-players">
            <h3>Jugadores Activos</h3>
            <div className="players-list">
              {activePlayers.map((jugador, index) => (
                <div key={index} className="player-item">
                  <span
                    className={`player-name teams-${jugador.equipo.toLowerCase()}`}
                  >
                    {jugador.nombre} ({jugador.equipo})
                  </span>
                  <button
                    onClick={() => eliminarJugador(index)}
                    className="eliminate-btn"
                  >
                    Eliminar
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowPlayerList(false)}
              className="close-players-btn"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Popup carta actual */}
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
