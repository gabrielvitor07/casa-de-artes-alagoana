import "./Home.css";
import Header from "../../Components/Header";
import Footer from "../../components/Footer";


export default function Home() {
  return (
    <main className="pagina-inicial">
      <Header />

      {/* Seção principal */}
      <section className="conteudo-principal">
        {/* Texto */}
        <article className="destaque-texto">
          <h2>A arte feita à mão com afeto, tradição e valor de nossas peças.</h2>
          <p>
            Cada peça é única, resultado da dedicação e criatividade dos artesãos
            da Alagoana. Nosso objetivo é valorizar a cultura local, promovendo o
            comércio justo e sustentável.
          </p>
        </article>

        {/* Imagem */}
        <figure className="destaque-imagem">
          <img
            src="/artesanato.png"
            alt="imagem de artesanato"
          />
          <figcaption>Rede Casa de Artes Alagoana</figcaption>
        </figure>
      </section>

      {/* Navegação */}
      <nav className="navegacao">
        <a href="#quem-somos">Quem somos nós?</a>
        <a href="#oque-fazemos">O que nós fazemos?</a>
        <a
          href="https://pt.wikipedia.org/wiki/Artesanato"
          target="_blank"
          rel="link wiki"
        >
          Saiba mais sobre Artesanato
        </a>
      </nav>

      {/* Seção: Quem somos nós */}
      <section id="quem-somos" className="secao-informativa">
        <h2>Quem somos nós?</h2>
        <p>
          Somos a <strong>Casa de Artes alagoana</strong>, uma rede dedicada a
          preservar e valorizar a tradição artesanal da região. Nosso objetivo é
          dar visibilidade aos artesãos, promover inclusão social e fortalecer a
          cultura local.
        </p>
      </section>

      {/* Seção: O que nós fazemos */}
      <section id="oque-fazemos" className="secao-informativa">
        <h2>O que nós fazemos</h2>
        <p>
          Organizamos oficinas, eventos culturais e incentivamos a comercialização
          de peças artesanais. Atuamos como ponte entre quem produz e quem valoriza
          o artesanato, sempre com foco em sustentabilidade e comércio justo.
        </p>
      </section>

      {/* Galeria de fotos */}
      <section className="galeria">
        <img src="/foto1.png" alt="foto1" />
        <img src="/foto2.png" alt="foto2" />
      </section>
      
      <Footer />
    </main>
  );
}
