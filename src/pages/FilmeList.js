import FilmeCard from '../components/FilmeCard';


function FilmeList({ filmes, onDelete }) {
  return (
    <div className="filme-list-container">
      <h2 className="titulo-lista">🎞️ Lista de Filmes</h2>
      {filmes.length === 0 ? (
        <p className="nenhum-filme">Nenhum filme cadastrado.</p>
      ) : (
        <div className="grid-filmes">
          {filmes.map(filme => (
            <FilmeCard key={filme.id} filme={filme} onDelete={onDelete} />
          ))}
        </div>
      )}
    </div>
  );
}

export default FilmeList;