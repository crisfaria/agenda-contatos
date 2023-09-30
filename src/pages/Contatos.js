import Cabecalho from "../components/cabecalho";
import Rodape from "../components/rodape";
import Botao from "../components/botao";
import Contato from "../components/contato";
import { Link } from "react-router-dom";

function Contatos() {
  return (
    <div className="aplicacao">
      <Cabecalho titulo="Agenda de Contatos" />
      <main>
        <Contato comIcones={true} />
        <Contato comIcones={true} />
        <Contato comIcones={true} />
        <Contato comIcones={true} />
        <Contato comIcones={true} />
        <Contato comIcones={true} />
        <Contato comIcones={true} />
        <Contato comIcones={true} />
        <Contato comIcones={true} />
        <Contato comIcones={true} />
        <Contato comIcones={true} />
        <Contato comIcones={true} />
      </main>
      <Rodape>
        <Link to="/novo-contato">
          <Botao titulo="Novo Contato" />
        </Link>
      </Rodape>
    </div>
  );
}

export default Contatos;
