import { Link } from "react-router-dom";
import "./Principal.css";
import { SlActionUndo } from "react-icons/sl";

function Principal({ voltarPara, titulo, children }) {
  return (
    <main className="principal_root">
      <div className="principal_titulo">
        {voltarPara && (
          <Link to={voltarPara}>
            <SlActionUndo size={24} color="#3f50b5" />
          </Link>
        )}
        <h1>{titulo}</h1>
      </div>
      {children}
    </main>
  );
}

export default Principal;
