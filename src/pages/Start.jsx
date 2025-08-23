import { useNavigate } from "react-router-dom";
import Button from "../components/Buttons";
const Start = () => {
  const Nav = useNavigate();
  const Go = () => {
    Nav("/Register");
  };
  return (
    <>
      <h1>Start</h1>
      <button onClick={Go}>Registro</button>
    </>
  );
};
export default Start;
