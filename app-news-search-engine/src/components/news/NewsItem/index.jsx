import { DateTime } from "luxon";
//const { DateTime } = require("luxon");

const NewsItem = ({ title, description, publishedAt, urlToImage }) => {
    
    //const dt = DateTime.fromISO({publishedAt})
    const dt =DateTime.fromFormat({publishedAt}, 'MMMM dd, yyyy')

    console.log(dt)

    return (
        <article className="nl-box">
            <div className="nl-box-content">
                <h1>{title}</h1>
                <p>{description}</p>
                <span>Publicado el: {publishedAt}</span>
            </div>
            <div className="nl-box-image">
                <img src={urlToImage} alt="" className="img-fluid"/>
                
            </div>
        </article>
    )
}

export default NewsItem;
