import React, { useState, useEffect } from 'react';

const GetMotos = () => {
  const [motos, setMotos] = useState([]);

  useEffect(() => {
    fetchMotos();
  }, []);

  const fetchMotos = async () => {
    try {
      const response = await fetch('https://motos-app.onrender.com/api/moto/');
      if (response.ok) {
        const data = await response.json();
        setMotos(data);
      } else {
        throw new Error('Failed to fetch motos');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Lista de Motos</h1>
      {motos.map((moto) => (
        <div key={moto.id}>
          <h2>{moto.marca}</h2>
          <p>Modelo: {moto.modelo}</p>
          <p>Año: {moto.anio}</p>
          {/* Renderiza otros detalles de la moto según tus necesidades */}
        </div>
      ))}
    </div>
  );
};

export default GetMotos;
