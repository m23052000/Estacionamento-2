import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Cadastro from './components/Cadastro';
import Listagem from './components/Listagem';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/cadastro">Cadastro de Vagas</Link></li>
            <li><Link to="/listagem">Listagem de Vagas</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/listagem" element={<Listagem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
