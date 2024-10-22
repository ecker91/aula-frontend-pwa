import Principal from "../../comum/componentes/Principal/Principal";
import MostrarDivisao from "./MostrarDivisao/MostrarDivisao";
import MostrarMeuNomeCompleto from "./MostrarMeuNomeCompleto/MostrarMeuNomeCompleto";
import MostrarMultiplicacao from "./MostrarMultiplicacao/MostrarMultiplicacao";
import MostrarNumerosPares from "./MostrarNumerosPares/MostrarNumerosPares";
import MostrarProduto from "./MostrarProduto/MostrarProduto";
import MostrarSoma from "./MostrarSoma/MostrarSoma";
import MostrarSubtracao from "./MostrarSubtracao/MostrarSubtracao";

const PaginaDesafioComponentes = () => {
  return (
    <Principal titulo="Desafio de Componentes" voltarPara="/">
      <MostrarSoma num1={5} num2={3} />
      <br />
      <MostrarSubtracao num1={7} num2={2} />
      <br />
      <MostrarDivisao num1={15} num2={3} />
      <br />
      <MostrarMultiplicacao num1={3} num2={4} />
      <br />
      <MostrarMeuNomeCompleto nome="Fernando" sobrenome="Agostini Ecker" />
      <br />
      <MostrarProduto
        produto={{
          nome: 'TV Samsung 55"',
          preco: 2999.9,
          estoque: 345,
        }}
      />
      <br />
      <MostrarNumerosPares
        numeros={[1, 8, 13, 16, 21, 24, 29, 32, 37, 40, 45, 48]}
      />
    </Principal>
  );
};

export default PaginaDesafioComponentes;
