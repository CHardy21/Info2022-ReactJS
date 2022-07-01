import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../services/getMovie"
import Loading from "../components/general/Loading/Loading";

// https://www.omdbapi.com/?s=spiderman&apikey=f1bc660c


const MovieDetailPage = () => {
    const {idMovie} = useParams();
    const [movie, setMovie] = useState();
    const [loading, setLoading] = useState(false);
    
     console.log(idMovie);

    const getMovieFromService = async () => {
        setLoading(true);
        const respuesta = await getMovie(idMovie);
        //console.log(respuesta);
        setMovie(respuesta);
        setLoading(false);
    }

    useEffect(() => {
        if(!movie){
            getMovieFromService();
        }
    },[movie])

    if(loading) {
        return <Loading />
    }

    return (
        <section>
            <img src={movie.Poster} />
            <article>
                <p>Nombre: {movie.Title}</p>
                <p>Año: {movie.Year}</p>
                <p>Género: {movie.Genre}</p>
                <p>Trama: {movie.Plot}</p>
                <p>Reparto: {movie.Actors}</p>
            </article>


        </section>
    )
}

export default MovieDetailPage;