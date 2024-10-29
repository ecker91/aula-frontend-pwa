import { Link } from "react-router-dom";
import Principal from "../../comum/componentes/Principal/Principal";

const PaginaListaClientes = () => {
  return (
    <Principal titulo="Lista de Clientes" voltarPara="/">
      <Link to="/cadastro-cliente">Novo</Link>
    </Principal>
  );
};

export default PaginaListaClientes;
