import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function FilmeForm({ filmes, onSubmit }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const filmeExistente = filmes ? filmes.find(f => f.id === parseInt(id)) : null;

  const [filme, setFilme] = useState(
    filmeExistente || {
      titulo: '',
      ano: '',
      diretor: '',
      genero: '',
      classificacao: ''
    }
  );

  useEffect(() => {
    if (filmeExistente) {
      setFilme(filmeExistente);
    }
  }, [filmeExistente]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilme({ ...filme, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      onSubmit(parseInt(id), filme);
    } else {
      onSubmit(filme);
    }
    navigate('/filmes');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="titulo" value={filme.titulo} onChange={handleChange} placeholder="Título" />
      <input name="ano" value={filme.ano} onChange={handleChange} placeholder="Ano" />
      <input name="diretor" value={filme.diretor} onChange={handleChange} placeholder="Diretor" />
      <input name="genero" value={filme.genero} onChange={handleChange} placeholder="Gênero" />
      <label>
        Classificação Indicativa:
        <select name="classificacao" value={filme.classificacao} onChange={handleChange}>
          <option value="Livre">Livre</option>
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="14">14</option>
          <option value="16">16</option>
          <option value="18">18</option>
        </select>
      </label>
      <span className={`classificacao-tag classificacao-${filme.classificacao}`}>
        {filme.classificacao === 'Livre' ? 'Livre' : `${filme.classificacao}+`}
      </span>
      <button type="submit" className="btn-editar">
        {id ? 'Atualizar' : 'Cadastrar'}
      </button>

    </form>
  );
}

export default FilmeForm; 
