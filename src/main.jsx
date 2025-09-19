import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "react-hot-toast";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/RouterApp">
      <App />
      <Toaster/>
    </BrowserRouter>
  </React.StrictMode>
);