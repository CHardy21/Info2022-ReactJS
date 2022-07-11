
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
    const [pagina,  setPagina] = useState(1);
    const [cantidadPaginas,setCantidadPaginas] = useState(0);

    const getNewsFromService = async (busqueda,pagina) => {
        setLoading(true); // usado para mostrar el loading mientras espero al servicio
        const respuesta = await getNewsList(busqueda,pagina)
        
        console.log(respuesta)
        // ver si incluyo estas lineas
        // if(respuesta.status="error") {
        //     console.log(respuesta.message)
        // }
        // ----------------------------

        setNews(respuesta.articles)
        const totalPaginas = Math.ceil(parseInt(respuesta.totalResults)/10);
        setCantidadPaginas(totalPaginas);
     
        //console.log(respuesta.articles)
        setLoading(false)
    }

    // llamada al servicio
    useEffect(()=> {
        if(busqueda){
            console.log("Se llamo al servicio")
            getNewsFromService(busqueda,pagina);
        }
    },[busqueda,pagina])

    const onChangePaginacion = (_evento,pag) => {
        setPagina(pag);
    }


    if(loading){
        return <Loading />
    }

    return (
        <section className="news-list-content" >
            < News  news={news}/>
            < MyPagination page={pagina} count={cantidadPaginas} onChenge={onChangePaginacion} />
        </section>
    )
}

export default NewsList