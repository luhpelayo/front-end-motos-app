import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BuscadorMotos from './components/BuscadorMotos';
import WelcomeView from './components/WelcomeView';
import DetalleMoto from './components/DetalleMoto';
import UbicacionMoto from './components/UbicacionMoto';
import NotFound from './components/NotFound';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeView />} />
        <Route path="/BuscadorMotos" element={<BuscadorMotos />} />
        <Route path="/motos/:id" element={<DetalleMoto />} />
        <Route path="/ubicacion/:id" element={<UbicacionMoto />} />
        


        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
