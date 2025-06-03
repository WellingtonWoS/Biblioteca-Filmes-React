import FilmeCard from '../components/FilmeCard';

function FilmeList({ filmes, onDelete }) {
  return (
    <div>
      <h2>Lista de Filmes</h2>
      {filmes.length === 0 ? (
        <p>Nenhum filme cadastrado.</p>
      ) : (
        filmes.map(filme => (
          <FilmeCard key={filme.id} filme={filme} onDelete={onDelete} />
        ))
      )}
    </div>
  );
}

export default FilmeList;
