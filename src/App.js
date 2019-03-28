import React, { Component } from "react";
import "./App.css";
import Logo from "./components/Logo";
import Message from "./components/Message";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo />
          <Message name="Stefan" />
        </header>
      </div>
    );
  }
}

export default App;
