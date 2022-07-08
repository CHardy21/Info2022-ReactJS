
import { useState } from "react"
import { Link } from "react-router-dom"
import MyPagination from "../../general/MyPagination"
import NewsItem from "../NewsItem"
import "./NewsList.css"

const NewsList = ({busqueda}) => {

    const [news,setNews]= useState();
    const [loading,setLoading] = useState();

    //console.log(props.news)
    return (
        <section className="news-list-content" >
            < NewsItem  />
            < MyPagination />
        </section>



    )
}

export default NewsList;