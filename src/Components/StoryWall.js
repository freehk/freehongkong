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
    return (
      <div key={this.props.url} className="columns storyWall-item">
        <div className="item-wrap">
          <img alt={this.props.alt} src={this.props.url} />
          <div className="overlay" onClick={this.handleOpenModal}>
            <div className="storyWall-item-meta">
              <h5>{this.props.alt}</h5>
              <p>{this.props.story}</p>
            </div>
          </div>
          <ReactModal
            isOpen={this.state.showModal}
            onRequestClose={this.handleCloseModal}
          >
            <img alt={this.props.alt} src={this.props.url} />
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

    return (
      <section id="storyWall">
        <div className="row">
          <div className="ten columns main-col">
            <h1>Each picture has a story. Click on them to find out.</h1>
            <div
              id="storyWall-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {stories}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default StoryWall;
