import React, { useEffect, useState } from "react";
import Loader from "./loader";

const img_dict = {
  "www.dw.com": "https://www.dw.com/cssi/dwlogo-print.gif",
  "amharic.voanews.com":
    "https://amharic.voanews.com/Content/responsive/VOA/am-ET/img/logo.png",
};

function getHostname(url) {
  let hostname;
  if (url.indexOf("//") > -1) {
    hostname = url.split("/")[2];
  } else {
    hostname = url.split("/")[0];
  }
  hostname = hostname.split(":")[0];
  hostname = hostname.split("?")[0];
  return hostname;
}
function Cards({ url }) {
  const [news, setNews] = useState([]);
  const [loading, setLoader] = useState(true);
  const [error, setError] = useState(false);
  const getNews = async () => {
    try {
      const response = await fetch(url);
      if (response.status <= 200 || response.status >= 399) {
        const data = await response.json();
        setNews(data);
        setLoader(false);
        setError(false);
      } else {
        setLoader(false);
        setError(true);
      }
    } catch (error) {
      console.log(error);
      setLoader(false);

      setError(true);
    }
  };
  useEffect(() => {
    getNews();
  }, []);
  let news_items = news.items;
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <h1>error ...</h1>;
  }
  return (
    <>
      {news_items &&
        news_items.map((item, index) => {
          const { title, description, link, enclosures } = item;
          if (description) {
            return (
              <div key={index}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <div className="card">
                    <img
                      src={`${
                        enclosures
                          ? enclosures[0].url
                          : img_dict[getHostname(link)]
                      }`}
                      alt={title}
                    />
                    <h1>{title}</h1>

                    <p>{description.substring(0, 200)}</p>
                  </div>
                </a>
              </div>
            );
          }
        })}
    </>
  );
}

export default Cards;
