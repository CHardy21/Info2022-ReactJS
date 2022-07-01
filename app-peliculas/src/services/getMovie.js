import { API_KEY, OMDB_API_HOST } from "./constant";

export const getMovies = async (criterioBusqueda='', pagina = 1 ) => {
    try {
        // https://www.omdbapi.com/?s=spiderman&apikey=f1bc660c
        const respuesta = await fetch (
            `${OMDB_API_HOST}?s=${criterioBusqueda}&apikey=${API_KEY}&page=${pagina}`
        );
        return respuesta.json();

    } catch (error) {
        return { isError: true};

    }
}

export const getMovie = async (idMovie=0 ) => {
    try {
        // https://www.omdbapi.com/?s=spiderman&apikey=f1bc660c
        const respuesta = await fetch (
            `${OMDB_API_HOST}?i=${idMovie}&apikey=${API_KEY}`
        );
        return respuesta.json();

    } catch (error) {
        return { isError: true};

    }

}