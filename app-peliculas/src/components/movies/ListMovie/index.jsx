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

    const getMovieFromService = async (busqueda) => {
        setLoading(true);
        const respuesta = await getMovie(busqueda);
        setMovies(respuesta.Search);
        setLoading(false);

    console.log(respuesta.Search);

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
        < MyPagination />

        </>
    )
}

export default ListMovies