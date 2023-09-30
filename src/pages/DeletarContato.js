import Cabecalho from "../components/cabecalho";
import Rodape from "../components/rodape";
import Botao from "../components/botao";
import Contato from "../components/contato";
import { Link } from "react-router-dom";

function DeletarContato() {
  return (
    <div className="aplicacao">
      <Cabecalho titulo="Deletar Contato" />
      <main>
        <div>Deseja mesmo deletar o contato abaixo:</div>
        <Contato />
      </main>
      <Rodape>
        <Botao titulo="Deletar" cor="vermelho" />
        <Link to="/">
          <Botao titulo="Cancelar" />
        </Link>
      </Rodape>
    </div>
  );
}

export default DeletarContato;
