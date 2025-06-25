import { useNavigate } from 'react-router-dom';
import pageHomeImage from '../assets/homePage.png';

function Home() {

  const navigate = useNavigate();

  return (
    <div>
      <h1><div className="card-home">Bem-vindo à Biblioteca de Filmes Brasileiros</div></h1>
      <p><div className="card-home-intro">Explore nossa coleção de filmes nacionais!</div></p>

      <div className="home-valor-container">
        <div className="imagem-lado">
          <img src={pageHomeImage} alt="Cinema Nacional" className="imagem-cinema" />
        </div>

        <div className="texto-lado">
          <h1 className="titulo-valor">🎬 O Valor Histórico e Cultural do Cinema Nacional</h1>
          <p className="texto-valor">
            O cinema nacional é uma das expressões mais autênticas da identidade brasileira.
            Muito além do entretenimento, ele cumpre um papel fundamental na preservação da
            memória coletiva, na valorização da cultura popular e na crítica social.
          </p>
          <button className="btn-explorar" onClick={() => navigate('/filmes')}>
            Explorar Filmes
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
