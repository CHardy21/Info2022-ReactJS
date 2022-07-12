
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getNewsList } from "../../../services/getNewsList"
import Loading from "../../general/Loading/Loading"
import MyPagination from "../../general/MyPagination"
import NewsItem from "../NewsItem"
import "./NewsList.css"

const News = ({data}) => {
    //console.log("viendo array pasado por parametro: "+data)
    const news = data.articles;
    return(
        <div className="news-list">
            <p>Estas viendo {news.length} noticias de {data.totalResults} resultados. </p>
            { news && news.map((val,index) => <NewsItem key={index} {...val}/>) }
        </div>
        
    )
}

const NewsList = ({busqueda}) => {
    //const [news,setNews]= useState();
    const [data, setData] = useState();
    const [loading,setLoading] = useState(false);
    const [pagina,  setPagina] = useState(1);
    const [cantidadPaginas,setCantidadPaginas] = useState(0);

    const getNewsFromService = async (busqueda,pagina) => {
        setLoading(true); // usado para mostrar el loading mientras espero al servicio
        const respuesta = await getNewsList(busqueda,pagina)
        
        console.log(respuesta)
        setData(respuesta);

        // ver si incluyo estas lineas
        // if(respuesta.status="error") {
        //     console.log(respuesta.message)
        // }
        // ----------------------------

        //setNews(respuesta.articles)
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
        console.log(pag);
        setPagina(pag);
    }

    if(loading){
        return <Loading />
    }
    // Si no hay peliculas ni busqueda activa no muestro nada
    // sirve para la primera ves que entro a la pagina
    if (!data || !data.articles) {
        return null;
    }

    return (
        <section className="news-list-content" >
            < News  data={data}/>
            < MyPagination page={pagina} count={cantidadPaginas} onChange={onChangePaginacion} />
        </section>
    )
}

export default NewsList