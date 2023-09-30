import { createContext, useContext, useState } from "react";

const ContatosContext = createContext({});

export const ContatosContextProvider = ({ children }) => {
  const [contatos, setContatos] = useState([]);

  const adicionarContato = (novoContato) => {
    novoContato.id = Number(contatos.length + 1);
    const novaListaDeContatos = contatos;
    novaListaDeContatos.push(novoContato);
    setContatos(novaListaDeContatos);
  };

  const deletarContato = (id) => {
    const novaListaDeContatos = contatos.filter(
      (c) => Number(c.id) !== Number(id)
    );
    setContatos(novaListaDeContatos);
  };

  const editarContato = (id, novosDados) => {
    const novaListaDeContatos = contatos.filter(
      (c) => Number(c.id) !== Number(id)
    );
    console.log(novaListaDeContatos);
    novaListaDeContatos.push(novosDados);
    console.log(novaListaDeContatos);
    setContatos(novaListaDeContatos);
  };

  const listarContato = (id) => {
    const contato = contatos.find((c) => c.id === Number(id));
    return contato;
  };

  return (
    <ContatosContext.Provider
      value={{
        contatos,
        adicionarContato,
        deletarContato,
        editarContato,
        listarContato,
      }}
    >
      {children}
    </ContatosContext.Provider>
  );
};

export const useContatosContext = () => useContext(ContatosContext);
