import React, { Component } from "react";

class Header extends Component {
  render() {
    if (this.props.data) {
      var mainMessage = this.props.data.mainMessage;
      var mainMessageChinese = this.props.data.mainMessageChinese;
      var secondaryMessage = this.props.data.secondaryMessage;
    }

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#event">
                Event
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#storyWall">
                Stories
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#gallery">
                Gallery
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resource">
                Resource
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">{mainMessage}</h1>
            <h1 className="responsive-headline">{mainMessageChinese}</h1>
            <span>{secondaryMessage}</span>
            <hr />
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#event">
            <i className="icon-down-circle" />
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
