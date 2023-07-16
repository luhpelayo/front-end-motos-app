import React from 'react';
import { Link } from 'react-router-dom';

const WelcomeView = () => {
  return (
    <div className="bg-red-500 h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-white mb-4">¡Bienvenido a Honda!</h1>
      <Link to="/BuscadorMotos">
        <button className="bg-white text-black px-4 py-2 rounded">
          Comenzar
        </button>
      </Link>
    </div>
  );
};

export default WelcomeView;
