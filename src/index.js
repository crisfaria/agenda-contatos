import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contatos from "./pages/Contatos";
import NovoContato from "./pages/NovoContato";
import EditarContato from "./pages/EditarContato";
import DeletarContato from "./pages/DeletarContato";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Contatos />,
  },
  {
    path: "/novo-contato",
    element: <NovoContato />,
  },
  {
    path: "/editar-contato",
    element: <EditarContato />,
  },
  {
    path: "/deletar-contato",
    element: <DeletarContato />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
