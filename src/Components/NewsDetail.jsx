import React, { useState, useEffect } from "react";

function NewsDetail({ match }) {
  useEffect(() => {
    fetchDetail();
  });
  const [item, setItem] = useState([]);

  const fetchDetail = async () => {
    const fetchNews = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${match.params.id}`
    );
    const item = await fetchNews.json();
    setItem(item);
  };
  return (
    <>
      <h1>{item.title}</h1>
      <h1>{item.body}</h1>
    </>
  );
}
export default NewsDetail;
