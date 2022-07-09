const NewsItem = ({ title, urlToImage }) => {
    return (

        <article className="nl-box">
            <div className="nl-box-content">
                {title}
            </div>
            <div className="nl-box-image">
                <img src={urlToImage} alt="" />
            </div>
        </article>
    )
}

export default NewsItem;
