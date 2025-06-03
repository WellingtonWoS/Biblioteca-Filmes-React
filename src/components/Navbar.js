import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/filmes">Filmes</Link> | 
      <Link to="/filmes/novo">Cadastrar Filme</Link>
    </nav>
  );
}

export default Navbar;
