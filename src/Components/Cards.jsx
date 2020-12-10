import React, {useEffect, useState} from "react";

const img =
    "https://www.dw.com/cssi/dwlogo-print.gif";


function Cards(props) {
    const [news, setNews] = useState([]);
    const getNews = async () => {
        try {
            const response = await fetch(props.url);
            return await response.json();
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getNews().then(r => setNews(r));
    }, []);
    let news_items = news.items;
    return (
        <>
            {news_items &&
                news_items.map((item) => {
                    const {title, description, link, enclosures} = item;
                    if (description) {
                        return (
                            <>
                                <a href={link} target="_blank" rel="noopener noreferrer">
                                    <div className="card">
                                        <img
                                            src={`${enclosures ? enclosures[0].url : img}`}
                                            alt={title}
                                        />
                                        <h1>{title}</h1>
                                        <p>{description.substring(0, 200)}</p>
                                    </div>
                                </a>
                            </>
                        );
                    }
                })}
        </>
    );
}

export default Cards;