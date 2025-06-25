import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Contact from "./Components/Contact.jsx";
// import About from "./Components/About.jsx";
import Home from "./Components/Home.jsx";
import { lazy } from "react";

const About = lazy(() => import("./Components/About.jsx"));
const Contact = lazy(() =>
  import("./Components/Contact.jsx").then((module) => ({
    default: module.Contact,
  }))
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
