import Header from "./Components/Header/Header";
import "./App.css";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./Context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <Outlet />
    </ThemeProvider>
  );
};

export default App;
