import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default App;
