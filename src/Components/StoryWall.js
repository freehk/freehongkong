import React, { Component } from "react";

class StoryWall extends Component {
  render() {
    if (this.props.data) {
      var stories = this.props.data.pictures.map(picture => {
        return (
          <div key={picture.url} className="columns storyWall-item">
            <div className="item-wrap">
              <img alt={picture.alt} src={picture.url} />
              <div className="overlay">
                <div className="storyWall-item-meta">
                  <h5>{picture.alt || "title"}</h5>
                  <p>{picture.story || "random text"}</p>
                </div>
              </div>
            </div>
          </div>
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
