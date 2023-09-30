import Cabecalho from "../components/cabecalho";
import Rodape from "../components/rodape";
import Botao from "../components/botao";
import Contato from "../components/contato";
import { Link } from "react-router-dom";
import { useContatosContext } from "../context/ContatosContext";

function Contatos() {
  const { contatos } = useContatosContext();

  return (
    <div className="aplicacao">
      <Cabecalho titulo="Agenda de Contatos" />
      <main>
        {contatos.length === 0 && <div>Nenhum contato encontrado.</div>}
        {contatos.map((c) => (
          <Contato
            key={c.id}
            comIcones={true}
            id={c.id}
            nome={c.nome}
            email={c.email}
            telefone={c.telefone}
            endereco={c.endereco}
          />
        ))}
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
