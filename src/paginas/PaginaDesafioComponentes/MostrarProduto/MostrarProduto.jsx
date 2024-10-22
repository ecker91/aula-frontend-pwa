const MostrarProduto = (props) => {
  return (
    <div>
      <strong>Produto: </strong> <br />
      <strong>Nome: </strong> {props.produto.nome}
      <br />
      <strong>Preço: </strong> {props.produto.preco}
      <br />
      <strong>Qtd Estoque: </strong> {props.produto.estoque}
    </div>
  );
};

export default MostrarProduto;
