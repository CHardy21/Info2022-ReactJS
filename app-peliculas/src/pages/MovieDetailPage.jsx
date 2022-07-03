import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../services/getMovie"
import Loading from "../components/general/Loading/Loading";
import MovieItemDetail from "../components/movies/MovieItem/MovieItemDetail";

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

    if(!movie) return null;

    return (
        <MovieItemDetail movie={movie}/>
    )
}

export default MovieDetailPage;