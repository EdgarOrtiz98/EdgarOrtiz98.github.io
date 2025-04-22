import { Routes, Route } from 'react-router-dom';
import Home from './App.jsx';
import Proyectos from './Views/Proyectos.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Proyectos" element={<Proyectos />} />
    </Routes>
  );
};

export default AppRoutes;
