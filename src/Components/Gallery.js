import React, { Component } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import api from "../utils/api";
import isLocalHost from "../utils/isLocalHost";

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      currentImage: 0,
      images: []
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  componentDidMount() {
    api.readNotCategory("design material").then(images => {
      if (images.message === "unauthorized") {
        if (isLocalHost()) {
          alert(
            "FaunaDB key is not unauthorized. Make sure you set it in terminal session where you ran `npm start`. Visit http://bit.ly/set-fauna-key for more info"
          );
        } else {
          alert(
            "FaunaDB key is not unauthorized. Verify the key `FAUNADB_SERVER_SECRET` set in Netlify enviroment variables is correct"
          );
        }
        return false;
      }

      this.setState({
        images: images
      });
    });
  }
  handleOpenModal(event, index) {
    this.setState({ showModal: true });
    this.setState({ currentImage: index });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
    this.setState({ currentImage: 0 });
  }

  render() {
    const style = {
      margin: 10,
      display: "flex",
      alignItems: "baseline",
      flexWrap: "wrap",
      justifyContent: "center",
      cursor: "pointer",
      position: "relative"
    };
    const imgStyle = {
      width: "12rem",
      height: "12rem",
      margin: "0.1rem",
      objectFit: "cover"
    };
    // TODO: css should go somewhere else
    if (this.state.images) {
      var photos = this.state.images.map((value, index) => {
        return {
          thumbnail_url: value.data.thumbnail_url,
          src: value.data.url,
          photoIndex: index
        };
      });
      var images = photos.map(value => {
        return (
          <img
            key={value.thumbnail_url}
            src={value.thumbnail_url}
            alt={value.alt || ""}
            style={imgStyle}
            onClick={event => this.handleOpenModal(event, value.photoIndex)}
          />
        );
      });
      var gallery = (
        <div>
          <div style={style}> {images}</div>
          <ModalGateway>
            {this.state.showModal ? (
              <Modal onClose={this.handleCloseModal}>
                <Carousel
                  currentIndex={this.state.currentImage}
                  views={photos.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      );
    }

    return (
      <section id="gallery">
        <div className="row">
          <div className="twelve columns main-col">
            <h1>Gallery</h1>
            <pre>
              Have a taste of what we are going through every day. This is the
              state we are in until we find freedom
            </pre>
            {gallery}
          </div>
        </div>
      </section>
    );
  }
}

export default Gallery;
