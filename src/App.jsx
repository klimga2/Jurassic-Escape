import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./ToolKit/store";
import "./App.css";
import AppRouter from "./Routes/Routes";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
