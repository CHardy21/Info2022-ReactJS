const NewsItem = ({ title, description, publishedAt, urlToImage }) => {
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
