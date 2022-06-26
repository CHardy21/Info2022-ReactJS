import { Container, Box, Grid } from "@mui/material"
import ListMovies from "../components/movies/ListMovie";
import Searcher from "../components/general/Searcher"

const SearchMoviePage = () => {
    return (
        <Container maxWidth="md">
            <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <Searcher />
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <ListMovies />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default SearchMoviePage