import "./Produtos.css";
import Header from "../../Components/Header";
import Footer from "../../components/Footer";
import { FiShoppingCart } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { produtos } from "../../data/produtos.js";

export default function Produtos() {
  const { addToCart } = useCart();

  return (
    <main className="produtos">
      <Header />

      <section className="conteudo-produtos">
        <Link to="/" className="botao-voltar">
          <FaArrowLeft /> Voltar para a página inicial
        </Link>
        <h1>Nossos Produtos</h1>
        <p className="subtitulo">Conheça nossa coleção de artesanatos exclusivos</p>

        <div className="lista-produtos">
          {produtos.map((produto) => (
            <article key={produto.id} className="cartao-produto">
              <img src={produto.imagem} alt={produto.nome} />
              <div className="info-produto">
                <h3>{produto.nome}</h3>
                <p className="preco">{produto.preco}</p>
                <p className="parcelas">{produto.parcelas}</p>
                <p className="pix">{produto.pix}</p>
              </div>
              <button 
                className="botao-comprar"
                onClick={() => addToCart(produto)}
              >
                Adicionar ao Carrinho <FiShoppingCart />
              </button>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
