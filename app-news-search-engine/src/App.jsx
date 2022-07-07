import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import MyHeader from "./components/general/MyHeader";
import MyFooter from "./components/general/MyFooter";
import Error404 from "./pages/Error404";
import Searcher from "./components/general/Searcher";


function App() {
  return (
    <>
    <MyHeader />
    <main>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Searcher />} /> 
            <Route path="*" element={<Error404 /> }/>
        </Routes>
      </BrowserRouter>
    </main>
    <MyFooter />
    </>
  );
}

export default App;
