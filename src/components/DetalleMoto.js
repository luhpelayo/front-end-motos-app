import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import { useLocation, useParams } from 'react-router-dom';

const DetalleMoto = () => {
  const [moto, setMoto] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const { id } = useParams(); // Obtén el ID de la moto desde los parámetros de la URL
  const location = useLocation(); // Obtiene la ubicación actual de la página

  useEffect(() => {
    const obtenerDetalleMoto = async () => {
      try {
        const response = await fetch(`https://motos-app.onrender.com/api/moto/${id}`);
        const data = await response.json();
        setMoto(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    obtenerDetalleMoto();
  }, [id]);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (!moto) {
    return <div>No se encontraron detalles de la moto</div>;
  }

  return (
    <div className="flex">
      <Menu />
      <div className="flex-1">
        <div className="bg-blue-100 min-h-screen py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl text-center font-bold mb-4">Detalle de la Moto</h1>
            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-4 mb-4">
              <h2 className="text-lg font-bold">{moto.marca}</h2>
              <p className="text-sm text-gray-600">Placa: {moto.placa}</p>
              <p className="text-sm text-gray-600">Modelo: {moto.modelo}</p>
              {/* Agrega el resto de los detalles de la moto que quieras mostrar */}
            </div>
  
            <p className="text-center text-gray-500">URL actual: {location.pathname}</p>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default DetalleMoto;


