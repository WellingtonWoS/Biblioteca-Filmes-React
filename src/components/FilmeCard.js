import { useNavigate } from 'react-router-dom';

function FilmeCard({ filme, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="card-filme">
      <div className="card-topo">
        <h3>🎞️ {filme.titulo}</h3>
        <span className={`tag-classificacao classificacao-${filme.classificacao}`}>
          {filme.classificacao === 'Livre' ? 'Livre' : `${filme.classificacao}+`}
        </span>
      </div>
      <p><strong>📅 Ano:</strong> {filme.ano}</p>
      <p><strong>🎬 Diretor:</strong> {filme.diretor}</p>
      <p><strong>🎭 Gênero:</strong> {filme.genero}</p>

      <div className="card-botoes">
        <button onClick={() => navigate(`/filmes/${filme.id}`)} className="btn-card detalhes">Detalhes</button>
        <button onClick={() => navigate(`/filmes/${filme.id}/editar`)} className="btn-card editar">Editar</button>
        <button onClick={() => onDelete(filme.id)} className="btn-card excluir">Excluir</button>
      </div>
    </div>
  );
}

export default FilmeCard;
