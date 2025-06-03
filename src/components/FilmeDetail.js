import { useParams } from 'react-router-dom';

function FilmeDetail({ filmes }) {
  const { id } = useParams();
  const filme = filmes.find(f => f.id === parseInt(id));

  if (!filme) {
    return <p>Filme não encontrado</p>;
  }

  return (
    <div>
      <h2>{filme.titulo}</h2>
      <p>Ano: {filme.ano}</p>
      <p>Diretor: {filme.diretor}</p>
      <p>Gênero: {filme.genero}</p>
      <p>Classificação: {filme.classificacao}</p>
    </div>
  );
}

export default FilmeDetail;
