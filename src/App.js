import React from "react";
import "./App.css";

class Square extends React.Component {
  render() {
    var squareStyle = {
      height: 150,
      backgroundColor: this.props.picture
    };

    return <div style={squareStyle} />;
  }
}

class Label extends React.Component {
  render() {
    var labelStyle = {
      fontFamily: "sans-serif",
      fontWeight: "bold",
      padding: 13,
      margin: 0
    };

    return <p style={labelStyle}>{this.props.story}</p>;
  }
}

class StoryCard extends React.Component {
  render() {
    var cardStyle = {
      height: 200,
      width: 150,
      padding: 50,
      display: "inline-block",
      WebkitFilter: "drop-shadow(0px 0px 5px #666)",
      filter: "drop-shadow(0px 0px 5px #666)"
    };

    return (
      <div style={cardStyle}>
        <Square picture={this.props.picture} />
        <Label story={this.props.story} />
      </div>
    );
  }
}
var colors = [
  "#393E41",
  "#E94F37",
  "#1C89BF",
  "#A1D363",
  "#85FFC7",
  "#297373",
  "#FF8552",
  "#A40E4C"
];
var renderData = colors.map(value => (
  <StoryCard key={value} picture={value} story="bullshit" />
));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Free Hong Kong!</p>
      </header>
      <div className="App-body">{renderData}</div>
    </div>
  );
}

export default App;
