import React, { Component } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

class Event extends Component {
  render() {
    if (this.props.data) {
      var profilepic = "images/" + this.props.data.image;
    }

    return (
      <section id="event">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src={profilepic} alt="Profile Pic" />
          </div>
          <div className="nine columns main-col">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="StandNewsHK"
              theme="dark"
              noHeader={true}
              noFooter={true}
              transparent={true}
              options={{ height: 400 }}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Event;
