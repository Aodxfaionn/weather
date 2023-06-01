import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./styles/index.scss";
import App from "./App";
import { ThemeProvider } from "./provider/ThemeProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
