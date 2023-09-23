import Botao from "./botao";
import "./contato.css";

const Contato = (props) => {
  return (
    <div className="contato">
      <div>
        <div>Nome:</div>
        <div>Endereço:</div>
        <div>Email:</div>
        <div>Telefone:</div>
      </div>
      {props.comIcones && (
        <div>
          <div>
            <Botao icone="edit" />
          </div>
          <div>
            <Botao icone="delete" />
          </div>
        </div>
      )}
    </div>
  );
};
export default Contato;
