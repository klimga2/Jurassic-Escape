import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPlayer } from "../ToolKit/PlayersSlice/PlayersSlice";

const Register = () => {
  const dispatch = useDispatch();
  const players = useSelector((state) => state.Players.Players);

  const [Participantes, setParticipantes] = useState(4);
  const [nombre, setNombre] = useState("");
  const [equipo, setEquipo] = useState(""); // "Rojo" o "Azul"
  const [Ocultaar, setOcultaar] = useState(false);
  const [i, setI] = useState(2);
  const handleAdd = () => {
    if (nombre.trim() !== "" && equipo !== "") {
      dispatch(addPlayer({ nombre, equipo }));
      setNombre(""); // limpiar input
      setEquipo(""); // limpiar selección
      if (i <= Participantes) {
        setI(i + 1);
        console.log(i);
      } else setOcultaar(true);
    }
  };

  const HandleParticipantes = (e) => {
    setParticipantes(e.target.value);
  };
  return (
    <div>
      <h2>MIEMBROS</h2>
      <p>Numero de jugadores</p>
      <input
        type="Radio"
        name="Participantes"
        value={4}
        onChange={HandleParticipantes}
      />{" "}
      4
      <input
        type="Radio"
        name="Participantes"
        value={6}
        onChange={HandleParticipantes}
      />{" "}
      6
      <input
        type="text"
        placeholder="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      {Ocultaar ? (
        <p>Todos los Participantes ya estan</p>
      ) : (
        <div>
          <div>
            <button
              style={{
                backgroundColor: equipo === "Rojo" ? "red" : "#f88",
                color: "white",
                marginRight: "10px",
              }}
              onClick={() => setEquipo("Rojo")}
            >
              ROJO
            </button>

            <button
              style={{
                backgroundColor: equipo === "Azul" ? "blue" : "#88f",
                color: "white",
              }}
              onClick={() => setEquipo("Azul")}
            >
              AZUL
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
