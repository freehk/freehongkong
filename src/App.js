import React from "react";
import "./App.css";
import ReactCardFlip from "react-card-flip";
import storyJson from "./data.json";

class StoryCard extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <ReactCardFlip
        isFlipped={this.state.isFlipped}
        containerStyle={this.props.styles.flipcard}
      >
        <div
          key="front"
          style={this.props.styles.card}
          onClick={this.handleClick}
        >
          <img style={this.props.styles.image} src={this.props.picture} />
        </div>

        <div
          key="back"
          style={this.props.styles.card}
          onClick={this.handleClick}
        >
          <p>{this.props.story}</p>
        </div>
      </ReactCardFlip>
    );
  }
}
const styles = {
  flipcard: {
    border: "1px solid #eeeeee",
    height: 360,
    width: 480,
    margin: 10,
    WebkitFilter: "drop-shadow(0px 0px 5px #666)",
    filter: "drop-shadow(0px 0px 5px #666)",
    display: "inline-block",
    cursor: "pointer"
  },
  card: {
    height: "100%",
    width: "100%",
    position: "absolute"
  },
  image: {
    height: "100%",
    width: "100%"
  }
};

var renderData = storyJson.map(value => (
  <StoryCard
    key={value["picture"]}
    picture={value["picture"]}
    story={value["story"]}
    styles={styles}
  />
));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Free Hong Kong!</h1>
        <p>
          The freedom of Hong Kong has been under constant attack; and it has
          only gotten worse over the past few years.
        </p>
      </header>
      <div className="App-body">{renderData}</div>
    </div>
  );
}

export default App;
