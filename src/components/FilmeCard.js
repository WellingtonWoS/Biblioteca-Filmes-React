import { useNavigate } from 'react-router-dom';

function FilmeCard({ filme, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="card">
      <h3>{filme.titulo}</h3>
      <p>Ano: {filme.ano}</p>
      <p>Diretor: {filme.diretor}</p>
      <p>Gênero: {filme.genero}</p>
      <p>Classificação: {filme.classificacao}</p>

      <button onClick={() => navigate(`/filmes/${filme.id}`)} className="btn-detalhes">Detalhes</button>
      <button onClick={() => navigate(`/filmes/${filme.id}/editar`)} className="btn-editar">Editar</button>
      <button onClick={() => onDelete(filme.id)} className="btn-excluir">Excluir</button>

    </div>
  );
}

export default FilmeCard; 
