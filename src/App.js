import React from 'react';
//import Motos from './components/BuscadorMotos';
//import Motos from './api/fetchMotos';
import BuscadorMotos from './components/BuscadorMotos';
import WelcomeView from './components/WelcomeView';
import Menu from './components/Menu';
import 'tailwindcss/tailwind.css';

function App() {
  return (
    <div className="flex">
      <Menu />
      <div className="w-3/4 p-4">
        
        <WelcomeView />
      </div>
    </div>
  );
};
export default App;

