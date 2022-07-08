
import { Link } from "react-router-dom"
import MyPagination from "../../general/MyPagination"
import NewsItem from "../NewsItem"
import "./NewsList.css"


const NewsList = () => {
    return (
        <section className="news-list-content" >
            < NewsItem  />
            < MyPagination />
        </section>



    )
}

export default NewsList;