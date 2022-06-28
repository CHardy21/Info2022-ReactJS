import { Button, TextField } from "@mui/material"
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
            <TextField  
                label="Buscar Película"
                variant="outlined"
                value={texto}
                onChange={onTextoChange}
            />
            <Button 
                variant="contained"
                onClick={onButtonSearchClick}
            >
                Buscar
            </Button>
        </section>
    )
}

export default Searcher