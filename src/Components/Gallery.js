import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class Gallery extends Component {
  render() {
    if (this.props.data) {
      var carousel = (
        <Carousel dynamicHeight useKeyboardArrows infiniteLoop>
          {this.props.data.pictures.map(picture => (
            <div key={picture.url}>
              <img src={picture.url} alt={picture.alt} />
              <pre className="legend">{picture.story || "to be added"}</pre>
            </div>
          ))}
        </Carousel>
      );
    }

    return (
      <section id="gallery">
        <div className="row">
          <div className="ten columns main-col">
            <h1>Each picture has a story.</h1>
            <div
              id="gallery-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {carousel}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Gallery;
