import "./Footer.css";
export default function Header() {
    return (
     <footer className="footer-container">
        
        {/* Apoio */}
      <section className="apoio">
        <h2>APOIO:</h2>
        <div className="logos-apoio">
          <img src="/maceio.png" alt="Prefeitura de Maceió" />
          <img src="/ministerio-cultura.png" alt="Ministério da Cultura" />
          <img src="/instituto-vale.png" alt="Instituto Cultural Vale" />
          <img src="/alagoas.png" alt="Governo de Alagoas" />
        </div>
      </section>

      <section className="rodape">
        <p>&copy; {new Date().getFullYear()} Casa de Artes Alagoana. Todos os direitos reservados.</p>
      </section>
     </footer>
    );
  }