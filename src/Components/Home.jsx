import React, { useState, useEffect } from "react";
import "../Stylesheets/home.css";
const url =
  "  https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Frss.dw.com%2Fxml%2Frss-amh-news";
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
            const { title, description, link } = item;
            if (description) {
              return (
                <>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <div className="cards">
                      <img
                        src="https://us.123rf.com/450wm/alhovik/alhovik1709/alhovik170900031/86481591-stock-vector-breaking-news-background-world-global-tv-news-banner-design.jpg?ver=6"
                        alt=""
                      />
                      <h1>{title}</h1>
                      <p>{description}</p>
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
