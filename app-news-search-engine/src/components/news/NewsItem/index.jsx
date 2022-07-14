import { DateTime } from "luxon";
//const { DateTime } = require("luxon");

const NewsItem = ({ title, description, publishedAt, urlToImage }) => {
    

    console.log(typeof({publishedAt}));// object
    const myDateTime = DateTime.fromISO({publishedAt})
    const myDateTime2 = myDateTime.ts
    console.log( myDateTime)
    console.log("myDateTime2 =>> "+ myDateTime2)
    //console.log("myDateTime3 =>> "+ myDateTime3)

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
