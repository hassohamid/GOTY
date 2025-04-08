import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ToastConfig from "./components/ToastConfig.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <ToastConfig />
  </StrictMode>
);
