import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
import "flowbite/dist/flowbite.js";
import "./GlobalCSS/index.css";
import "./GlobalCSS/MediaQuary.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <App />
  // </StrictMode>
);
