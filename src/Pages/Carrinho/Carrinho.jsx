import "./Carrinho.css";
import Header from "../../Components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

export default function Carrinho() {
  // Inicialmente, o carrinho está vazio
  const [carrinho, setCarrinho] = useState([]);

  return (
    <main className="carrinho">
      <Header />

      <section className="conteudo-carrinho">
        <Link to="/" className="botao-voltar">
          <FaArrowLeft /> Voltar para a página inicial
        </Link>
        
        <div className="carrinho-container">
          <div className="carrinho-vazio">
            <div className="icone-container">
              <FiShoppingCart size={80} className="icone-carrinho-vazio" />
            </div>
            <h2>Seu carrinho está vazio no momento :(</h2>
            <p className="mensagem">Que tal adicionar alguns itens?</p>
            <Link to="/produtos" className="botao-ir-para-produtos">
              Explorar Produtos
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
