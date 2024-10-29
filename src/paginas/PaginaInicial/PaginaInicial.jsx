import { useNavigate } from "react-router-dom";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../comum/componentes/Principal/Principal";
import "./PaginaInicial.css";

const PaginaInicial = () => {
  const navigate = useNavigate();

  return (
    <Principal titulo="Página Inicial">
      <BotaoCustomizado
        cor="primaria"
        aoClicar={() => navigate("/lista-produtos")}
      >
        Lista de Produtos
      </BotaoCustomizado>
      <BotaoCustomizado
        cor="primaria"
        aoClicar={() => navigate("/botao-contador")}
      >
        Botão Contador
      </BotaoCustomizado>
      <BotaoCustomizado
        cor="secundaria"
        aoClicar={() => navigate("/desafio-componentes")}
      >
        Desafio Componentes
      </BotaoCustomizado>
      <BotaoCustomizado
        cor="secundaria"
        aoClicar={() => navigate("/lista-clientes")}
      >
        Lista de Clientes
      </BotaoCustomizado>
    </Principal>
  );
};

export default PaginaInicial;
