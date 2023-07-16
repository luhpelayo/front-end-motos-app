import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BuscadorMotos from './components/BuscadorMotos';
import WelcomeView from './components/WelcomeView';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeView />} />
        <Route path="/BuscadorMotos" element={<BuscadorMotos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
