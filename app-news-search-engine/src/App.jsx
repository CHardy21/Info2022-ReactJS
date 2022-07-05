import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyHeader from "./components/general/MyHeader";
import logo from './logo.svg';
import './App.css';
import MyFooter from "./components/general/MyFooter";

function App() {
  return (
    <>
    <MyHeader />

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div> Home ... </div>} /> 
          <Route path="*" element={<div> Pagina No Encontrada. Error 404.</div> }/>
      </Routes>
    </BrowserRouter>

    <MyFooter />
    </>
  );
}

export default App;
