import React, { Component } from "react";
import sortByDate from "../utils/sortByDate";

var trStyle = {
  textAlign: "left",
  paddingLeft: "1rem",
  paddingRight: "1rem"
};
var tdStyle = {
  paddingLeft: "1rem",
  paddingRight: "1rem"
};
var tableStyle = {
  borderCollapse: "collapse"
};

class Action extends Component {
  render() {
    if (this.props.data) {
      var headers = [
        <th style={trStyle} key="date">
          Date
        </th>,
        <th style={trStyle} key="location">
          Location
        </th>,
        <th style={trStyle} key="event">
          Event
        </th>
      ];
      var actions = this.props.data
        .filter(d => {
          return (
            new Date(d["date"]).getTime() >=
              new Date().getTime() - 24 * 60 * 60 * 1000 || d["date"] === ""
          );
        })
        .sort(sortByDate("date", "asc"))
        .map(value => {
          return (
            <tr key={value.title} style={trStyle}>
              <td style={tdStyle}>{value.date}</td>
              <td style={tdStyle}>{value.location} </td>
              <td style={tdStyle}>
                <a href={value.link} target="_blank" rel="noopener noreferrer">
                  <span>{value.title}</span>
                </a>
              </td>
            </tr>
          );
        });
    }

    return (
      <section id="action">
        <div className="row">
          <div className="twelve columns main-col">
            <h1>What can you do to help us?</h1>
            <table style={tableStyle}>
              <tbody>
                <tr>{headers}</tr>
                {actions}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  }
}

export default Action;
