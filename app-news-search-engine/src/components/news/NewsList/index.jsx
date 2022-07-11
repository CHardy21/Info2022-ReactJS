
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getNewsList } from "../../../services/getNewsList"
import Loading from "../../general/Loading/Loading"
import MyPagination from "../../general/MyPagination"
import NewsItem from "../NewsItem"
import "./NewsList.css"

const News = ({news}) => {
    return(
        <div className="news-list">
            { news && news.map((val,index) => <NewsItem key={index} {...val}/>) }
        </div>
        
    )
}

const NewsList = ({busqueda}) => {
    const [news,setNews]= useState();
    const [loading,setLoading] = useState(false);
    const [pagina,  setPagina] = useState();

    const getNewsFromService = async () => {
        setLoading(true); // usado para mostrar el loading mientras espero al servicio
        const respuesta = await getNewsList(busqueda)
        
        console.log(respuesta)
        // ver si incluyo estas lineas
        if(respuesta.status="error") {
            console.log(respuesta.message)
        }
        // ----------------------------

        setNews(respuesta.articles)
        
        //console.log(respuesta.articles)
        setLoading(false)
    }

    // llamada al servicio
    useEffect(()=> {
        if(busqueda){
            console.log("Se llamo al servicio")
            getNewsFromService();
        }
    },[busqueda])

    if(loading){
        return <Loading />
    }

    return (
        <section className="news-list-content" >
            < News  news={news}/>
            < MyPagination />
        </section>
    )
}

export default NewsList