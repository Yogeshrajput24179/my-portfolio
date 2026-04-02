import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom"; // ✅ IMPORTANT CHANGE
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>   {/* ✅ MUST USE THIS */}
      <App />
    </HashRouter>
  </React.StrictMode>
);