import React, { useState } from 'react';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-1/4 bg-gray-200 p-4">
      <h2 className="text-2xl font-bold mb-4">Menu</h2>
      <div className="sm:hidden">
        {/* Mostrar el icono de las tres rayitas solo en dispositivos móviles */}
        <button
          onClick={toggleMenu}
          type="button"
          className="block text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <ul
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } mt-4 sm:mt-0 sm:block`}
      >
        {/* Mostrar la lista de elementos del menú en dispositivos más grandes */}
        <li className="py-2">Inicio</li>
        <li className="py-2">Rastrear</li>
        <li className="py-2">Qr</li>
        <li className="py-2">Salir</li>
      </ul>
    </div>
  );
};

export default Menu;
