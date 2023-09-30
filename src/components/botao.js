import "./botao.css";
const Botao = (props) => {
  return (
    <div
      className={`botao ${props.icone ? "botaoDeIcone" : ""} ${props.cor}`}
      onClick={props.onClick}
    >
      {props.titulo}{" "}
      {props.icone && (
        <img
          src={`/images/${props.icone}.png`}
          width={39}
          height={39}
          alt={`${props.icone}`}
        />
      )}
    </div>
  );
};
export default Botao;
