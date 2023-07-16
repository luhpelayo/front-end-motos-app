import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FetchMotos from '../api/fetchMotos';
import { MdLocationOn } from 'react-icons/md';
import { MdPerson } from 'react-icons/md';

import '../index.css';
import Menu from './Menu';

const BuscadorMotos = () => {
  const [query, setQuery] = useState('');
  const [resultados, setResultados] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

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
            {isLoading ? (
              <div className="text-center">
                <div className="spinner" />
              </div>
            ) : (
              <>
                <FetchMotos filtrarMotos={filtrarMotos} />
                {resultados.length > 0 ? (
                  <div className="mt-4">
                    {resultados.map((moto) => (
                      <div key={moto.id} className="bg-white rounded-lg shadow-lg p-4 mb-4 relative">
                        <h2 className="text-lg font-bold">{moto.marca}</h2>
                        <p className="text-sm text-gray-600">Placa: {moto.placa}</p>
                        <p className="text-sm text-gray-600">Modelo: {moto.modelo}</p>
                        <div className="absolute right-2 top-2">
                          <button className="flex items-center text-blue-500">
                          <Link to={`/ubicacion/${moto.id}`} className="flex items-center text-blue-500">
                            <MdLocationOn className="mr-1" />
                            Ubicación
                          </Link>
                          </button>
                          <Link to={`/motos/${moto.id}`} className="flex items-center text-blue-500">
                          <MdPerson className="mr-1" />
                           Detalles
                          </Link>
                        </div>
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


