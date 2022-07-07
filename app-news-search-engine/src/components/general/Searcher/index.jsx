import { useState } from "react";
import { Button } from 'react-bootstrap';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import "./Searcher.css"

const Searcher = (props) => {
    const [texto, setTexto] = useState('');
    const onTextoChange = (evento) => {
        //console.log(evento.target.value);
            setTexto(evento.target.value)
    }
    
    const onButtonSearchClick = () =>{
        if(texto.length > 4){
            props.onSearch(texto);
        }
    }
// <Button variant="btn primary">Primary</Button>{' '}
    return (
        <section className="searcher">
            
            <input type="text" class="form-control" placeholder="¿Qué desea buscar?" aria-label="Username" aria-describedby="basic-addon1"></input>
            <button type="button" class="btn btn-outline-primary">
                Buscar
            </button>

        </section>
    )
}

export default Searcher