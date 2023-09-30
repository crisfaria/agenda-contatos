import Cabecalho from "../components/cabecalho";
import Rodape from "../components/rodape";
import Botao from "../components/botao";
import { Link } from "react-router-dom";

function EditarContato() {
  return (
    <div className="aplicacao">
      <Cabecalho titulo="Editar Contato" />
      <main>
        <label for="nome">Nome Completo:</label>
        <input type="text" id="name"></input>
        <label for="endereco">Endereço:</label>
        <input type="text" id="endereco"></input>
        <label for="email">Email:</label>
        <input type="email" id="email"></input>
        <label for="telefone">Telefone:</label>
        <input type="text" id="telefone"></input>
      </main>
      <Rodape>
        <Botao titulo="Salvar" />
        <Link to="/">
          <Botao titulo="Cancelar" cor="vermelho" />
        </Link>
      </Rodape>
    </div>
  );
}

export default EditarContato;
