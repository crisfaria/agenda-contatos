import Cabecalho from "../components/cabecalho";
import Rodape from "../components/rodape";
import Botao from "../components/botao";
import { Link, useNavigate } from "react-router-dom";
import { useContatosContext } from "../context/ContatosContext";
import { useRef } from "react";

function NovoContato() {
  const { adicionarContato } = useContatosContext();

  const nomeRef = useRef();
  const enderecoRef = useRef();
  const emailRef = useRef();
  const telefoneRef = useRef();

  const navigate = useNavigate();

  const salvarContato = () => {
    adicionarContato({
      nome: nomeRef.current.value,
      endereco: enderecoRef.current.value,
      email: emailRef.current.value,
      telefone: telefoneRef.current.value,
    });
    navigate("/");
  };

  return (
    <div className="aplicacao">
      <Cabecalho titulo="Novo Contato" />
      <main>
        <label htmlFor="nome">Nome Completo:</label>
        <input type="text" id="nome" ref={nomeRef}></input>
        <label htmlFor="endereco">Endereço:</label>
        <input type="text" id="endereco" ref={enderecoRef}></input>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" ref={emailRef}></input>
        <label htmlFor="telefone">Telefone:</label>
        <input type="text" id="telefone" ref={telefoneRef}></input>
      </main>

      <Rodape>
        <Botao titulo="Salvar" onClick={() => salvarContato()} />
        <Link to="/">
          <Botao titulo="Cancelar" cor="vermelho" />
        </Link>
      </Rodape>
    </div>
  );
}

export default NovoContato;
