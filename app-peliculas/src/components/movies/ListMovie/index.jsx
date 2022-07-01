import React, { useEffect, useState } from "react"
import { getMovies } from "../../../services/getMovie"
import Loading from "../../general/Loading/Loading"
import MyPagination from "../../general/MyPagination"
import MovieItem from "../MovieItem"
import "./ListMovie.css"

const Movies = ({movies}) => {
    return(
        <section className="list-movie">
            {movies && movies.map((val, index) => <MovieItem key={index} {...val} />)}
        </section>
    )
}

const ListMovies = ({busqueda}) => {
    //console.log(props.busqueda);
    //const movies = [1,2,3,4,5,6,7,8,9,10].map(val => <MovieItem />)  

    const [movies, setMovies] = useState();
    const [loading, setLoading] = useState(false);
    const [pagina, setPagina] = useState(1);
    const [cantidadPaginas, setCantidadPaginas] = useState();
;
    const getMoviesFromService = async (busqueda,pagina) => {
        setLoading(true);

        const respuesta = await getMovies(busqueda,pagina);

        const totalPaginas = Math.ceil(parseInt(respuesta.totalResults)/10);

        setMovies(respuesta.Search);
        setCantidadPaginas(totalPaginas);
        setLoading(false);

    }

    const onChangePaginacion = (_evento,pag) => {
        setPagina(pag);
    }

    useEffect(() => {
        if(busqueda) {
            getMoviesFromService(busqueda,pagina);
        }
    },[busqueda,pagina])

    
// Si se esta realizando una busqueda y aun no recibo la lista de peliculas
// muestro el Loading
    if(loading) {
        return <Loading />
    }

// Si no hay peliculas ni busqueda activa no muestro nada
// sirve para la primera ves que entro a la pagina
    if(!movies){
        return null;
    }
// cuando termina la busqueda y recibo la lista de peliculas
// muestro mis componentes
    return (
        <>
        <Movies movies={movies} />
        < MyPagination count={cantidadPaginas} page={pagina} onChange={onChangePaginacion} />
        </>
    )
}

export default ListMovies