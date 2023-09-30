import Botao from "./botao";
import "./contato.css";
import { Link } from "react-router-dom";

const Contato = (props) => {
  return (
    <div className="contato">
      <div>
        <div>Nome: {props.nome}</div>
        <div>Endereço: {props.endereco}</div>
        <div>Email: {props.email}</div>
        <div>Telefone: {props.telefone}</div>
      </div>
      {props.comIcones && (
        <div>
          <div>
            <Link to={`/editar-contato/${props.id}`}>
              <Botao icone="edit" />
            </Link>
          </div>
          <div>
            <Link to={`/deletar-contato/${props.id}`}>
              <Botao icone="delete" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default Contato;
