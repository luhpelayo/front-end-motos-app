import React, { useState, useEffect } from 'react';

const FetchMotos = ({ filtrarMotos }) => {
  const [motos, setMotos] = useState([]);

  useEffect(() => {
    // Aquí puedes realizar la llamada a la API para obtener la lista completa de motos
    const obtenerMotos = async () => {
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

    obtenerMotos();
  }, []);

  useEffect(() => {
    filtrarMotos(motos); // Filtrar las motos al cambiar el estado de 'motos' o 'query'
  }, [motos, filtrarMotos]);

  return null; // No se muestra ningún contenido en el componente FetchMotos
};

export default FetchMotos;
