import React from 'react';
import logo from './logo.svg';
import './App.css';

// Los componentes en React los podemos crear de distintas maneras:

// 1.- podemos usar una constante para crear un componente. En este caso p.e. <Anchor/>
const Anchor = () => {
  return (
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
      >
        Learn React
      </a>
  )
}
// 2.-
function Parrafo(props){
  return(
    <p> {props.contenido} </p>
  )
}

// 3.- Creando una clase que hereda de React.Component
class Imagen extends React.Component {
  render(){
    return(<img src={logo} className="App-logo" alt="logo" />)
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Imagen/>
        <Parrafo contenido = "Edit src/App.js and save to reload. XD" />
        <Anchor/>
      </header>
    </div>
  );
}

export default App;
