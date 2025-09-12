import "./Header.css";
import { FiSearch, FiShoppingBag, FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="cabecalho">
      {/* Logo */}
      <div className="logo">
        <img src="/logo.png" alt="Casa de Artesanato" />
        <div className="texto-logo">
          <div className="linha-logo">CASA DE</div>
          <div className="linha-logo">ARTES</div>
          <div className="linha-logo">
            <span className="vermelho">ALA</span>
            <span className="cinza">GO</span>
            <span className="azul">ANA</span>
          </div>
        </div>
      </div>

      {/* Barra de busca */}
      <form className="barra-busca">
        <input type="text" placeholder="Buscar" />
        <button type="submit" aria-label="Buscar"><FiSearch /></button>
      </form>

      {/* Ícones */}
      <nav className="icones">
        <Link to="/produtos" className="botao-icone" aria-label="Nossos produtos">
          <FiShoppingBag />
        </Link>
        <Link to="/carrinho" className="botao-icone" aria-label="Carrinho de compras">
          <FiShoppingCart />
        </Link>
       
      </nav>
    </header>
  );
}
