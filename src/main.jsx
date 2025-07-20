import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Mainlayout from "./layouts/Mainlayout";
import AddCoffee from "./pages/AddCoffee";
import Home from "./pages/Home";
import CoffeeDetails from "./pages/CoffeeDetails";
import UpdateCoffee from "./pages/UpdateCoffee";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AuthProvider from "./context/AuthProvider";
import Users from "./pages/Users";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Mainlayout,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/coffees"),
        Component: Home,
        hydrateFallbackElement: <p>Loading...</p>,
      },
      {
        path: "coffee/add",
        Component: AddCoffee,
      },
      {
        path: "coffee/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: CoffeeDetails,
        hydrateFallbackElement: <p>Loading...</p>,
      },
      {
        path: "coffee/:id/edit",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: UpdateCoffee,
        hydrateFallbackElement: <p>Loading...</p>,
      },
      {
        path: "signin",
        Component: SignIn,
      },
      {
        path: "signup",
        Component: SignUp,
      },
      {
        path: "users",
        Component: Users,
        loader: () => fetch("http://localhost:3000/users"),
        hydrateFallbackElement: <p>Loading....</p>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
