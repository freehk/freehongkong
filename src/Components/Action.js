import React, { Component } from "react";

var alignCenter = {
  textAlign: "center",
};

class Action extends Component {
  render() {
    if (this.props.data) {
      var headers = [
        <th key="date"> Date</th>,
        <th key="location"> Location</th>,
        <th key="event"> Event</th>
      ];
      var actions = this.props.data.map(value => {
        return (
          <tr key={value.title} style={alignCenter}>
            <td>{value.date}</td>
            <td>{value.location} </td>
            <td>
              <a href={value.link} target="_blank">
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
            <table>
              <tbody>
                <tr>{headers} </tr>
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
