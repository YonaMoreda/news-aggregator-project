import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function News() {
  useEffect(() => {
    fetchNews();
  }, []);
  const [items, setItems] = useState([]);
  const fetchNews = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const items = await data.json();
    setItems(items);
  };
  return (
    <>
      {items.map((data) => {
        return (
          <h5 key={data.id}>
            <Link to={`/news/${data.id}`}>{data.title}</Link>
          </h5>
        );
      })}
    </>
  );
}
export default News;
