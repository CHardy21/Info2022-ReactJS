import './MovieItemDetail.css';

const MovieItemDetail = ({
    movie
}) => {
    return (
        <section className="pelicula-pagina" role='pelicula'>
            <div>
                <img src={movie.Poster} />
            </div>
            <article className='pelicula-pagina-description'>
                <p> Nombre: {movie.Title}</p>
                <p> Año: {movie.Year}</p>
                <p> Genero: {movie.Genre}</p>
                <p> Trama: {movie.Plot}</p>
                <p> Reparto: {movie.Actors}</p>
            </article>
        </section>
    )
}

export default MovieItemDetail
