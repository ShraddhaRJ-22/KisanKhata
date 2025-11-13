import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";
import "./i18n";
import { AppProvider } from "./context/AppContext"; // ✅ Import context provider

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* ✅ Wrap App with context provider */}
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
