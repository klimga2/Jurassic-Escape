import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPlayer } from "../ToolKit/PlayersSlice/PlayersSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const Nav = useNavigate();
  const players = useSelector((state) => state.Players.Players);

  const [participantes, setParticipantes] = useState(null);
  const [nombre, setNombre] = useState("");
  const [equipo, setEquipo] = useState(""); // "Rojo" o "Azul"
  const [ocultar, setOcultar] = useState(false);

  // contadores de equipos
  const countRojo = players.filter((p) => p.equipo === "Rojo").length;
  const countAzul = players.filter((p) => p.equipo === "Azul").length;

  // máximo permitido en cada equipo
  const maxPorEquipo = participantes ? participantes / 2 : 0;

  const handleAdd = () => {
    if (nombre.trim() !== "" && equipo !== "") {
      // validación: no dejar pasar más del límite por equipo
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
    <div>
      <h2>MIEMBROS</h2>
      <p>Numero de jugadores: {participantes || "-"}</p>

      {ocultar ? (
        <div>
          <p>Todos los Participantes ya están</p>
          <button onClick={go}>Ir a la partida</button>
        </div>
      ) : (
        <div>
          <div>
            <input
              type="radio"
              name="Participantes"
              value={4}
              onClick={handleParticipantes}
            />
            <label>4</label>
            <input
              type="radio"
              name="Participantes"
              value={6}
              onClick={handleParticipantes}
            />
            <label>6</label>
          </div>

          <input
            type="text"
            placeholder="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          {/* botones siempre visibles */}
          <div>
            <button
              style={{
                backgroundColor: equipo === "Rojo" ? "red" : "#f88",
                color: "white",
                marginRight: "10px",
              }}
              onClick={() => setEquipo("Rojo")}
            >
              ROJO ({countRojo}/{maxPorEquipo})
            </button>

            <button
              style={{
                backgroundColor: equipo === "Azul" ? "blue" : "#88f",
                color: "white",
              }}
              onClick={() => setEquipo("Azul")}
            >
              AZUL ({countAzul}/{maxPorEquipo})
            </button>
          </div>

          <button onClick={handleAdd}>+</button>
        </div>
      )}

      <h3>Jugadores</h3>
      <ul>
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
