import React, { Component } from "react";

const shareButtonStyle = {
  width: "3rem",
  height: "3rem",
  cursor: "pointer",
  margin: "0.1rem",
  objectFit: "cover"
};

class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="ten columns">
            <p>
              Contact us at{" "}
              <a href="mailto:contact.freehongkong@gmail.com">
                contact.freehongkong@gmail.com
              </a>
              . Or post directly with the tag <strong>#freehongkong</strong> on
              social media
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ffreehongkong.netlify.com"
            >
              <img
                style={shareButtonStyle}
                src="https://www.sharethis.com/wp-content/uploads/2017/11/Facebook-share-icon.png"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/intent/tweet?hashtags=freehongkong&text=I+support+Hong+Kong+in+the+fight+for+freedom"
            >
              <img
                style={shareButtonStyle}
                src="http://stagewp.sharethis.com/wp-content/uploads/2019/03/twitterimg.png"
              />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
