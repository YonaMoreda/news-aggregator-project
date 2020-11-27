import '../Stylesheets/App.css';
import React from "react";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            error: null,
            titles: [],
            descriptions: [],
            links: []
        }
    }

    componentDidMount() {
        fetch('https://rss.dw.com/xml/rss-amh-news')
            .then(response => response.text())
            .then(
                (str) => new window.DOMParser().parseFromString(str, "text/xml"),
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: error
                    });
                })
            .then(data => {
                    ["title", "description", "link"].forEach(attrib => {
                            let items = data.getElementsByTagName(attrib);
                            let item_values = []
                            for (let i = 0; i < items.length; i++) {
                                item_values.push(items[i].childNodes[0].nodeValue)
                            }
                            this.setState({
                                [attrib + 's']: item_values,
                                isLoaded: true
                            })
                        }
                    )
                }
            );
    }

    render() {
        const {error, isLoaded, titles, descriptions, links} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return <div className="App">
                {titles.map((title, i) => {
                        return (
                            <div className="gallery">
                                <h4>{title}</h4>
                                <div className="desc">{descriptions[i]}</div>
                                {/* eslint-disable-next-line react/jsx-no-target-blank */}
                                <a href={links[i]} target="_blank">Read more..</a>
                            </div>
                        )
                    }
                )}
            </div>
        }
    };
}

export default App;
