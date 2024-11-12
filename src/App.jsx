import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import BotaoContador from './paginas/BotaoContador/BotaoContador';
import ListaProdutos from './paginas/ListaProdutos/ListaProdutos';
import PaginaCadastroCliente from './paginas/PaginaCadastroCliente/PaginaCadastroCliente';
import PaginaInicial from './paginas/PaginaInicial/PaginaInicial';
import PaginaListaClientes from './paginas/PaginaListaClientes/PaginaListaClientes';
import PaginaListaTarefas from './paginas/PaginaListaTarefas/PaginaListaTarefas';
import PaginaNovoUsuario from './paginas/PaginaNovoUsuario/PaginaNovoUsuario';
import PaginaDesafioComponentes from './paginas/PaginaDesafioComponentes/PaginaDesafioComponentes';
import PaginaLogin from './paginas/PaginaLogin/PaginaLogin';
import VerificarAutenticacao from './comum/componentes/VerificarAutenticacao/VerificarAutenticacao';
import PaginaMeuPerfil from './paginas/PaginaMeuPerfil/PaginaMeuPerfil';

const router = createBrowserRouter([
  {
    path: 'novo-usuario',
    element: <PaginaNovoUsuario />,
  },
  {
    path: 'login',
    element: <PaginaLogin />,
  },
  {
    path: '',
    element: <VerificarAutenticacao />,
    children: [
      {
        path: '',
        element: <PaginaInicial />,
      },
      {
        path: 'lista-produtos',
        element: <ListaProdutos />,
      },
      {
        path: 'botao-contador',
        element: <BotaoContador />,
      },
      {
        path: 'desafio-componentes',
        element: <PaginaDesafioComponentes />,
      },
      {
        path: 'lista-tarefas',
        element: <PaginaListaTarefas />,
      },
      {
        path: 'lista-clientes',
        element: <PaginaListaClientes />,
      },
      {
        path: 'cadastro-cliente/:id?',
        element: <PaginaCadastroCliente />,
      },
      {
        path: 'meu-perfil',
        element: <PaginaMeuPerfil />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
