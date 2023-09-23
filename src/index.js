import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Contatos from "./Contatos";
import NovoContato from "./pages/NovoContato";
import EditarContato from "./pages/EditarContato";
import DeletarContato from "./pages/DeletarContato";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Contatos />
  </React.StrictMode>
);
