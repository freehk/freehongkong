import React, { Component } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      currentImage: 0
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
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
      maxWidth: "12rem"
    };
    // TODO: css should go somewhere else
    // TODO: standard size.
    if (this.props.data) {
      var photos = this.props.data.map((value, index) => {
        return { src: value.url, photoIndex: index };
      });
      var images = photos.map(value => {
        return (
          <img
            src={value.src}
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
            <h2>Photos</h2>
            <pre>
              We hope that you will find this collection of material useful for
              sharing the news with the world. Note that we do not own the
              rights to any of this.
            </pre>
            {gallery}
          </div>
        </div>
      </section>
    );
  }
}

export default Gallery;
