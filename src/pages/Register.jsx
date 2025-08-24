import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPlayers } from "../ToolKit/PlayersSlice/PlayersSlice";
const Register = () => {
  const Dispatch = useDispatch();
  const Players = useSelector((state) => state.Players.Players);
  const [Nombre, setNombre] = useState();
  const [NumeroPlayers, setNumeroPlayers] = useState("");

  const Change = (e) => {
    setNombre(e.target.value);
  };
  const Add = () => {
    Dispatch(setPlayers(Nombre));
    console.log(Nombre);
  };
  return (
    <>
      <h1>Register</h1>

      <input type="text" value={Nombre} onChange={Change} />
      <button onClick={Add}>Agregar</button>
    </>
  );
};
export default Register;
