import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';

import ListaProductosPagina from './paginas/ListaProductosPagina';
import SearchMoviePage from './pages/SearchMoviePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div> Home ... </div>} /> 
        <Route path="productos" element={<ListaProductosPagina />} />
        <Route path="peliculas" element={<SearchMoviePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
