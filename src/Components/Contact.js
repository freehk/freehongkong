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
            <h4>Thank you for caring about Hong Kong!</h4>
            <p>
              If you would like to send us any pictures, stories, or anything at
              all, please contact us at novookoss at gmail. Or post directly at{" "}
              <a
                href="https://imgur.com/t/freehongkong"
                target="_blank"
                rel="noopener noreferrer"
              >
                imgur
              </a>
              &nbsp;with the tag <strong>freehongkong</strong>
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
