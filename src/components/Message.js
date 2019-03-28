import React, { Component } from "react";

export default class Message extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <p>
          Hello World{" "}
          <code>
            {this.props.name} {this.props.last}
          </code>
          .
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    );
  }
}
