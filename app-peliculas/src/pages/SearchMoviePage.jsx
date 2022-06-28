import { Container, Box, Grid } from "@mui/material"
import ListMovies from "../components/movies/ListMovie";
import Searcher from "../components/general/Searcher"
import { useState } from "react";

const SearchMoviePage = () => {
    const [busqueda, setBusqueda] = useState('');
    const onSearch = (criterio) =>{
        setBusqueda(criterio);
    }

    return (
        <Container maxWidth="lg">
            <Box sx={{ bgcolor: '#cfd5fc', height: '100vh' }} >
                <Searcher onSearch={onSearch} />
                <ListMovies busqueda={busqueda} />
            </Box>
        </Container>
    );
}

export default SearchMoviePage