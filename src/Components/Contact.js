import React, { Component } from "react";

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
              Contact us at <a href="mailto:contact.freehongkong@gmail.com">contact.freehongkong@gmail.com</a>. Or post directly with the tag{" "}
              <strong>#freehongkong</strong> on social media
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
