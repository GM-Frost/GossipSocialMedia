import React from "react";
import ReactDOM from "react-dom/client";

import "./global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/main/Home.tsx";
import Profile from "./pages/main/Profile.tsx";
import Login from "./pages/welcome/Login.tsx";
import Register from "./pages/welcome/Register.tsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
