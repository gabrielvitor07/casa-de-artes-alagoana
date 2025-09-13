import "./Pagamento.css";
import Header from "../../Components/Header";
import Footer from "../../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useCart } from "../../contexts/CartContext";

export default function Pagamento() {
  const navigate = useNavigate();
  const { getCartTotal, clearCart } = useCart();
  
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    telefone: "",
    email: "",
    numeroCartao: "",
    cvc: "",
    nomeProprietario: "",
    validade: "",
    cep: "",
    bairro: "",
    endereco: "",
    pontoReferencia: ""
  });

  const formatPrice = (value) => {
    return `R$ ${value.toFixed(2).replace('.', ',')}`;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    navigate('/sucesso');
  };

  const total = getCartTotal();
  const subtotal = total;
  const frete = 0;

  return (
    <main className="pagamento">
      <Header />

      <section className="conteudo-pagamento">
        <div className="pagamento-container">
          <div className="pagamento-header">
            <Link to="/carrinho" className="botao-voltar-pagamento">
              <FaArrowLeft /> Pagamento
            </Link>
          </div>

          <div className="pagamento-layout">
            <div className="formulario-pagamento">
              <div className="secao-pagamento">
                <h2>Informações de Pagamento</h2>
                
                <form id="payment-form" onSubmit={handleSubmit}>
                  <div className="linha-campos">
                    <div className="campo">
                      <label>Nome completo</label>
                      <input
                        type="text"
                        name="nomeCompleto"
                        value={formData.nomeCompleto}
                        onChange={handleChange}
                        placeholder="Digite seu nome completo"
                        required
                      />
                    </div>
                    <div className="campo">
                      <label>Número de Telefone</label>
                      <input
                        type="tel"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        placeholder="(00) 00000-0000"
                        required
                      />
                    </div>
                  </div>

                  <div className="campo-completo">
                    <label>E-mail</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Digite seu e-mail"
                      required
                    />
                  </div>

                  <div className="linha-campos">
                    <div className="campo">
                      <label>Número do Cartão</label>
                      <input
                        type="text"
                        name="numeroCartao"
                        value={formData.numeroCartao}
                        onChange={handleChange}
                        placeholder="0000 0000 0000 0000"
                        required
                      />
                    </div>
                    <div className="campo">
                      <label>CVC</label>
                      <input
                        type="text"
                        name="cvc"
                        value={formData.cvc}
                        onChange={handleChange}
                        placeholder="000"
                        maxLength="3"
                        required
                      />
                    </div>
                  </div>

                  <div className="linha-campos">
                    <div className="campo">
                      <label>Nome do Proprietário</label>
                      <input
                        type="text"
                        name="nomeProprietario"
                        value={formData.nomeProprietario}
                        onChange={handleChange}
                        placeholder="Nome no cartão"
                        required
                      />
                    </div>
                    <div className="campo">
                      <label>Validade</label>
                      <input
                        type="text"
                        name="validade"
                        value={formData.validade}
                        onChange={handleChange}
                        placeholder="MM/AA"
                        required
                      />
                    </div>
                  </div>

                  <div className="linha-campos">
                    <div className="campo">
                      <label>CEP</label>
                      <input
                        type="text"
                        name="cep"
                        value={formData.cep}
                        onChange={handleChange}
                        placeholder="00000-000"
                        required
                      />
                    </div>
                    <div className="campo">
                      <label>Bairro</label>
                      <input
                        type="text"
                        name="bairro"
                        value={formData.bairro}
                        onChange={handleChange}
                        placeholder="Digite o bairro"
                        required
                      />
                    </div>
                  </div>

                  <div className="linha-campos">
                    <div className="campo">
                      <label>Endereço</label>
                      <input
                        type="text"
                        name="endereco"
                        value={formData.endereco}
                        onChange={handleChange}
                        placeholder="Rua, Avenida, Nº"
                        required
                      />
                    </div>
                    <div className="campo">
                      <label>Ponto de referência</label>
                      <input
                        type="text"
                        name="pontoReferencia"
                        value={formData.pontoReferencia}
                        onChange={handleChange}
                        placeholder="Próximo ao..."
                      />
                    </div>
                  </div>

                </form>
              </div>
            </div>

            <div className="resumo-pagamento">
              <div className="resumo-final">
                <h3>Resumo Final</h3>
                <div className="linha-resumo">
                  <span>Produto:</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="linha-resumo">
                  <span>Frete:</span>
                  <span className="frete-gratis">Grátis</span>
                </div>
                <div className="linha-resumo">
                  <span>Subtotal:</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="linha-resumo total-final">
                  <span>Total:</span>
                  <span>{formatPrice(total)}</span>
                </div>
                <button type="submit" form="payment-form" className="botao-confirmar-compra">
                  Confirmar Compra
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
