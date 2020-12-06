import React from "react";
import "../Stylesheets/home.css";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            error: null,
            titles: [],
            descriptions: [],
            links: [],
        };
    }

    componentDidMount() {
        let rss_links = [
            "https://rss.dw.com/xml/rss-amh-news" /*, "https://amharic.voanews.com/api/epiqq",
            /*"https://www.addisadmassnews.com/index.php?option=com_k2&view=itemlist&layout=category&task=category&id=1&Itemid=180&format=feed",
            "http://feeds.bbci.co.uk/news/world/africa/rss.xml"*/,
        ];
        rss_links.forEach((rss_link) => {
            fetch(rss_link)
                .then((response) => response.text())
                .then(
                    (str) => new window.DOMParser().parseFromString(str, "text/xml"),
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error: error,
                        });
                    }
                )
                .then((data) => {
                    console.log("DATA:" + data);
                    ["title", "description", "link"].forEach((attrib) => {
                        let items = data.getElementsByTagName(attrib);
                        let item_values = [];
                        for (let i = 0; i < items.length; i++) {
                            item_values.push(items[i].childNodes[0].nodeValue);
                        }
                        this.setState({
                            [attrib + "s"]: item_values,
                            isLoaded: true,
                        });
                    });
                });
        });
    }

    render() {
        const {error, isLoaded, titles, descriptions, links} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <>
                    <nav className="nav">
                        <h2>የዜና አርማ</h2>
                        <h2>ያስሱ</h2>
                        <h2>ዋና ዜና</h2>
                        <h2>ርዕሶች</h2>
                    </nav>
                    <header>አሁን በመታየት ላይ</header>
                    <section>
                        {titles.map((title, i, image) => {
                            if (i >= 2) {
                                return (
                                    <>
                                        <a href={links[i]} target="_blank" rel="noreferrer">
                                            <div className="cards">
                                                <img
                                                    src="https://us.123rf.com/450wm/alhovik/alhovik1709/alhovik170900031/86481591-stock-vector-breaking-news-background-world-global-tv-news-banner-design.jpg?ver=6"
                                                    alt=""
                                                />
                                                <h1>{title}</h1>
                                                <p>{descriptions[i]}</p>
                                                {/* substr(1, 4) */}
                                            </div>
                                        </a>
                                    </>
                                );
                            } else {
                                return null;
                            }
                        })}
                    </section>
                    <footer>የተወሰነ ቦታ ያዥ - ፪፼፲፫ </footer>
                </>
            );
        }
    }
}

export default Home;
