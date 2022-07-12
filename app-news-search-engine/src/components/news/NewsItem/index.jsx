const NewsItem = ({ title, description, publishedAt, urlToImage }) => {
    return (

        <article className="nl-box">
            <div className="nl-box-content">
                <b>{title}</b><br />
                {description}<br/>
                {publishedAt}
            </div>
            <div className="nl-box-image">
                <img src={urlToImage} alt="" className="img-fluid"/>
                
            </div>
        </article>
    )
}

export default NewsItem;
