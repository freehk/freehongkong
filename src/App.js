import React from "react";
import "./App.css";
import storyJson from "./data.json";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    width: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};
const styles = {
  card: {
    border: "1px solid #eeeeee",
    margin: 10,
    display: "flex",
    maxWidth: "30rem",
    justifyContent: "center",
    cursor: "pointer",
    position: "relative"
  },
  image: {
    maxWidth: "100%",
    display: "flex"
  }
};

class StoryCard extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div style={styles.card}>
        <img
          onClick={this.handleOpenModal}
          style={styles.image}
          src={this.props.picture}
        />
        <ReactModal
          isOpen={this.state.showModal}
          style={modalStyles}
          onRequestClose={this.handleCloseModal}
        >
          <p>{this.props.story}</p>
        </ReactModal>
      </div>
    );
  }
}

var renderData = storyJson.map(value => (
  <StoryCard
    key={value["picture"]}
    picture={value["picture"]}
    story={value["story"]}
  />
));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="App-header-message">
          Each picture tells a story about our recent struggle to remain free.
          Click on any of them to understand more.
        </p>
      </header>
      <div className="App-body">{renderData}</div>
    </div>
  );
}

export default App;
