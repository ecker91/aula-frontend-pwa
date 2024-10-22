const MostrarNumerosPares = (props) => {
  let numeros = props.numeros.filter((numero) => numero % 2 == 0);
  return (
    <>
      <span>Os números pares são: </span>
      <ul>
        {numeros.map((numero) => (
          <li key={numero}>{numero}</li>
        ))}
      </ul>
    </>
  );
};

export default MostrarNumerosPares;
