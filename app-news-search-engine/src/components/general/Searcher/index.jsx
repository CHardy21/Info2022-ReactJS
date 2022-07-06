import { useState } from "react";
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

    return (
        <section className="searcher">
            
            TextField - Button

        </section>
    )
}

export default Searcher