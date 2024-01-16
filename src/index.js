import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { appRouter } from "./utils/routes";
import FallBack from "./components/FallBack";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} fallback={<FallBack />} />
  </React.StrictMode>
);
