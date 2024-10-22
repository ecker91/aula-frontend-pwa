const MostrarMultiplicacao = (props) => {
  return (
    <>
      A multiplicação de {props.num1} * {props.num2} é:{" "}
      {props.num1 * props.num2}
    </>
  );
};

export default MostrarMultiplicacao;
