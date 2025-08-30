import Brujula from "../assets/Brujula.png";
import { useNavigate } from "react-router-dom";
import "./Start.css";

const Start = () => {
  const Nav = useNavigate();
  const Go = () => {
    Nav("/Register");
  };
  return (
    <div className="start-container">
      <img src={Brujula} alt="Brújula" className="compass-image" />
      <h1 className="title">CREA UNA SALA</h1>
      <p className="description">
        ¡Forma tu equipo, enfrenta los retos y descubre si lograrás escapar!
      </p>
      <button onClick={Go} className="new-game-button">
        NEW GAME
      </button>
    </div>
  );
};

export default Start;
