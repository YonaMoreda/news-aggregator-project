import React from "react";
import Navigation from "./Navigation";
import Contact from "./Contact";
import News from "./News";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NewsDetail from "./NewsDetail";
const Home = () => {
  return (
    <>
      <h1>home</h1>
    </>
  );
};

export const HomePage = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route exact path="/news" component={News} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/news/:id" component={NewsDetail} />
      </Router>
    </>
  );
};
