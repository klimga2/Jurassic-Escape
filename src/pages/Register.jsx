import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPlayer } from "../ToolKit/PlayersSlice/PlayersSlice";
import { useNavigate } from "react-router-dom";
import "./Register.css"; // importa tu CSS aquí

const Register = () => {
  const dispatch = useDispatch();
  const Nav = useNavigate();
  const players = useSelector((state) => state.Players.Players);

  const [participantes, setParticipantes] = useState(null);
  const [nombre, setNombre] = useState("");
  const [equipo, setEquipo] = useState("");
  const [ocultar, setOcultar] = useState(false);

  const countRojo = players.filter((p) => p.equipo === "Rojo").length;
  const countAzul = players.filter((p) => p.equipo === "Azul").length;
  const maxPorEquipo = participantes ? participantes / 2 : 0;

  const handleAdd = () => {
    if (nombre.trim() !== "" && equipo !== "") {
      if (equipo === "Rojo" && countRojo >= maxPorEquipo) {
        alert("El equipo ROJO ya está completo");
        return;
      }
      if (equipo === "Azul" && countAzul >= maxPorEquipo) {
        alert("El equipo AZUL ya está completo");
        return;
      }
      dispatch(addPlayer({ nombre, equipo }));
      setNombre("");
      setEquipo("");
      if (players.length + 1 >= participantes) {
        setOcultar(true);
      }
    }
  };

  const handleParticipantes = (e) => {
    setParticipantes(Number(e.target.value));
  };

  const go = () => {
    Nav("/Game");
  };

  return (
    <div className="register-container">
      <h2 className="register-title">MIEMBROS</h2>
      <p className="register-subtitle">
        Una vez todos estén listos, la app dividirá aleatoriamente a los
        equipos.
      </p>

      <div className="participantes">
        <p>Número de jugadores: {participantes || "-"}</p>
        <div className="participantes-options">
          <label>
            <input
              type="radio"
              name="Participantes"
              value={4}
              onClick={handleParticipantes}
            />
            4
          </label>
          <label>
            <input
              type="radio"
              name="Participantes"
              value={6}
              onClick={handleParticipantes}
            />
            6
          </label>
        </div>
      </div>

      {!ocultar ? (
        <>
          <span className="section-label">Miembros</span>
          <input
            type="text"
            className="register-input"
            placeholder="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <div className="teams">
            <button
              className={`team-button team-rojo ${
                equipo === "Rojo" ? "active" : ""
              }`}
              onClick={() => setEquipo("Rojo")}
            >
              ROJO ({countRojo}/{maxPorEquipo})
            </button>
            <button
              className={`team-button team-azul ${
                equipo === "Azul" ? "active" : ""
              }`}
              onClick={() => setEquipo("Azul")}
            >
              AZUL ({countAzul}/{maxPorEquipo})
            </button>
          </div>

          <button className="add-button" onClick={handleAdd}>
            +
          </button>
        </>
      ) : (
        <div>
          <p>Todos los Participantes ya están</p>
          <button className="allset-button" onClick={go}>
            ALL SET
          </button>
        </div>
      )}

      <span className="section-label">Equipos</span>
      <ul className="players-list">
        {players.map((p, i) => (
          <li key={i}>
            {p.nombre} - <b>{p.equipo}</b>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Register;
