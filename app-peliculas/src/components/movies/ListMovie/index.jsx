import React, { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { Link } from "react-router-dom"
import { getMovies } from "../../../services/getMovie"
import Loading from "../../general/Loading/Loading"
import MyPagination from "../../general/MyPagination"
import MovieItem from "../MovieItem"
import "./ListMovie.css"

const Movies = ({movies}) => {
    return(
        <section className="list-movie">
            {movies && movies.map((val, index) => 
                <Link key={index} to={val.imdbID} target="_blank" >
                    <MovieItem {...val} />
                </Link>
            )}
        </section>
    )
}

const ListMovies = ({busqueda}) => {

    // Queries (react-query)
    //const { isLoading, isError, data, } = useQuery('movies', async () => getMovies(busqueda,pagina))
    const [data, setData] = useState();
    const [pagina, setPagina] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const getMoviesFromService = async () => {
        setIsLoading(true);
        const respuesta = await getMovies(busqueda, pagina);
        setData(respuesta);
        setIsLoading(false);
    }
    

    useEffect(() => {
        if(busqueda) {
            getMoviesFromService(busqueda,pagina);
        }
    },[busqueda,pagina])

    const onChangePaginacion = (_evento,pag) => {
        setPagina(pag);
    }

    
// Si se esta realizando una busqueda y aun no recibo la lista de peliculas
// muestro el Loading
    if(isLoading) {
        return <Loading />
    }

    
    //if(isError) return <div>Algo ha salido mal...</div>;

// Si no hay peliculas ni busqueda activa no muestro nada
// sirve para la primera ves que entro a la pagina
    if (!data || !data.Search) {
        return null;
    }

    const cantidadPaginas = Math.ceil(parseInt(data.totalResults)/10);
    
// cuando termina la busqueda y recibo la lista de peliculas
// muestro mis componentes
    return (
        <>
        <Movies movies={data.Search} />
        < MyPagination count={cantidadPaginas} page={pagina} onChange={onChangePaginacion} />
        </>
    )
}

export default ListMovies