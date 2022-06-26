import { Button, TextField } from "@mui/material"
import "./Searcher.css"

const Searcher = () => {
    return (
        <section className="searcher">
            <TextField  label="Buscar Película" variant="outlined"  />
            <Button> Buscar </Button>
        </section>
    )
}

export default Searcher