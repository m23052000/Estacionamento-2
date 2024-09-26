import React, { useState } from 'react';

function Listagem() {
  // Vagas fictícias
  const [vagas] = useState([
    { placa: 'AAA-1234', proprietario: 'João Silva', apartamento: '101', bloco: 'A', modelo: 'Ford Fiesta', cor: 'Prata', vaga: '1' },
    { placa: 'BBB-5678', proprietario: 'Maria Oliveira', apartamento: '202', bloco: 'B', modelo: 'Chevrolet Onix', cor: 'Branco', vaga: '2' },
  ]);

  return (
    <div>
      <h2>Listagem de Vagas</h2>
      <table>
        <thead>
          <tr>
            <th>Placa</th>
            <th>Proprietário</th>
            <th>Apartamento</th>
            <th>Bloco</th>
            <th>Modelo</th>
            <th>Cor</th>
            <th>Vaga</th>
          </tr>
        </thead>
        <tbody>
          {vagas.map((vaga, index) => (
            <tr key={index}>
              <td>{vaga.placa}</td>
              <td>{vaga.proprietario}</td>
              <td>{vaga.apartamento}</td>
              <td>{vaga.bloco}</td>
              <td>{vaga.modelo}</td>
              <td>{vaga.cor}</td>
              <td>{vaga.vaga}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Listagem;
