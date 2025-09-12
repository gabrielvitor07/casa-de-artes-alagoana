import { FiArrowLeft } from "react-icons/fi";
import "./Pagamento.css";

export default function Pagamento() {
  return (
    <main className="">
      <div className="hero-pagamento">
      <Link to="/carrinho"> <button aria-label="Voltar"><FiArrowLeft /></button></Link>
        <div className="titulo-pagamento">
          <h1>Pagamento</h1>
        </div>
      </div>
      <div className="titulo-label"><FiArrowLeft /><h2>Informação de Pagamento</h2></div>
      
        <form action="">
          <label htmlFor="">Nome Completo</label>
          <input type="text" name="" id="" />
        </form>
      
    </main>
  );
}
