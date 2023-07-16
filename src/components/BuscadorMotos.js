import React, { useState, useEffect } from 'react';
import FetchMotos from '../api/fetchMotos';
import '../index.css';
import Menu from './Menu';

const BuscadorMotos = () => {
  const [query, setQuery] = useState('');
  const [resultados, setResultados] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Estado para indicar si se está cargando

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

  useEffect(() => {
    // Simular una llamada a la API o carga de datos
    setTimeout(() => {
      setIsLoading(false); // Se establece el estado de carga a falso después de un tiempo simulado
    }, 2000);
  }, []); // El segundo argumento [] asegura que este efecto solo se ejecute una vez al montar el componente

  return (
    <div className="flex">
      <Menu />
      <div className="flex-1">
        <div className="bg-blue-100 min-h-screen py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl text-center font-bold mb-4">Listar Motos</h1>
            <div className="max-w-md mx-auto">
              <input
                type="text"
                placeholder="Buscar moto por placa o modelo"
                value={query}
                onChange={buscarMotos}
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
            {isLoading ? ( // Si isLoading es verdadero, muestra el círculo de progreso
              <div className="text-center">
                <div className="spinner" /> {/* Aquí puedes agregar tu componente de círculo de progreso */}
              </div>
            ) : (
              <>
                <FetchMotos filtrarMotos={filtrarMotos} />
                {resultados.length > 0 ? (
                  <div className="mt-4">
                    {resultados.map((moto) => (
                      <div
                        key={moto.id}
                        className="bg-white rounded-lg shadow-lg p-4 mb-4"
                      >
                        <h2 className="text-lg font-bold">{moto.marca}</h2>
                        <p className="text-sm text-gray-600">Placa: {moto.placa}</p>
                        <p className="text-sm text-gray-600">Modelo: {moto.modelo}</p>
                        {/* Render other details of the moto as needed */}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-gray-500">No se encontraron resultados</p>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuscadorMotos;

