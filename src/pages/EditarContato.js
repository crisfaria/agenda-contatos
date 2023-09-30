import Cabecalho from "../components/cabecalho";
import Rodape from "../components/rodape";
import Botao from "../components/botao";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { useContatosContext } from "../context/ContatosContext";

function EditarContato() {
  const { userId } = useParams();
  const { editarContato, listarContato } = useContatosContext();

  const [contato, setContato] = useState();

  const nomeRef = useRef();
  const enderecoRef = useRef();
  const emailRef = useRef();
  const telefoneRef = useRef();

  const navigate = useNavigate();

  const atualizarContato = () => {
    editarContato(userId, {
      id: Number(userId),
      nome: nomeRef.current.value,
      endereco: enderecoRef.current.value,
      email: emailRef.current.value,
      telefone: telefoneRef.current.value,
    });
    navigate("/");
  };

  useEffect(() => {
    setContato(listarContato(userId));
  }, [userId, listarContato]);

  return (
    <div className="aplicacao">
      <Cabecalho titulo="Editar Contato" />
      <main>
        <label htmlFor="nome">Nome Completo:</label>
        <input
          type="text"
          id="nome"
          ref={nomeRef}
          defaultValue={contato?.nome}
        ></input>
        <label htmlFor="endereco">Endereço:</label>
        <input
          type="text"
          id="endereco"
          ref={enderecoRef}
          defaultValue={contato?.endereco}
        ></input>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          ref={emailRef}
          defaultValue={contato?.email}
        ></input>
        <label htmlFor="telefone">Telefone:</label>
        <input
          type="text"
          id="telefone"
          ref={telefoneRef}
          defaultValue={contato?.telefone}
        ></input>
      </main>
      <Rodape>
        <Botao titulo="Salvar" onClick={() => atualizarContato()} />
        <Link to="/">
          <Botao titulo="Cancelar" cor="vermelho" />
        </Link>
      </Rodape>
    </div>
  );
}

export default EditarContato;
