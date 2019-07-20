import React, { Component } from "react";

class Event extends Component {
  render() {
    if (this.props.data) {
      var profilepic = "images/" + this.props.data.image;
    }

    return (
      <section id="event">
        <div className="row">
        <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Profile Pic" />
         </div>
          <div className="nine columns main-col">
            <h2>News and Events</h2>
            <p>To be updated soon</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Event;
