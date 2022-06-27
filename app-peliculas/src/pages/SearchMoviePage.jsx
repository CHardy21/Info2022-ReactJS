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
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <Searcher onSearch={onSearch} />
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <ListMovies busqueda={busqueda} />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default SearchMoviePage