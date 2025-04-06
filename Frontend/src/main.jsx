import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ToastConfig from "./components/ToastConfig.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <ToastConfig />
  </StrictMode>
);
