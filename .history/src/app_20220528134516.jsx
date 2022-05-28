import { Component, useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./app.css";
import PopularList from "./components/popularList";
import SearchBar from "./components/searchBar";
import VideoList from "./components/videoList";

class App extends Component {
  async handlefetch() {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    const url =
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResult=25&q=bts&key=AIzaSyAlkLx5tC8dmjZFFK3GeU9dRq8vVxH0m54";

    const response = await fetch(url, requestOptions);
    const data = await response.json();

    return data.items[0].snippet.title;
  }

  render() {
    this.handlefetch().then(console.log);
    return <VideoList onfetch={this.handlefetch} />;
  }
}

export default App;
