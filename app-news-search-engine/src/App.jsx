import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyHeader from "./components/general/MyHeader";
import logo from './logo.svg';
import './App.css';
import MyFooter from "./components/general/MyFooter";
import Error404 from "./pages/Error404";

function App() {
  return (
    <>
    <MyHeader />
    <main>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<div> Home ... </div>} /> 
            <Route path="*" element={<Error404 /> }/>
        </Routes>
      </BrowserRouter>
    </main>
    <MyFooter />
    </>
  );
}

export default App;
