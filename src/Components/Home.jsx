import React from "react";
import "../Stylesheets/home.css";
import Cards from "./Cards";

const url2 =
    " https://send-rss-get-json.herokuapp.com/convert/?u=https://rss.dw.com/xml/rss-amh-news";
const url1 =
    "https://send-rss-get-json.herokuapp.com/convert/?u=https://amharic.voanews.com/api/epiqq";

function Home() {
    return (
        <>
            <nav className="nav">
                <h2>የዜና አርማ</h2>
                <h2>ያስሱ</h2>
                <h2>ዋና ዜና</h2>
                <h2>ርዕሶች</h2>
            </nav>
            <header>አሁን በመታየት ላይ</header>
            <h2 className="CardHeader">የአሜሪካ ድምፅ (ቪኦኤ)</h2>
            <section>
                <Cards url={url1}/>
            </section>
            <h2 className="CardHeader">DW ሬዲዮ</h2>
            <section>
                <Cards url={url2}/>
            </section>
            <footer>የተወሰነ ቦታ ያዥ - ፪፼፲፫</footer>
        </>
    );
}

export default Home;
