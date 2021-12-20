import { render } from "@testing-library/react";
import React from "react";
import axios from "axios";

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], Loading: false };
  }
  componentDidMount() {
    fetch("http://localhost:5000/playlist")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          Loading: true,
        });
      });
  }
  render() {
    const { items, Loading } = this.state;
    if (!Loading)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );
    return (
      <div>
        <h1> Playlist: </h1>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              Name: {item.name}
              <br /> Description: {item.description} <br /> Videos: <br />
              Date created: {item.dateCreated}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Playlist;
