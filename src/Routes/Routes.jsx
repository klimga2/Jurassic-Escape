import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "../pages/Start";
import Register from "../pages/Register";
import Game from "../pages/Game";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
