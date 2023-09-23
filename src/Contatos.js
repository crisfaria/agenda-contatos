import Cabecalho from "./components/cabecalho";
import Rodape from "./components/rodape";
import Botao from "./components/botao";
import Contato from "./components/contato";

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
        <Botao titulo="Novo Contato" />
      </Rodape>
    </div>
  );
}

export default Contatos;
