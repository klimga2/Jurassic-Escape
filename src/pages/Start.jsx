import Brujula from "../assets/Brujula.png";
import { useNavigate } from "react-router-dom";
import Button from "../components/Buttons";
const Start = () => {
  const Nav = useNavigate();
  const Go = () => {
    Nav("/Register");
  };
  return (
    <>
      <img src={Brujula} alt="" />
      <h1>CREA UNA SALA</h1>
      <p>
        ¡Forma tu equipo, enfrenta los retos y descubre si lograrás escapar!
      </p>

      <button onClick={Go}>NEW GAME</button>
    </>
  );
};
export default Start;
