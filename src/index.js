import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contatos from "./pages/Contatos";
import NovoContato from "./pages/NovoContato";
import EditarContato from "./pages/EditarContato";
import DeletarContato from "./pages/DeletarContato";
import { ContatosContextProvider } from "./context/ContatosContext";

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
    path: "/editar-contato/:userId",
    element: <EditarContato />,
  },
  {
    path: "/deletar-contato/:userId",
    element: <DeletarContato />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContatosContextProvider>
      <RouterProvider router={router} />
    </ContatosContextProvider>
  </React.StrictMode>
);
