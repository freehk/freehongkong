import React, { Component } from "react";

class Intro extends Component {
  render() {
    if (this.props.data) {
      var message = this.props.data.message;
    }
    return (
      <section id="intro">
        <div className="row">
          <div className="twelve columns">
            <pre>{message}</pre>
          </div>
        </div>
      </section>
    );
  }
}

export default Intro;
