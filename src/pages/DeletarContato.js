import Cabecalho from "../components/cabecalho";
import Rodape from "../components/rodape";
import Botao from "../components/botao";
import Contato from "../components/contato";

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
        <Botao titulo="Cancelar" />
      </Rodape>
    </div>
  );
}

export default DeletarContato;
