import { API_KEY, OMDB_API_HOST } from "./constant";

export const getMovie = async (criterioBusqueda='') => {
    try {
        // https://www.omdbapi.com/?s=spiderman&apikey=f1bc660c
        const respuesta = await fetch (`${OMDB_API_HOST}?s=${criterioBusqueda}&apikey=${API_KEY}`);
        return respuesta.json();

    } catch (error) {
        return { isError: true};

    }

}