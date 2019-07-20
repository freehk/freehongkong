import React, { Component } from "react";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Event from "./Components/Event";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  getData() {
    $.ajax({
      url: "/data.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ data: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.data.header} />
        <Event data={this.state.data.event} />
        <Gallery data={this.state.data.gallery} />
        <Contact data={this.state.data.contact} />
      </div>
    );
  }
}

export default App;
