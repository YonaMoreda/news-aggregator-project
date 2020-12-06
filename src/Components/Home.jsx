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
    fetch("https://rss.dw.com/xml/rss-amh-news")
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
  }

  render() {
    const { error, isLoaded, titles, descriptions, links } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          <nav class="nav">
            <h2>logo</h2>
          </nav>
          <section>
            {titles.map((title, i, image) => {
              if (i >= 2) {
                return (
                  <>
                    <a href={links[i]} target="_blank" rel="noreferrer">
                      <div class="cards">
                        <img
                          src="https://i.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0"
                          alt=""
                        />
                        <h1>{title}</h1>
                        <p>{descriptions[i]}</p>
                      </div>
                    </a>
                  </>
                );
              } else {
                return console.log("hi");
              }
            })}
          </section>
        </>
      );
    }
  }
}
export default Home;
