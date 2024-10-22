import { useState } from "react";
import "./BotaoContador.css";
import Principal from "../../comum/componentes/Principal/Principal";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";

const BotaoContador = () => {
  const [numero, setNumero] = useState(0);

  const incrementar = () => {
    setNumero(numero + 1);
  };
  const decrementar = () => {
    setNumero(numero - 1);
  };

  return (
    <Principal titulo="Botao Contador" voltarPara="/">
      <BotaoCustomizado aoClicar={decrementar} cor="primaria">
        <strong>-</strong>
      </BotaoCustomizado>
      <h2>O número é: {numero}</h2>
      <BotaoCustomizado aoClicar={incrementar} cor="primaria">
        <strong>+</strong>
      </BotaoCustomizado>
    </Principal>
  );
};

export default BotaoContador;
