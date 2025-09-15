import "./Carrinho.css";
import Header from "../../Components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../../contexts/CartContext";

export default function Carrinho() {
  const { items, removeFromCart, updateQuantity, getCartTotal, clearCart, addToCart } = useCart();

  const formatPrice = (price) => {
    return parseFloat(price.replace('R$ ', '').replace(',', '.'));
  };

  const formatCurrency = (value) => {
    return `R$ ${value.toFixed(2).replace('.', ',')}`;
  };

  // Produtos relacionados
  const produtosRelacionados = [
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
  ];

  return (
    <main className="carrinho">
      <Header />

      <section className="conteudo-carrinho">
        <div className="carrinho-layout">
          {items.length === 0 ? (
            <div className="carrinho-vazio-container">
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
          ) : (
            <>
              <div className="carrinho-principal">
                <div className="carrinho-secao">
                  <h1>Carrinho</h1>
                  <div className="lista-itens-carrinho">
                    {items.map((item) => (
                      <div key={item.id} className="item-carrinho">
                        <img src={item.imagem} alt={item.nome} className="imagem-item" />
                        <div className="info-item">
                          <h3>{item.nome}</h3>
                          <p className="preco-item">{item.preco}</p>
                          <div className="controles-quantidade">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="botao-quantidade"
                            >
                              <FaMinus />
                            </button>
                            <span className="quantidade">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="botao-quantidade"
                            >
                              <FaPlus />
                            </button>
                          </div>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="botao-remover"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="resumo-lateral">
                <div className="resumo-box">
                  <h2>Resumo:</h2>
                  <div className="resumo-linha">
                    <span>Valor:</span>
                    <span>{formatCurrency(getCartTotal())}</span>
                  </div>
                  <Link to="/pagamento" className="botao-finalizar-compra">
                    Finalizar Compra
                  </Link>
                  <p className="frete-info">Frete de pagamento</p>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Produtos Relacionados - só mostra quando há itens no carrinho */}
        {items.length > 0 && (
          <div className="produtos-relacionados">
            <h2>Produtos Relacionados</h2>
            <div className="lista-produtos-relacionados">
              {produtosRelacionados.map((produto) => (
                <div key={produto.id} className="produto-relacionado">
                  <img src={produto.imagem} alt={produto.nome} />
                  <div className="info-produto-relacionado">
                    <h3>{produto.nome}</h3>
                    <p className="preco">{produto.preco}</p>
                    <button 
                      className="botao-adicionar-relacionado"
                      onClick={() => addToCart(produto)}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
