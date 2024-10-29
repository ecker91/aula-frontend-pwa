import "./PaginaCadastroCliente.css";
import Principal from "../../comum/componentes/Principal/Principal";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import { useState } from "react";

const PaginaCadastroCliente = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");

  const cadastrar = () => {
    const novoCliente = { nome, email, celular, dataNascimento, cpf };
    console.log("Novo Cliente: ", novoCliente);
  };

  return (
    <Principal titulo="Novo Cliente" voltarPara="/lista-clientes">
      <div className="campo">
        <label>Nome</label>
        <input
          type="text"
          placeholder="Digite seu nome."
          value={nome}
          onChange={(e) => {
            setNome(e.target.value);
          }}
        />
      </div>
      <div className="campo">
        <label>Email</label>
        <input
          type="email"
          placeholder="Digite seu endereço de email."
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="campo">
        <label>Celular</label>
        <input
          type="tel"
          placeholder="Digite o número de seu celular."
          value={celular}
          onChange={(e) => {
            setCelular(e.target.value);
          }}
        />
      </div>
      <div className="campo">
        <label>Data de Nascimento</label>
        <input
          type="date"
          value={dataNascimento}
          onChange={(e) => {
            setDataNascimento(e.target.value);
          }}
        />
      </div>
      <div className="campo">
        <label>CPF</label>
        <input
          type="tel"
          placeholder="Digite seu CPF."
          value={cpf}
          onChange={(e) => {
            setCpf(e.target.value);
          }}
        />
      </div>

      <BotaoCustomizado cor="primaria" aoClicar={cadastrar}>
        Cadastrar
      </BotaoCustomizado>
    </Principal>
  );
};

export default PaginaCadastroCliente;
