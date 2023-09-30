import Botao from "./botao";
import "./contato.css";
import { Link } from "react-router-dom";

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
            <Link to={"/editar-contato"}>
              <Botao icone="edit" />
            </Link>
          </div>
          <div>
            <Link to={"/deletar-contato"}>
              <Botao icone="delete" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default Contato;
