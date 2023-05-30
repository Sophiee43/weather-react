import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div>
      <h1>Weather Search Engine</h1>
      <App />
      <h2 id="show-weather"></h2>
    </div>
  </StrictMode>
);
