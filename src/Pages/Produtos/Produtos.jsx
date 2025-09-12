import "./Produtos.css";
import Header from "../../Components/Header";
import Footer from "../../components/Footer";
import { FiShoppingCart } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Produtos() {
  const produtos = [
    {
      id: 1,
      nome: "São Francisco Gordinho de Cerâmica Leonildo",
      preco: "R$ 129,00",
      parcelas: "2x de R$ 64,50",
      pix: "R$ 122,55 no Pix",
      imagem: "/produtos/produto1.jpg",
    },
    {
      id: 2,
      nome: "Cestaria Tradicional",
      preco: "R$ 129,00",
      parcelas: "2x de R$ 64,50",
      pix: "R$ 122,55 no Pix",
      imagem: "/produtos/produto2.jpg",
    },
    {
      id: 3,
      nome: "Pote Decorado Artesanal",
      preco: "R$ 129,00",
      parcelas: "2x de R$ 64,50",
      pix: "R$ 122,55 no Pix",
      imagem: "/produtos/produto3.jpg",
    },
    {
      id: 4,
      nome: "Vaso Colorido Artesanal",
      preco: "R$ 129,00",
      parcelas: "2x de R$ 64,50",
      pix: "R$ 122,55 no Pix",
      imagem: "/produtos/produto4.jpg",
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
              <button className="botao-comprar">
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
