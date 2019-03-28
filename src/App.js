import React, { Component } from "react";
import "./App.scss";
import Logo from "./components/Logo";
import Message from "./components/Message";

class App extends Component {
  state = { name: "" };
  updateUsername = e => {
    this.setState({ name: e.target.value });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo />
          <Message name={this.state.name} />
          <input type="name" id="name" onChange={this.updateUsername} />
        </header>
      </div>
    );
  }
}

export default App;
