import { render } from "@testing-library/react";
import React from "react";
import axios from "axios";

class VideoDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], Loading: false };
  }
  componentDidMount() {
    const { slug } = this.props.match.params;
    axios
      .post("http://localhost:5000/playlist/videos", {
        id: slug,
      })
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
        <h1> Videos: </h1>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              Name: {item.name}
              <br /> Duration: {item.duration}
              <br /> Description : {item.description}
              <br /> Date created: {item.dateCreated}
              <br /> Thumbnail: {item.thumbnail}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default VideoDetail;
