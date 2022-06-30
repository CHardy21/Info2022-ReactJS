import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';

import ListaProductosPagina from './paginas/ListaProductosPagina';
import SearchMoviePage from './pages/SearchMoviePage';
import MovieDetailPage from "./pages/MovieDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div> Home ... </div>} /> 
        <Route path="productos" element={<ListaProductosPagina />} />
        <Route path="peliculas" element={<SearchMoviePage />} />
        <Route path="peliculas/:idMovie" element={<MovieDetailPage />} />
        <Route path="*" element={<div> Pagina No Encontrada. Error 404.</div> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
