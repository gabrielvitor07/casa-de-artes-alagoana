import "./Sucesso.css";
import Header from "../../Components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaHome, FaShoppingBag } from "react-icons/fa";

export default function Sucesso() {
  return (
    <main className="sucesso">
      <Header />

      <section className="conteudo-sucesso">
        <div className="sucesso-container">
          <div className="sucesso-card">
            <div className="icone-sucesso">
              <FaCheckCircle />
            </div>
            
            <h1>Compra Realizada com Sucesso!</h1>
            
            <p className="mensagem-sucesso">
              Parabéns! Seu pedido foi processado com sucesso. 
              Em breve você receberá um e-mail com os detalhes da compra 
              e informações sobre a entrega.
            </p>
            
            
            <div className="acoes-sucesso">
              <Link to="/" className="botao-home">
                <FaHome /> Voltar ao Início
              </Link>
              <Link to="/produtos" className="botao-produtos">
                <FaShoppingBag /> Continuar Comprando
              </Link>
            </div>
            
            <div className="agradecimento">
              <p>Obrigado por escolher a <strong>Casa de Artes Alagoana</strong>!</p>
              <p>Esperamos que você tenha uma ótima experiência com nossos produtos artesanais.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
