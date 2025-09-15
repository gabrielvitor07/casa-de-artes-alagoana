import "./Produtos.css";
import Header from "../../Components/Header";
import Footer from "../../components/Footer";
import { FiShoppingCart } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";

export default function Produtos() {
  const { addToCart } = useCart();
  
  const produtos = [
    {
      id: 1,
      nome: "São Francisco Gordinho de Cerâmica Leonildo",
      preco: "R$ 199,00",
      parcelas: "3x de R$ 66,33",
      pix: "R$ 189,00 no Pix",
      imagem: "/produto-01.png",
    },
    {
      id: 2,
      nome: "Cestaria Tradicional",
      preco: "R$ 129,00",
      parcelas: "2x de R$ 64,50",
      pix: "R$ 122,55 no Pix",
      imagem: "/produto-02.png",
    },
    {
      id: 3,
      nome: "Pote Decorado Artesanal",
      preco: "R$ 129,00",
      parcelas: "2x de R$ 64,50",
      pix: "R$ 122,55 no Pix",
      imagem: "/produto-03.png",
    },
    {
      id: 4,
      nome: "Vaso Colorido Artesanal",
      preco: "R$ 129,00",
      parcelas: "2x de R$ 64,50",
      pix: "R$ 122,55 no Pix",
      imagem: "/produto-04.png",
    },
   
  ];

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
