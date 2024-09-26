import React, { useState } from 'react';

function Cadastro() {
  const [formData, setFormData] = useState({
    placa: '',
    proprietario: '',
    apartamento: '',
    bloco: '',
    modelo: '',
    cor: '',
    vaga: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Exibe os dados no console
    alert('Cadastro realizado com sucesso!');
  };

  return (
    <div>
      <h2>Cadastro de Vagas</h2>
      <form onSubmit={handleSubmit}>
        <label>Placa:</label>
        <input type="text" name="placa" value={formData.placa} onChange={handleChange} required /><br />

        <label>Proprietário:</label>
        <input type="text" name="proprietario" value={formData.proprietario} onChange={handleChange} required /><br />

        <label>Apartamento:</label>
        <input type="text" name="apartamento" value={formData.apartamento} onChange={handleChange} required /><br />

        <label>Bloco:</label>
        <input type="text" name="bloco" value={formData.bloco} onChange={handleChange} required /><br />

        <label>Modelo:</label>
        <input type="text" name="modelo" value={formData.modelo} onChange={handleChange} required /><br />

        <label>Cor:</label>
        <input type="text" name="cor" value={formData.cor} onChange={handleChange} required /><br />

        <label>Vaga:</label>
        <input type="text" name="vaga" value={formData.vaga} onChange={handleChange} required /><br />

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default Cadastro;
