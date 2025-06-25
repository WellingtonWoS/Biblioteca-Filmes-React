import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import FilmeList from './pages/FilmeList';
import FilmeDetail from './components/FilmeDetail';
import FilmeForm from './components/FilmeForm';
import { useState } from 'react';
import './styles.css';

function App() {
  const [filmes, setFilmes] = useState([]);

  const addFilme = (filme) => {
    const novoFilme = { ...filme, id: Date.now() };
    setFilmes(prev => [...prev, novoFilme]);
    console.log('Filmes atualizados:', [...filmes, novoFilme]);
    console.log('Filmes atualizados:', novoFilme);
  };


  const updateFilme = (id, updatedFilme) => {
    setFilmes(filmes.map(f => f.id === id ? { ...updatedFilme, id } : f));
  };

  const deleteFilme = (id) => {
    setFilmes(filmes.filter(f => f.id !== id));
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filmes" element={<FilmeList filmes={filmes} onDelete={deleteFilme} />} />
        <Route path="/filmes/novo" element={<FilmeForm onSubmit={addFilme} />} />
        <Route path="/filmes/:id" element={<FilmeDetail filmes={filmes} />} />
        <Route path="/filmes/:id/editar" element={<FilmeForm filmes={filmes} onSubmit={updateFilme} />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
