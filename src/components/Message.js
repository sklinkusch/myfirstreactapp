import React, { Component } from "react";

export default class Message extends Component {
  render() {
    return (
      <div>
        <p>
          Hello World <code>React</code>.
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
