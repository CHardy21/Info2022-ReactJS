import Loading from "../../general/Loading/Loading"
import MyPagination from "../../general/MyPagination"
import MovieItem from "../MovieItem"
import "./ListMovie.css"


const ListMovies = (props) => {
    console.log(props.busqueda);

    const movies = [1,2,3,4,5,6,7,8,9,10].map(val => <MovieItem />)  

    return (
        <>
        < Loading />
        <section className="list-movie">
            {movies}
        </section>
        < MyPagination />

        </>
    )
}

export default ListMovies