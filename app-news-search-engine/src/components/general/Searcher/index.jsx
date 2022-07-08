import { useState } from "react";
// import { Button } from 'react-bootstrap';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import "./Searcher.css"

const Searcher = (props) => {
    const [texto, setTexto] = useState('');
    const onTextoChange = (evento) => {
        //console.log(evento.target.value);
            setTexto(evento.target.value)

    }
    
    const onButtonSearchClick = () =>{
            props.onSearch(texto);
    }

// <Button variant="btn primary">Primary</Button>{' '}
    return (
        <section className="searcher">
            <input 
                type="text" 
                className="form-control" 
                placeholder="que desea buscar" 
                aria-label="Username" 
                aria-describedby="basic-addon1" 
                onChange={onTextoChange}
            />
            <button 
                type="button" 
                className="btn btn-outline-primary" 
                disabled={ texto.length<3 }
                onClick={onButtonSearchClick}
            >
                Buscar
            </button>
        </section>
    )
}

export default Searcher