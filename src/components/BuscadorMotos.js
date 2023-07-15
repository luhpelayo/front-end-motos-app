import React, { useState } from 'react';
import FetchMotos from '../api/fetchMotos'; // Asegúrate de utilizar el nombre de archivo y ruta correctos

const BuscadorMotos = () => {
  const [query, setQuery] = useState('');
  const [resultados, setResultados] = useState([]);

  const buscarMotos = (e) => {
    const searchText = e.target.value.toLowerCase();
    setQuery(searchText);
  };

  const filtrarMotos = (motos) => {
    const resultadosFiltrados = motos.filter((moto) => {
      return (
        moto.marca.toLowerCase().includes(query) ||
        moto.placa.toLowerCase().includes(query)
      );
    });

    setResultados(resultadosFiltrados);
  };

  return (
    <div>
      <h1>List of Motos</h1>
      <input
        type="text"
        placeholder="Search by brand or plate"
        value={query}
        onChange={buscarMotos}
      />
      <FetchMotos filtrarMotos={filtrarMotos} />
      {resultados.length > 0 ? (
        resultados.map((moto) => (
          <div key={moto.id}>
            <h2>{moto.marca}</h2>
            <p>Placa: {moto.placa}</p>
            <p>Modelo: {moto.modelo}</p>
            {/* Render other details of the moto as needed */}
          </div>
        ))
      ) : (
        <p>No se encontraron resultados</p>
      )}
    </div>
  );
};

export default BuscadorMotos;
