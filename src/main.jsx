import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Mainlayout from "./layouts/Mainlayout";
import AddCoffee from "./components/AddCoffee";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Mainlayout,
    children: [
      { index: true, Component: Home },
      { path: "add-coffee", Component: AddCoffee },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
