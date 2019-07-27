import React, { Component } from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

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
    const modalStyle = {
      content: {
        width: "70%",
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        maxHeight: "90%"
      }
    };
    const imgStyle = {
      width: "12rem",
      height: "12rem",
      cursor: "pointer",
      // margin: "0.1rem",
      objectFit: "cover"
    };
    return (
      <div key={this.props.url} className="columns storyWall-item">
        <div className="item-wrap" style={imgStyle}>
          <img alt={this.props.alt} src={this.props.url} style={imgStyle} />
          <div className="overlay" onClick={this.handleOpenModal}>
            <div className="storyWall-item-meta">
              <h5>{this.props.alt}</h5>
              <p>{this.props.story}</p>
            </div>
          </div>
          <ReactModal
            style={modalStyle}
            isOpen={this.state.showModal}
            onRequestClose={this.handleCloseModal}
          >
            <img alt={this.props.alt} src={this.props.url} />
            <h5>{this.props.alt}</h5>
            <pre>{this.props.story}</pre>
          </ReactModal>
        </div>
      </div>
    );
  }
}

class StoryWall extends Component {
  render() {
    if (this.props.data) {
      var stories = this.props.data.pictures.map(value => {
        return (
          <StoryCard
            key={value.url}
            url={value.url}
            story={value.story || "story to be added"}
            alt={value.alt || "title"}
          />
        );
      });
    }

    const wallStyle = {
      display: "flex",
      alignItems: "baseline",
      flexWrap: "wrap",
      justifyContent: "center",
      position: "relative"
    };
    return (
      <section id="storyWall">
        <div className="row">
          <div className="twelve columns main-col">
            <h1>Each picture has a story. Click on them to find out.</h1>
            <div id="storyWall-wrapper" style={wallStyle}>
              {stories}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default StoryWall;
