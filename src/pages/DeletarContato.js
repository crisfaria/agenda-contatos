import Cabecalho from "../components/cabecalho";
import Rodape from "../components/rodape";
import Botao from "../components/botao";
import Contato from "../components/contato";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useContatosContext } from "../context/ContatosContext";

function DeletarContato() {
  const { userId } = useParams();
  const navigate = useNavigate();

  const { deletarContato } = useContatosContext();

  const excluirContato = () => {
    deletarContato(userId);
    navigate("/");
  };

  return (
    <div className="aplicacao">
      <Cabecalho titulo="Deletar Contato" />
      <main>
        <div>Deseja mesmo deletar o contato de ID: {userId} ?</div>
      </main>
      <Rodape>
        <Botao
          titulo="Deletar"
          cor="vermelho"
          onClick={() => {
            excluirContato();
          }}
        />
        <Link to="/">
          <Botao titulo="Cancelar" />
        </Link>
      </Rodape>
    </div>
  );
}

export default DeletarContato;
