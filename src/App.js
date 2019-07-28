import React, { Component } from "react";
import "./App.css";
import data from "./data.json";
import Header from "./Components/Header";
import Event from "./Components/Event";
import Intro from "./Components/Intro";
import StoryWall from "./Components/StoryWall";
import Contact from "./Components/Contact";
import Gallery from "./Components/Gallery";
import Action from "./Components/Action";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  getData() {
    this.setState({ data: data });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.data.header} />
        <Intro data={this.state.data.intro} />
        <StoryWall data={this.state.data.storyWall} />
        {/* <Gallery /> */}
        {/* <Resource /> */}
        <Action data={this.state.data.action} />
        <Event data={this.state.data.event} />
        <Contact data={this.state.data.contact} />
      </div>
    );
  }
}

export default App;
