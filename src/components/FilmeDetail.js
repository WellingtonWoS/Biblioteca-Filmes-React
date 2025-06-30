import { useParams } from 'react-router-dom';

function FilmeDetail({ filmes }) {
  const { id } = useParams();
  const filme = filmes.find(f => f.id === parseInt(id));

  if (!filme) {
    return <p>Filme não encontrado</p>;
  }

  return (
    <div className="card-filme-detail">
      <h1>🎞️ DETALHES DO FILME</h1>
      <h2>🎞️ Título Oficial: {filme.titulo} 🎞️</h2>
      <p>📅 Ano de Lançamento: {filme.ano}</p>
      <p>🎬 Diretor: {filme.diretor}</p>
      <p>🎭 Gênero: {filme.genero}</p>
      <p>🧒 Classificação Indicativa: {filme.classificacao}</p>
    </div>
  );
}

export default FilmeDetail; 
