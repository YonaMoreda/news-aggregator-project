import React, {useEffect, useState} from "react";

const img_dict = {
    "www.dw.com": "https://www.dw.com/cssi/dwlogo-print.gif",
    "amharic.voanews.com": "https://amharic.voanews.com/Content/responsive/VOA/am-ET/img/logo.png"
};

function getHostname(url) {
    let hostname;
    if (url.indexOf("//") > -1) {
        hostname = url.split('/')[2];
    } else {
        hostname = url.split('/')[0];
    }
    hostname = hostname.split(':')[0];
    hostname = hostname.split('?')[0];
    return hostname;
}
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
                                            src={`${enclosures ? enclosures[0].url : img_dict[getHostname(link)]}`}
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