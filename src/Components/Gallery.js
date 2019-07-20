import React, { Component } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";

class Temp extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      currentImage: 0
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal(event, { photo, index }) {
    this.setState({ showModal: true });
    this.setState({ currentImage: index });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
    this.setState({ currentImage: 0 });
  }

  render() {
    if (this.props.data) {
      var photos = this.props.data.map(value => {
        return { src: value.url, width: value.width || 1, height: value.width || 1 };
      });
      var gallery = (
        <div>
          <Gallery
            onClick={this.handleOpenModal}
            // direction={"column"}
            targetRowHeight={200}
            photos={photos}
          />
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

export default Temp;
