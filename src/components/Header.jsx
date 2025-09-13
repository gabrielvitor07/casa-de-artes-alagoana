import "./Header.css";
import { FiSearch, FiShoppingBag, FiShoppingCart } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

export default function Header() {
  const { totalItems } = useCart();
  const location = useLocation();
  const isCartPage = location.pathname === '/carrinho';

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
        <Link to="/carrinho" className="botao-icone carrinho-icone" aria-label="Carrinho de compras">
          <FiShoppingCart />
          {totalItems > 0 && !isCartPage && (
            <span className="carrinho-badge">{totalItems}</span>
          )}
        </Link>
       
      </nav>
    </header>
  );
}
