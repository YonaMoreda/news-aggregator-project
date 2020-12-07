import React, { useState, useEffect } from "react";
import "../Stylesheets/home.css";
const url2 =
  " https://send-rss-get-json.herokuapp.com/convert/?u=https://rss.dw.com/xml/rss-amh-news";
const url =
  "https://send-rss-get-json.herokuapp.com/convert/?u=https://amharic.voanews.com/api/epiqq";

const img =
  "https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?k=6&m=1182477852&s=612x612&w=0&h=X-UipiiX5xcMw9dBhzKZWG7UcWjEOARl2s_oTVV8rtE=";
function Home() {
  const [news, setNews] = useState([]);
  const getNews = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setNews(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getNews();
  }, []);
  const da = news.items;
  console.log(da);
  return (
    <>
      <nav className="nav">
        <h2>logo</h2>
        <h2>explore</h2>
        <h2>Must read</h2>
        <h2>Topics</h2>
      </nav>
      <section>
        {da &&
          da.map((item) => {
            const { title, description, link, enclosures } = item;
            if (description) {
              console.log(enclosures[0].url);
              return (
                <>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <div className="cards">
                      <img
                        src={`${enclosures[0].url ? enclosures[0].url : img}`}
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
      </section>
    </>
  );
}

export default Home;
