import React, { useEffect, useState } from "react"
import { getMovie } from "../../../services/getMovie"
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
    const getMovieFromService = async (busqueda) => {
        setLoading(true);

        const respuesta = await getMovie(busqueda);

        const totalPaginas = Math.ceil(parseInt(respuesta.totalResults)/10);

        setMovies(respuesta.Search);
        setCantidadPaginas(totalPaginas);
        setLoading(false);

        // console.log(respuesta.Search);
        // console.log(respuesta.totalResults);
        // console.log("Pagina; "+pagina);
        // console.log("Total Paginas; "+ cantidadPaginas);
    }

    const onChangePaginacion = () => {
        setPagina(pagina+1);
        console.log("nueva Pag: " + pagina);
    }

    useEffect(() => {
        if(busqueda) {
            getMovieFromService(busqueda);
        }
    },[busqueda])

    

    if(loading) {
        return <Loading />
    }

    return (
        <>
        <Movies movies={movies} />
        < MyPagination count={cantidadPaginas} page={pagina} onChange={onChangePaginacion} />

        </>
    )
}

export default ListMovies