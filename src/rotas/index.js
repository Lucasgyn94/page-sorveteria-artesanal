import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from '../paginas/Home';
import Sobre from '../paginas/Sobre';
import Sabores from '../paginas/Sabores';

const Rotas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sabores" element={<Sabores />} />
        <Route path="/Sobre" element={<Sobre />} />
      </Routes>
    </Router>
  );
}

export default Rotas;