import { DateTime } from "luxon";
//const { DateTime } = require("luxon");

const NewsItem = ({ title, description, publishedAt, urlToImage }) => {
    
    const myDateTime = DateTime.fromISO(publishedAt)
    const fechaPublicacion = myDateTime.toFormat("dd-MM-yyyy")
    const horaPublicacion = myDateTime.toFormat("HH:mm")
    //console.log("ok? ",myDateTime.toFormat("dd-MM-yyyy HH:mm"))


    return (
        <article className="nl-box"> 
            <div className="nl-box-content">
                <h1>{title}</h1>
                <p>{description}</p>
                <span>Publicado el: {fechaPublicacion} a las {horaPublicacion} hs.</span>
            </div>
            <div className="nl-box-image">
                <img src={urlToImage} alt="" className="img-fluid"/>
                
            </div>
        </article>
    )
}

export default NewsItem;
